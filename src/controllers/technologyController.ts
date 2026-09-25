import type { Request, Response } from "express";
import { ZodError } from "zod";
import { createTechnologySchema } from "../dtos/technologyDTO";
import { technologyRepository } from "../repositories/technologyRepository";

export const technologyController = {
  async create(req: Request, res: Response) {
    try {
      const data = createTechnologySchema.parse(req.body);
      const technology = await technologyRepository.create(data);
      return res.status(201).json(technology);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Dados inválidos.", errors: error.issues });
      }
      return res.status(400).json({ message: "Não foi possível cadastrar a tecnologia." });
    }
  },

  async findAll(_req: Request, res: Response) {
    const technologies = await technologyRepository.findAll();
    return res.json(technologies);
  },
};
