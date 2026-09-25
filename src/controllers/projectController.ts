import type { Request, Response } from "express";
import { ZodError } from "zod";
import { createProjectSchema } from "../dtos/projectDTO";
import { projectRepository } from "../repositories/projectRepository";

export const projectController = {
  async create(req: Request, res: Response) {
    try {
      const data = createProjectSchema.parse(req.body);
      const project = await projectRepository.create(data);
      return res.status(201).json(project);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Dados inválidos.", errors: error.issues });
      }
      return res.status(400).json({
        message: "Não foi possível cadastrar o projeto. Verifique o perfil e as tecnologias informadas.",
      });
    }
  },

  async findAll(_req: Request, res: Response) {
    const projects = await projectRepository.findAll();
    return res.json(projects);
  },
};
