import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contatoSchema } from "@/lib/schema";
import { allow } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

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

  // Envio via Resend
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL!,
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
}
