import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { siteContent } from "@/lib/content";

export function Formatos() {
  const { formats } = siteContent;

  return (
    <section
      className="section-padding"
      style={{ background: "var(--color-bg)" }}
    >
      <Container>
        <Eyebrow>{formats.eyebrow}</Eyebrow>
        <SectionTitle className="mb-10">{formats.title}</SectionTitle>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {formats.items.map((item) => (
            <PhotoCard
              key={item.id}
              image={item.image}
              alt={item.alt}
              label={item.label}
              aspect="4/3"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
