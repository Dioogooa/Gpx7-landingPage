import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteContent } from "@/lib/content";

export function Processo() {
  const { process } = siteContent;

  return (
    <section
      className="section-padding"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <Container>
        <Eyebrow>{process.eyebrow}</Eyebrow>
        <SectionTitle className="mb-4">{process.title}</SectionTitle>
        <p
          className="text-[17px] max-w-[620px] mb-12 leading-relaxed"
          style={{ color: "var(--color-mute)" }}
        >
          {process.lead}
        </p>

        {/* 4 passos: 4 colunas → 2 colunas */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {process.steps.map((step) => (
            <div
              key={step.number}
              className="pt-[18px]"
              style={{ borderTop: "2px solid var(--color-brand)" }}
            >
              {/* Número */}
              <p
                className="text-[15px] font-extrabold tracking-[0.1em] mb-3"
                style={{ color: "var(--color-brand)" }}
                aria-hidden="true"
              >
                {step.number}
              </p>
              {/* Título */}
              <h3
                className="text-[22px] font-bold leading-tight mb-1"
                style={{ color: "var(--color-ink)" }}
              >
                {step.title}
              </h3>
              {/* Descrição */}
              <p className="text-[14.5px]" style={{ color: "var(--color-mute)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
