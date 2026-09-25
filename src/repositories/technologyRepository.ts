import { prisma } from "../lib/prisma";
import type { CreateTechnologyDTO } from "../dtos/technologyDTO";

export const technologyRepository = {
  create(data: CreateTechnologyDTO) {
    return prisma.technology.create({ data });
  },

  findAll() {
    return prisma.technology.findMany({ orderBy: { name: "asc" } });
  },
};
