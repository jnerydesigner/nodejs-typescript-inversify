import { ResponseCep } from "@application/dto/response-cep.dto";
import { IHttpService } from "@domain/interfaces/http.interface";
import { TYPES } from "@infra/types/types";
import { inject, injectable } from "inversify";
import { Request, Response } from "express";

@injectable()
export class ViaCepController {
  constructor(
    @inject(TYPES.FetchHttpService) private httpService: IHttpService
  ) {}

  public getAddressViaCep = async (
    req: Request<{ cep: string }>,
    res: Response
  ): Promise<void> => {
    try {
      const cep = req.params.cep;
      const data = await this.httpService.get<ResponseCep>(
        `https://viacep.com.br/ws/${cep}/json/`
      );
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar o CEP", error });
    }
  };
}
