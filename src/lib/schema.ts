import { z } from "zod";

export const contatoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(100, "Nome muito longo"),
  email: z
    .string()
    .trim()
    .email("Digite um e-mail válido")
    .max(150, "E-mail muito longo"),
  mensagem: z
    .string()
    .trim()
    .min(10, "Escreva ao menos 10 caracteres")
    .max(1000, "Mensagem muito longa (máx. 1000 caracteres)"),
  consentimento: z.literal(true, {
    message: "É necessário concordar para continuar",
  }),
  // Honeypot: deve ficar vazio
  website: z.string().max(0, "").optional(),
});

export type ContatoInput = z.infer<typeof contatoSchema>;
