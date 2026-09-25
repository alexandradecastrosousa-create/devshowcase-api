import type { Request, Response } from "express";
import { ZodError } from "zod";
import { createProfileSchema } from "../dtos/profileDTO";
import { profileRepository } from "../repositories/profileRepository";

export const profileController = {
  async create(req: Request, res: Response) {
    try {
      const data = createProfileSchema.parse(req.body);
      const profile = await profileRepository.create(data);
      return res.status(201).json(profile);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Dados inválidos.", errors: error.issues });
      }
      return res.status(400).json({ message: "Não foi possível cadastrar o perfil." });
    }
  },

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ message: "ID inválido." });
    }

    const profile = await profileRepository.findById(id);
    if (!profile) {
      return res.status(404).json({ message: "Perfil não encontrado." });
    }
    return res.json(profile);
  },
};
