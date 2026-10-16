import {
  MonitorPlay,
  Mic,
  Lightbulb,
  Laptop,
  Radio,
  Wrench,
  ArrowRight,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/lib/content";

type IconName = "Monitor" | "Mic" | "Lightbulb" | "Laptop" | "Radio" | "Wrench";

const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  Monitor: MonitorPlay,
  Mic: Mic,
  Lightbulb: Lightbulb,
  Laptop: Laptop,
  Radio: Radio,
  Wrench: Wrench,
};

export function Solucoes() {
  const { solutions } = siteContent;

  return (
    <section
      id="servicos"
      className="section-padding scroll-mt-20"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <Container>
        <Eyebrow>{solutions.eyebrow}</Eyebrow>
        <SectionTitle className="max-w-[640px] mb-12">
          {solutions.title}
        </SectionTitle>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {solutions.items.map((item) => {
            const Icon = iconMap[item.icon as IconName] ?? MonitorPlay;
            return (
              <article
                key={item.id}
                className="rounded-2xl p-[26px_22px] flex flex-col gap-0 transition-transform duration-200 hover:-translate-y-1"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-line)",
                }}
              >
                {/* Ícone */}
                <div className="mb-4">
                  <Icon
                    size={34}
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--color-brand)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-[18px] font-bold mb-2"
                  style={{ color: "var(--color-ink)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--color-mute)" }}>
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        {/* Botão para página detalhada de serviços */}
        {solutions.cta && (
          <div className="mt-12 flex justify-center">
            <Button
              href={solutions.cta.href}
              variant="primary"
              id="btn-ver-mais-servicos"
              className="group text-[15px] sm:text-[16px] px-8 py-4 shadow-xl shadow-[rgba(232,80,27,0.25)] hover:shadow-[rgba(232,80,27,0.4)] transition-all"
            >
              <span>{solutions.cta.label}</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
