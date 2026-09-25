import { z } from "zod";

export const createProfileSchema = z.object({
  name: z.string().trim().min(2, "O nome é obrigatório e deve ter ao menos 2 caracteres."),
  bio: z.string().trim().optional(),
  email: z.email("Informe um e-mail válido."),
  githubUrl: z.url("Informe uma URL válida para o GitHub.").optional(),
  linkedinUrl: z.url("Informe uma URL válida para o LinkedIn.").optional(),
});

export type CreateProfileDTO = z.infer<typeof createProfileSchema>;
