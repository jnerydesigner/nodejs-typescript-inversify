import { container } from "@infra/container/container";
import { TYPES } from "@infra/types/types";
import { ViaCepController } from "@presenters/controllers/viacep.controller";
import { Router } from "express";

const viaCepRoutes = Router();

const viaCepController = container.get<ViaCepController>(
  TYPES.ViaCepController
);

viaCepRoutes.get("/:cep", viaCepController.getAddressViaCep.bind(viaCepController));


export default viaCepRoutes;
