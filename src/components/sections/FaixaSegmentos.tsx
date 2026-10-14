import { Container } from "@/components/ui/Container";
import { siteContent } from "@/lib/content";

export function FaixaSegmentos() {
  const { segments } = siteContent;

  return (
    <section
      className="py-6 border-y"
      style={{
        background: "var(--color-bg-alt)",
        borderColor: "var(--color-line)",
      }}
      aria-label="Segmentos atendidos"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-0">
          {segments.map((item, i) => (
            <div key={item} className="flex items-center">
              <span
                className="text-[12px] font-bold tracking-[0.22em]"
                style={{ color: "var(--color-mute)" }}
              >
                {item}
              </span>
              {i < segments.length - 1 && (
                <span
                  className="mx-[20px] text-[14px] font-bold select-none"
                  style={{ color: "var(--color-brand)" }}
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
