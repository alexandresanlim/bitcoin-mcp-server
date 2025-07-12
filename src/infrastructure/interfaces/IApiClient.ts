export interface IApiClient {
  makeRequest<T>(endpoint: string): Promise<T | null>;
}