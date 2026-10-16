import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContatoForm } from "@/components/ContatoForm";
import { siteContent } from "@/lib/content";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
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

export function Contato() {
  const { contactSection, contact } = siteContent;

  return (
    <section
      id="contato"
      className="relative section-padding scroll-mt-20"
    >
      {/* Imagem de fundo */}
      <Image
        src="/images/cta-bg.jpeg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay escuro */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(11,15,28,.88)" }}
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <Container className="relative z-10 text-center">
        <Eyebrow className="justify-center flex">{contactSection.eyebrow}</Eyebrow>

        <SectionTitle className="mb-4">{contactSection.title}</SectionTitle>

        <p
          className="text-[17px] max-w-[540px] mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-mute)" }}
        >
          {contactSection.lead}
        </p>

        {/* Formulário de contato */}
        <ContatoForm />

        {/* Bloco de Canais Diretos da Empresa */}
        <div className="mt-16 pt-12 border-t border-[var(--color-line)] max-w-[920px] mx-auto">
          <p className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--color-brand)] mb-2">
            Canais Diretos de Atendimento
          </p>
          <h3 className="text-xl font-bold text-[var(--color-ink)] mb-8">
            Prefere falar agora com nossa equipe comercial?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {/* 1. WhatsApp */}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-line)] hover:border-[var(--color-brand)] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-3 group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <p className="text-xs text-[var(--color-mute)] font-medium">WhatsApp Comercial</p>
                <p className="text-[15px] font-bold text-[var(--color-ink)] mt-1">{contact.whatsappDisplay}</p>
              </div>
              <span className="text-xs text-[var(--color-brand)] font-semibold mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Iniciar conversa &rarr;
              </span>
            </a>

            {/* 2. Telefone Fixo */}
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="p-5 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-line)] hover:border-[var(--color-brand)] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)] mb-3 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <p className="text-xs text-[var(--color-mute)] font-medium">Telefone Fixo</p>
                <p className="text-[15px] font-bold text-[var(--color-ink)] mt-1">{contact.phone}</p>
              </div>
              <span className="text-xs text-[var(--color-brand)] font-semibold mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ligar agora &rarr;
              </span>
            </a>

            {/* 3. E-mail */}
            <a
              href={`mailto:${contact.email}`}
              className="p-5 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-line)] hover:border-[var(--color-brand)] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)] mb-3 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <p className="text-xs text-[var(--color-mute)] font-medium">E-mail Comercial</p>
                <p className="text-[14px] font-bold text-[var(--color-ink)] mt-1 break-all">{contact.email}</p>
              </div>
              <span className="text-xs text-[var(--color-brand)] font-semibold mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Enviar e-mail &rarr;
              </span>
            </a>

            {/* 4. Instagram */}
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-line)] hover:border-[var(--color-brand)] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)] mb-3 group-hover:scale-110 transition-transform">
                  <InstagramIcon size={20} />
                </div>
                <p className="text-xs text-[var(--color-mute)] font-medium">Instagram Oficial</p>
                <p className="text-[15px] font-bold text-[var(--color-ink)] mt-1">{contact.instagramDisplay}</p>
              </div>
              <span className="text-xs text-[var(--color-brand)] font-semibold mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ver perfil &rarr;
              </span>
            </a>
          </div>

          {/* Localização e Horário */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-mute)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-[var(--color-brand)]" aria-hidden="true" />
              {contact.address}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-[var(--color-brand)]" aria-hidden="true" />
              {contact.hours}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
