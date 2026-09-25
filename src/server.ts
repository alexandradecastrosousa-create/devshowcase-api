import "dotenv/config";
import express from "express";
import { profileRoutes } from "./routes/profileRoutes";
import { technologyRoutes } from "./routes/technologyRoutes";
import { projectRoutes } from "./routes/projectRoutes";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    name: "DevShowcase API",
    status: "online",
    message: "API funcionando corretamente.",
  });
});

app.use("/api/profiles", profileRoutes);
app.use("/api/technologies", technologyRoutes);
app.use("/api/projects", projectRoutes);

app.listen(port, () => {
  console.log(`DevShowcase API disponível em http://localhost:${port}`);
});
