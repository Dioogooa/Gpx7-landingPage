import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { siteContent } from "@/lib/content";

export function Eventos() {
  const { events } = siteContent;

  return (
    <section
      id="portfolio"
      className="section-padding scroll-mt-20"
      style={{ background: "var(--color-bg)" }}
    >
      <Container>
        <Eyebrow>{events.eyebrow}</Eyebrow>
        <SectionTitle className="mb-10">{events.title}</SectionTitle>

        {/* Galeria 3 colunas → 2 colunas, proporção 1:1 */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {events.items.map((item) => (
            <PhotoCard
              key={item.id}
              image={item.image}
              alt={item.alt}
              label={item.label}
              aspect="1/1"
              labelSize="sm"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
