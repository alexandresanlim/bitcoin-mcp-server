import { IApiClient } from "../../interfaces/IApiClient.js";

export class MempoolApiClientService implements IApiClient {
  private readonly API_BASE = "https://mempool.space/api";
  private readonly API_VERSION = "v1";

  // Helper function for making NWS API requests
  async makeRequest<T>(endpoint: string): Promise<T | null> {
    const url = `${this.API_BASE}/${this.API_VERSION}/${endpoint}`;
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
      console.error("Error making Mempool request:", error);
      return null;
    }
  }
}
