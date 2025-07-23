import { IApiClient } from "../../interfaces/IApiClient.js";

export class MempoolApiClientService implements IApiClient {
  private readonly BASE_API = "https://mempool.space/api";
  private readonly API_VERSION = "v1";

  constructor() {}

  async makeRequest<T>(endpoint: string): Promise<T | null> {
    const url = `${this.BASE_API}/${this.API_VERSION}/${endpoint}`;
    const headers = {
      Accept: "application/json",
    };

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return (await response.json()) as T;
    } catch (error) {
      process.stderr.write("Error making Mempool request");
      return null;
    }
  }
}
