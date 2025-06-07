import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "@infra/types/types";
import { IHelloService } from "@domain/interfaces/hello-service.interface";


@injectable()
export class HelloController {
  constructor(
    @inject(TYPES.HelloService) private helloService: IHelloService
  ) {}

  public sayHello = (req: Request, res: Response): void => {
    const name = req.query.name as string;
    const message = this.helloService.getGreeting(name);
    res.json({ message });
  };
}
