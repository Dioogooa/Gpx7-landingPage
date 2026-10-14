"use client";

import { siteContent } from "@/lib/content";

function WhatsAppIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15s-.779.98-.954 1.181c-.176.2-.351.226-.653.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.787-1.677-2.088s-.019-.464.132-.614c.136-.135.301-.351.452-.527s.2-.301.301-.502c.1-.2.05-.376-.025-.527s-.678-1.634-.929-2.238c-.244-.588-.493-.508-.678-.517-.176-.009-.376-.009-.577-.009s-.527.075-.803.376c-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431s-.276-.201-.577-.351zM12.04 2C6.544 2 2.08 6.463 2.08 11.96c0 1.758.46 3.475 1.332 4.989L2 22l5.217-1.368a9.92 9.92 0 0 0 4.823 1.248h.004c5.494 0 9.957-4.464 9.957-9.961C22 6.463 17.536 2 12.04 2zm0 18.214h-.003a8.27 8.27 0 0 1-4.218-1.156l-.302-.18-3.134.822.836-3.056-.197-.314a8.23 8.23 0 0 1-1.263-4.364c0-4.568 3.717-8.284 8.284-8.284 2.213 0 4.293.863 5.858 2.428a8.23 8.23 0 0 1 2.424 5.858c0 4.569-3.717 8.286-8.285 8.286z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const { contact } = siteContent;
  const whatsappUrl =
    contact.whatsapp && contact.whatsapp !== "[PENDENTE]"
      ? contact.whatsapp
      : "https://wa.me/5562999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20evento.";

  return (
    <aside aria-label="Atendimento rápido via WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/40 transition-all duration-200 hover:bg-[#20ba59] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B0F1C]"
        aria-label="Fale conosco no WhatsApp"
      >
        <WhatsAppIcon size={22} className="text-white" />
        <span className="text-[14px] font-bold tracking-wide">WhatsApp</span>
      </a>
    </aside>
  );
}
