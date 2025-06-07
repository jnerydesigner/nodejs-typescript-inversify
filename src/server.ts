import "dotenv/config";
import "reflect-metadata";
import { logger } from "@infra/logger/logger.log";
import express from "express";
import helloRoutes from "@presenters/routes/hello.route";
import viaCepRoutes from "@presenters/routes/via-cep.route";

const app = express();
const PORT = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.send("API rodando com Node.js e TypeScript!");
});

app.use("/hello", helloRoutes);
app.use("/viacep", viaCepRoutes);

app.listen(PORT, () => {
  logger.info("Servidor iniciado...");
  logger.info(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
