import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "outline";
  id?: string;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold " +
  "px-[28px] py-[15px] transition-all duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 " +
  "disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-[var(--color-brand)] text-white hover:brightness-110 active:scale-[0.98]",
  outline:
    "border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]",
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  variant = "primary",
  id,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} id={id} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
