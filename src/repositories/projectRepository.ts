import { prisma } from "../lib/prisma";
import type { CreateProjectDTO } from "../dtos/projectDTO";

export const projectRepository = {
  async create(data: CreateProjectDTO) {
    const { technologyIds, ...projectData } = data;

    return prisma.project.create({
      data: {
        ...projectData,
        technologies: technologyIds.length
          ? {
              create: technologyIds.map((technologyId) => ({
                technology: { connect: { id: technologyId } },
              })),
            }
          : undefined,
      },
      include: {
        profile: true,
        technologies: { include: { technology: true } },
        feedbacks: true,
      },
    });
  },

  findAll() {
    return prisma.project.findMany({
      include: {
        profile: true,
        technologies: { include: { technology: true } },
        feedbacks: true,
      },
      orderBy: { id: "asc" },
    });
  },
};
