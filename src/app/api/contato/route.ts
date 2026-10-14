import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contatoSchema } from "@/lib/schema";
import { allow } from "@/lib/rate-limit";

export async function POST(req: Request) {
  // Rate limit por IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!allow(ip)) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Aguarde antes de tentar novamente." },
      { status: 429 }
    );
  }

  // Parse do body
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json(
      { ok: false, error: "Dados inválidos" },
      { status: 400 }
    );
  }

  // Validação com Zod (mesmo schema do cliente)
  const parsed = contatoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Honeypot: se `website` vier preenchido, é bot — simula sucesso silenciosamente
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { nome, email, mensagem } = parsed.data;

  // Se a chave do Resend ainda não estiver configurada no ambiente (ex: durante aprovação)
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log(
      "[contato/route] RESEND_API_KEY não configurada. Mensagem simulada:",
      { nome, email, mensagem }
    );
    return NextResponse.json({
      ok: true,
      message: "Mensagem recebida em modo demonstração.",
    });
  }

  // Envio via Resend quando a chave estiver configurada
  try {
    const resend = new Resend(apiKey);
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.CONTACT_TO_EMAIL || "contato@gpx7.com.br";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Novo contato pelo site — ${nome}`,
      text: [
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        "",
        "Mensagem:",
        mensagem,
      ].join("\n"),
      html: `
        <h2>Novo contato via site GPX7</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("[contato/route] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Falha no envio do e-mail. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contato/route] Exceção no envio:", err);
    return NextResponse.json(
      { ok: false, error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
