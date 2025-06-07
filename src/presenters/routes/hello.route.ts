import { container } from "@infra/container/container";
import { TYPES } from "@infra/types/types";
import { HelloController } from "@presenters/controllers/hello.controller";
import { Router } from "express";

const helloRoutes = Router();

const helloController = container.get<HelloController>(TYPES.HelloController);

helloRoutes.get('/', helloController.sayHello.bind(helloController));

export default helloRoutes;
