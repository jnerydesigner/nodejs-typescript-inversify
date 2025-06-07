import { IHelloService } from "@domain/interfaces/hello-service.interface";
import { injectable } from "inversify";

@injectable()
export class HelloService implements IHelloService {
  getGreeting(name: string) {
    return `Olá, ${name || "dev"}! 👋`;
  }
}
