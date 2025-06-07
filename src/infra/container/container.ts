import { AxiosHttpService } from "@application/services/axios-http.service";
import { FetchHttpService } from "@application/services/fetch-http.service";
import { HelloService } from "@application/services/hello.service";
import { IHelloService } from "@domain/interfaces/hello-service.interface";
import { IHttpService } from "@domain/interfaces/http.interface";
import { TYPES } from "@infra/types/types";
import { HelloController } from "@presenters/controllers/hello.controller";
import { ViaCepController } from "@presenters/controllers/viacep.controller";
import { Container } from "inversify";

const container = new Container();

container.bind<IHelloService>(TYPES.HelloService).to(HelloService);
container.bind<HelloController>(TYPES.HelloController).to(HelloController);
container.bind<IHttpService>(TYPES.AxiosHttpService).to(AxiosHttpService);
container.bind<IHttpService>(TYPES.FetchHttpService).to(FetchHttpService);
container.bind<ViaCepController>(TYPES.ViaCepController).to(ViaCepController);

export { container };
