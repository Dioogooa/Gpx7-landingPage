import Image from "next/image";

interface PhotoCardProps {
  image: string;
  alt: string;
  label: string;
  /** "4/3" para Formatos, "1/1" para Eventos */
  aspect?: "4/3" | "1/1";
  labelSize?: "sm" | "md";
  className?: string;
}

/**
 * Card com imagem de fundo + gradiente overlay + legenda absoluta.
 * Usado em Formatos (4:3) e Galeria de Eventos (1:1).
 */
export function PhotoCard({
  image,
  alt,
  label,
  aspect = "4/3",
  labelSize = "md",
  className = "",
}: PhotoCardProps) {
  const aspectClass = aspect === "4/3" ? "aspect-[4/3]" : "aspect-square";
  const labelSizeClass = labelSize === "sm" ? "text-[14px]" : "text-[17px]";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-black ${aspectClass} ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />
      {/* Legenda */}
      <p
        className={`absolute left-[18px] bottom-[14px] font-bold text-white ${labelSizeClass}`}
      >
        {label}
      </p>
    </div>
  );
}
