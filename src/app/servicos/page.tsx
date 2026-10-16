// src/app/servicos/page.tsx
// Página de detalhamento dos serviços da GPX7 Audiovisual

import type { Metadata } from "next";
import Link from "next/link";
import { HeaderNav } from "@/components/HeaderNav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços em Detalhes | GPX7 Soluções Audiovisuais",
  description:
    "Conheça em detalhes todas as soluções de audiovisual, sonorização, iluminação, informática e transmissão para congressos, feiras e convenções.",
};

export default function ServicosPage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{ background: "var(--color-bg)" }}
    >
      <HeaderNav />

      <main className="flex-1 pt-[160px] pb-[100px] relative overflow-hidden flex flex-col justify-center">
        {/* Efeito de brilho de fundo sutil */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: "var(--color-brand)" }}
          aria-hidden="true"
        />

        <Container className="relative z-10 text-center max-w-[800px]">
          {/* Breadcrumb / Botão de retorno */}
          <div className="mb-8 flex justify-center">
            <Link
              href="/#servicos"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors px-4 py-2 rounded-full border border-[var(--color-line)] bg-[var(--color-bg-alt)]/60 backdrop-blur-sm"
            >
              <ArrowLeft size={16} />
              <span>Voltar para a página inicial</span>
            </Link>
          </div>

          <Eyebrow className="justify-center flex">
            Estrutura Completa · Em Detalhes
          </Eyebrow>

          <SectionTitle className="mb-6">
            Soluções completas para **transformar** seu evento.
          </SectionTitle>

          <p
            className="text-[17px] sm:text-[19px] leading-relaxed mb-10 max-w-[620px] mx-auto"
            style={{ color: "var(--color-mute)" }}
          >
            Estamos estruturando o detalhamento aprofundado de cada modalidade,
            equipamentos e soluções técnicas da GPX7.
          </p>

          {/* Card placeholder visual elegante com a cor de fundo do sistema */}
          <div
            className="rounded-3xl p-8 sm:p-12 text-center border relative overflow-hidden"
            style={{
              background: "var(--color-bg-alt)",
              borderColor: "var(--color-line)",
            }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 bg-[var(--color-brand)]/10 text-[var(--color-brand)] border border-[var(--color-brand)]/20">
              <Sparkles size={28} />
            </div>

            <h3
              className="text-[20px] sm:text-[22px] font-bold mb-3"
              style={{ color: "var(--color-ink)" }}
            >
              Página de Serviços Pronta
            </h3>

            <p
              className="text-[15px] leading-relaxed max-w-[480px] mx-auto mb-8"
              style={{ color: "var(--color-mute)" }}
            >
              Ambiente configurado com a paleta oficial da GPX7. Na próxima etapa,
              vamos inserir as especificações detalhadas, fotos dos equipamentos e diferenciais.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/#contato" variant="primary">
                Falar com a equipe técnica
              </Button>
              <Button href="/#servicos" variant="outline">
                Ver resumo na Home
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
