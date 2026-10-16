import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Laptop,
  Lightbulb,
  MonitorPlay,
  Palette,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { HeaderNav } from "@/components/HeaderNav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Serviços em Detalhes | GPX7 Soluções Audiovisuais",
  description:
    "Vídeo, som, luz e estrutura, informática e transmissão, e comunicação visual para congressos, feiras e convenções.",
};

type IconName = "Monitor" | "Lightbulb" | "Laptop" | "Palette";

const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  Monitor: MonitorPlay,
  Lightbulb: Lightbulb,
  Laptop: Laptop,
  Palette: Palette,
};

export default function ServicosPage() {
  const { servicesPage } = siteContent;

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{ background: "var(--color-bg)" }}
    >
      <HeaderNav />

      <main className="flex-1 pt-[140px] sm:pt-[160px] pb-[80px] sm:pb-[100px] relative overflow-hidden">
        <div
          className="absolute top-[180px] left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: "var(--color-brand)" }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="mb-8 flex justify-center">
            <Link
              href="/#servicos"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors px-4 py-2 rounded-full border border-[var(--color-line)] bg-[var(--color-bg-alt)]/60 backdrop-blur-sm"
            >
              <ArrowLeft size={16} />
              <span>Voltar para página inicial</span>
            </Link>
          </div>

          <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-14">
            <Eyebrow className="justify-center flex">{servicesPage.eyebrow}</Eyebrow>

            <SectionTitle className="mb-5">{servicesPage.title}</SectionTitle>

            <p
              className="text-[16px] sm:text-[18px] leading-relaxed max-w-[620px] mx-auto"
              style={{ color: "var(--color-mute)" }}
            >
              {servicesPage.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {servicesPage.groups.map((category) => {
              const Icon = iconMap[category.icon as IconName] ?? MonitorPlay;

              return (
                <article
                  key={category.id}
                  className="rounded-3xl p-6 sm:p-8 flex flex-col text-left border"
                  style={{
                    background: "var(--color-bg-alt)",
                    borderColor: "var(--color-line)",
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 bg-[var(--color-brand)]/10 text-[var(--color-brand)] border border-[var(--color-brand)]/20">
                    <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <h2
                    className="text-[22px] sm:text-[24px] font-bold mb-5 !leading-tight"
                    style={{ color: "var(--color-ink)", marginBottom: 20 }}
                  >
                    {category.title}
                  </h2>

                  <div className="flex flex-col gap-5">
                    {category.groups.map((subset, index) => (
                      <div key={`${category.id}-${(subset as { label: string }).label ?? index}`}>
                        {(subset as { label: string }).label ? (
                          <p className="text-[11px] uppercase tracking-[0.18em] font-bold mb-3 text-[var(--color-brand)]">
                            {(subset as { label: string }).label}
                          </p>
                        ) : null}
                        <ul className="flex flex-col gap-2.5">
                          {(subset as { items: string[] }).items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[14.5px] leading-snug"
                              style={{ color: "var(--color-mute)" }}
                            >
                              <Check
                                size={16}
                                className="mt-0.5 shrink-0 text-[var(--color-brand)]"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href="/#contato" variant="primary">
              Falar com o comercial
            </Button>
            <Button href="/#servicos" variant="outline">
              Voltar
            </Button>
          </div>
        </Container>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
