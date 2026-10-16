import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/lib/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: "92vh", background: "var(--color-bg)" }}
    >
      <div
        className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{ background: "var(--color-brand)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full mt-auto">
        <Container className="pt-[160px] pb-[72px]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <SectionTitle as="h1" className="max-w-[820px] mb-6">
            {hero.title}
          </SectionTitle>

          <p
            className="text-[18px] max-w-[560px] mb-0 leading-relaxed"
            style={{ color: "var(--color-hero-text)" }}
          >
            {hero.text}
          </p>

          <Button href={hero.cta.href} className="mt-[28px]" id="btn-hero-cta">
            {hero.cta.label}
          </Button>
        </Container>
      </div>
    </section>
  );
}
