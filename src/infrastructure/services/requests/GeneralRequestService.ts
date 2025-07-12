import { IDifficultyAdjustmentResponse } from "../../../domain/models/responses/general/IDifficultyAdjustmentResponse.js";
import { IPricesResponse } from "../../../domain/models/responses/general/IPricesResponse.js";
import { IApiClient } from "../../interfaces/IApiClient.js";

export class GeneralRequestService {
  constructor(private client: IApiClient) {}

  async getPrices(): Promise<IPricesResponse | null> {
    return this.client.makeRequest<IPricesResponse>("prices");
  }

  async getDifficultyAdjustment(): Promise<IDifficultyAdjustmentResponse | null> {
    return this.client.makeRequest<IDifficultyAdjustmentResponse>(
      "difficulty-adjustment"
    );
  }
}
