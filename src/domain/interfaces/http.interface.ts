export interface IHttpService {
  /**
   * Realiza uma requisição GET
   * @param url URL da API
   * @param params Parâmetros de query
   */
  get<T = any>(url: string, params?: Record<string, any>): Promise<T>;

  /**
   * Realiza uma requisição POST
   * @param url URL da API
   * @param data Corpo da requisição
   */
  post<P = any, T = P>(url: string, data: P): Promise<T>;

  /**
   * Realiza uma requisição PUT
   * @param url URL da API
   * @param data Corpo da requisição
   */
  put<P = any, T = P>(url: string, data: P): Promise<T>;

  /**
   * Realiza uma requisição DELETE
   * @param url URL da API
   * @param params Parâmetros de query ou ID
   */
  delete<T = any>(url: string, params?: Record<string, any>): Promise<T>;
}
