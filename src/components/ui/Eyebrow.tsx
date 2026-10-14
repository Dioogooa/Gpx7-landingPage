interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Eyebrow: texto acima dos títulos de seção.
 * 12px, 700, MAIÚSCULAS, tracking 0.2em, cor brand.
 */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`mb-[14px] text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand)] ${className}`}
    >
      {children}
    </p>
  );
}
