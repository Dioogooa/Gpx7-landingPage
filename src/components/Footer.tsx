import { siteContent } from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { footer } = siteContent;

  return (
    <footer
      className="border-t text-center py-8 px-6"
      style={{
        borderColor: "var(--color-line)",
        background: "var(--color-bg)",
      }}
    >
      <p className="text-[12px]" style={{ color: "var(--color-mute)" }}>
        © {currentYear} GPX7 · {footer.tagline}
      </p>
      {footer.privacyLink && (
        <a
          href={footer.privacyLink}
          className="mt-2 inline-block text-[12px] underline underline-offset-2 transition-colors"
          style={{ color: "var(--color-mute)" }}
        >
          Política de Privacidade
        </a>
      )}
    </footer>
  );
}
