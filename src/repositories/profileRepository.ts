import { prisma } from "../lib/prisma";
import type { CreateProfileDTO } from "../dtos/profileDTO";

export const profileRepository = {
  create(data: CreateProfileDTO) {
    return prisma.profile.create({ data });
  },

  findById(id: number) {
    return prisma.profile.findUnique({
      where: { id },
      include: {
        projects: {
          include: {
            technologies: { include: { technology: true } },
            feedbacks: true,
          },
        },
      },
    });
  },
};
