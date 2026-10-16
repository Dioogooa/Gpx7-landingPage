"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteContent } from "@/lib/content";
import { Mail, Menu, X } from "lucide-react";

// Ícone do WhatsApp (SVG)
function WhatsAppIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

// Ícone do Instagram (SVG)
function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { contact, navigation } = siteContent;

  const emailDisplay = contact.email !== "[PENDENTE]" ? contact.email : "contato@gpx7.com.br";
  const whatsappHref = contact.whatsapp !== "[PENDENTE]" ? contact.whatsapp : "https://wa.me/5562999999999";
  const instagramHref = contact.instagram !== "[PENDENTE]" ? contact.instagram : "https://instagram.com/gpx7";

  useEffect(() => {
    const handleScroll = () => {
      // Quando rolar mais de 24px, encolhe o mini header e destaca a navbar principal
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* ─────────────────────────────────────────────────────────────
          1. MINI HEADER (Topbar em cor de contraste)
          Visível no topo da página. Ao descer a página, ele some com transição suave.
      ───────────────────────────────────────────────────────────── */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled
            ? "max-h-0 opacity-0 -translate-y-full border-b-0 py-0 pointer-events-none"
            : "max-h-12 opacity-100 translate-y-0 py-2 border-b"
        }`}
        style={{
          background: "var(--color-bg-alt)",
          borderColor: "var(--color-line)",
        }}
        aria-label="Barra de contato rápido"
      >
        <Container className="flex items-center justify-between">
          {/* Esquerda: apenas ícones de WhatsApp e Instagram */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco no WhatsApp"
              className="text-[var(--color-mute)] hover:text-[var(--color-brand)] transition-colors p-1"
            >
              <WhatsAppIcon size={16} />
            </a>
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="text-[var(--color-mute)] hover:text-[var(--color-brand)] transition-colors p-1"
            >
              <InstagramIcon size={16} />
            </a>
          </div>

          {/* Direita: E-mail da empresa */}
          <div className="flex items-center">
            <a
              href={`mailto:${emailDisplay}`}
              className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors"
              aria-label={`Enviar e-mail para ${emailDisplay}`}
            >
              <Mail size={13} className="text-[var(--color-brand)]" aria-hidden="true" />
              <span>{emailDisplay}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. NAVBAR PRINCIPAL (Logo sem fundo à esquerda + Atalhos à direita)
          No topo: transparente.
          Ao rolar: assume a cor de contraste fixa com backdrop-blur.
      ───────────────────────────────────────────────────────────── */}
      <div
        className={`w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? "py-3 shadow-lg border-b backdrop-blur-md"
            : "py-5 bg-transparent border-b-0"
        }`}
        style={{
          background: isScrolled ? "rgba(18, 24, 48, 0.94)" : "transparent",
          borderColor: isScrolled ? "var(--color-line)" : "transparent",
        }}
      >
        <Container className="flex items-center justify-between">
          {/* Logo GPX7 sem fundo à esquerda, alinhada com o conteúdo da página */}
          <Link
            href="/"
            className="flex items-center transition-transform hover:opacity-90 active:scale-95"
            aria-label="GPX7 Home"
          >
            <Image
              src="/images/logo-gpx7.png"
              alt="GPX7 Soluções Audiovisuais"
              width={180}
              height={83}
              priority
              unoptimized
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Atalhos para as seções da página à direita da logo */}
          <nav
            className="hidden md:flex items-center gap-8 text-[14.5px] font-medium"
            aria-label="Menu principal"
          >
            {navigation.map((item) => {
              const isCta = item.href.endsWith("#contato");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isCta
                      ? "px-5 py-2 rounded-full bg-[var(--color-brand)] text-white font-bold hover:brightness-110 shadow-sm"
                      : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Botão de menu Mobile (hamburger) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {/* Menu Mobile suspenso */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t mt-3 py-4 px-6 animate-fadeIn"
            style={{
              background: "var(--color-bg-alt)",
              borderColor: "var(--color-line)",
            }}
          >
            <nav className="flex flex-col gap-4 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-[15px] font-medium transition-colors ${
                    item.href.endsWith("#contato")
                      ? "rounded-full bg-[var(--color-brand)] text-white font-bold mt-2"
                      : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
