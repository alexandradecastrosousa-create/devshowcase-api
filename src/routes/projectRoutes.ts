import { Router } from "express";
import { projectController } from "../controllers/projectController";

export const projectRoutes = Router();
projectRoutes.post("/", projectController.create);
projectRoutes.get("/", projectController.findAll);
