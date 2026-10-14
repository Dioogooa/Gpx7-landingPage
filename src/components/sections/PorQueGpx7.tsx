import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteContent } from "@/lib/content";

export function PorQueGpx7() {
  const { whyGpx7 } = siteContent;

  return (
    <section
      className="section-padding"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <Container>
        <Eyebrow>{whyGpx7.eyebrow}</Eyebrow>
        <SectionTitle className="mb-10">{whyGpx7.title}</SectionTitle>

        {/* 2 colunas → 1 coluna */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {whyGpx7.items.map((item) => (
            <article
              key={item.number}
              className="flex items-start gap-[18px] rounded-2xl p-6"
              style={{
                border: "1px solid var(--color-line)",
                background: "var(--color-bg-alt)",
              }}
            >
              {/* Numeração */}
              <span
                className="flex-shrink-0 text-[26px] font-extrabold leading-none"
                style={{ color: "var(--color-brand)" }}
                aria-hidden="true"
              >
                {item.number}
              </span>

              {/* Texto */}
              <div>
                <h3
                  className="text-[18px] font-bold mb-1"
                  style={{ color: "var(--color-ink)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[14.5px] leading-relaxed"
                  style={{ color: "var(--color-mute)" }}
                >
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
