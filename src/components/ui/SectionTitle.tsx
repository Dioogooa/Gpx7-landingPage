import React from "react";

interface SectionTitleProps {
  /** Texto do título. Use **texto** para marcar trechos em laranja (brand). */
  children: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/**
 * Converte marcação **texto** em <em> com cor brand.
 * Exemplo: "Tecnologia e **excelência** aqui" →
 *   Tecnologia e <em className="not-italic text-brand">excelência</em> aqui
 */
function parseHighlight(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className="not-italic" style={{ color: "var(--color-brand)" }}>
        {part}
      </em>
    ) : (
      part
    )
  );
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
}: SectionTitleProps) {
  return (
    <Tag className={className}>
      {parseHighlight(children)}
    </Tag>
  );
}
