"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contatoSchema, type ContatoInput } from "@/lib/schema";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContatoForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const { contactSection } = siteContent;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContatoInput>({
    resolver: zodResolver(contatoSchema),
    defaultValues: {
      nome: "",
      email: "",
      mensagem: "",
      consentimento: undefined as unknown as true,
      website: "",
    },
  });

  const onSubmit = async (data: ContatoInput) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl px-[16px] py-[14px] text-[var(--color-ink)] " +
    "bg-[rgba(18,24,48,0.8)] border border-[var(--color-line)] " +
    "placeholder-[var(--color-mute)] transition-colors duration-150 " +
    "focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]";

  const labelBase = "block text-[14px] font-medium text-[var(--color-mute)] mb-1";

  const errorClass = "mt-1 text-[13px] text-red-400";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-[560px] mx-auto text-left"
      aria-label="Formulário de contato"
    >
      {/* Honeypot — oculto para humanos, visível para bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register("website")}
        />
      </div>

      {/* Nome */}
      <div className="mb-5">
        <label htmlFor="contato-nome" className={labelBase}>
          Nome *
        </label>
        <input
          id="contato-nome"
          type="text"
          autoComplete="name"
          placeholder="Seu nome completo"
          className={inputBase}
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? "erro-nome" : undefined}
          {...register("nome")}
        />
        {errors.nome && (
          <p id="erro-nome" className={errorClass} role="alert">
            {errors.nome.message}
          </p>
        )}
      </div>

      {/* E-mail */}
      <div className="mb-5">
        <label htmlFor="contato-email" className={labelBase}>
          E-mail *
        </label>
        <input
          id="contato-email"
          type="email"
          autoComplete="email"
          placeholder="seu@email.com.br"
          className={inputBase}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "erro-email" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="erro-email" className={errorClass} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Mensagem */}
      <div className="mb-5">
        <label htmlFor="contato-mensagem" className={labelBase}>
          Mensagem *
        </label>
        <textarea
          id="contato-mensagem"
          rows={5}
          placeholder="Descreva seu evento: tipo, data estimada, local e o que precisa."
          className={`${inputBase} resize-none`}
          aria-invalid={!!errors.mensagem}
          aria-describedby={errors.mensagem ? "erro-mensagem" : undefined}
          {...register("mensagem")}
        />
        {errors.mensagem && (
          <p id="erro-mensagem" className={errorClass} role="alert">
            {errors.mensagem.message}
          </p>
        )}
      </div>

      {/* Consentimento LGPD */}
      <div className="mb-7">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            id="contato-consentimento"
            type="checkbox"
            className="mt-1 h-4 w-4 accent-[var(--color-brand)] flex-shrink-0 cursor-pointer"
            aria-invalid={!!errors.consentimento}
            aria-describedby={
              errors.consentimento ? "erro-consentimento" : undefined
            }
            {...register("consentimento")}
          />
          <span className="text-[13px] text-[var(--color-mute)] group-hover:text-[var(--color-ink)] transition-colors">
            {contactSection.lgpdConsent}
          </span>
        </label>
        {errors.consentimento && (
          <p id="erro-consentimento" className={errorClass} role="alert">
            {errors.consentimento.message}
          </p>
        )}
      </div>

      {/* Botão de envio */}
      <Button
        type="submit"
        disabled={status === "sending"}
        id="btn-solicitar-contato"
        className="w-full"
      >
        {status === "sending" ? "Enviando…" : contactSection.submitLabel}
      </Button>

      {/* Feedback de status */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="mt-4 min-h-[24px]"
      >
        {status === "success" && (
          <p className="text-center text-[15px] text-green-400 font-medium">
            ✓ {contactSection.successMessage}
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-[15px] text-red-400">
            ✕ {contactSection.errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
