import axios, { AxiosInstance } from "axios";
import { IHttpService } from "@domain/interfaces/http.interface";
import { injectable } from "inversify";

@injectable()
export class AxiosHttpService implements IHttpService {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      timeout: 5000,
    });
  }
  async get<T = any>(url: string, params?: Record<string, any>): Promise<T> {
    const response = await this.client.get<T>(url, { params });
    return response.data;
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
