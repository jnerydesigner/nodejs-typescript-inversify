import { IHttpService } from "@domain/interfaces/http.interface";
import { injectable } from "inversify";

@injectable()
export class FetchHttpService implements IHttpService {
  async get<T = any>(url: string, params?: Record<string, any>): Promise<T> {
    const response = await fetch(url);

    const data: T = await response.json();

    return data;
  }
  post<P = any, T = P>(url: string, data: P): Promise<T> {
    throw new Error("Method not implemented.");
  }
  put<P = any, T = P>(url: string, data: P): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete<T = any>(url: string, params?: Record<string, any>): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
