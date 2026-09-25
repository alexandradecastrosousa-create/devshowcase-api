import { Router } from "express";
import { technologyController } from "../controllers/technologyController";

export const technologyRoutes = Router();
technologyRoutes.post("/", technologyController.create);
technologyRoutes.get("/", technologyController.findAll);
