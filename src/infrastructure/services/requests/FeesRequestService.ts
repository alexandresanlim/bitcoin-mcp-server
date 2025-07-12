import { IFeesRecommendedResponse } from "../../../domain/models/responses/fees/IFeesRecommendedResponse.js";
import { IApiClient } from "../../interfaces/IApiClient.js";

export class FeesRequestService {
  constructor(private client: IApiClient) {}

  async getFeesRecommended(): Promise<IFeesRecommendedResponse | null> {
    return this.client.makeRequest<IFeesRecommendedResponse>(
      "fees/recommended"
    );
  }
}
