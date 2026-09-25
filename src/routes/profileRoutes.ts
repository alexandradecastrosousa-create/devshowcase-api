import { Router } from "express";
import { profileController } from "../controllers/profileController";

export const profileRoutes = Router();
profileRoutes.post("/", profileController.create);
profileRoutes.get("/:id", profileController.findById);
