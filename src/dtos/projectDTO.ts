import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().trim().min(1, "O título do projeto é obrigatório."),
  description: z.string().trim().min(5, "A descrição deve ter pelo menos 5 caracteres."),
  repositoryUrl: z.url("Informe uma URL válida para o repositório.").optional(),
  demoUrl: z.url("Informe uma URL válida para a demonstração.").optional(),
  profileId: z.number().int().positive("profileId deve ser um número inteiro positivo."),
  technologyIds: z.array(z.number().int().positive()).default([]),
});

export type CreateProjectDTO = z.infer<typeof createProjectSchema>;
