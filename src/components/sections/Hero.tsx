import Image from "next/image";
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
      className="relative flex flex-col justify-end"
      style={{ minHeight: "92vh" }}
    >
      {/* Imagem de fundo */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,15,28,.65) 0%, rgba(11,15,28,.45) 45%, var(--color-bg) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Conteúdo do Hero */}
      <div className="relative z-10 w-full mt-auto">
        <Container className="pt-[160px] pb-[72px]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <SectionTitle
            as="h1"
            className="max-w-[820px] mb-6"
          >
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
