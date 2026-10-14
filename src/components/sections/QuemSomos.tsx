import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteContent } from "@/lib/content";

export function QuemSomos() {
  const { about } = siteContent;

  return (
    <section
      id="quem-somos"
      className="section-padding scroll-mt-20"
      style={{ background: "var(--color-bg)" }}
    >
      <Container>
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <SectionTitle className="max-w-[700px]">{about.title}</SectionTitle>
        <p
          className="text-[17px] max-w-[620px] mb-12 leading-relaxed"
          style={{ color: "var(--color-mute)" }}
        >
          {about.lead}
        </p>

        {/* Estatísticas */}
        <div className="grid grid-cols-3 gap-[10px] max-w-[660px]">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="pt-[16px]"
              style={{ borderTop: "2px solid var(--color-brand)" }}
            >
              <p
                className="font-extrabold leading-none mb-1"
                style={{
                  fontSize: "clamp(28px, 6vw, 52px)",
                  color: "var(--color-ink)",
                }}
              >
                {stat.value}
              </p>
              <p className="text-[14px] leading-snug" style={{ color: "var(--color-mute)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
