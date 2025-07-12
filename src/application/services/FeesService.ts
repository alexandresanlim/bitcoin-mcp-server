import { IFeesRecommendedResponse } from "../../domain/models/responses/fees/IFeesRecommendedResponse.js";

import { FeesRequestService } from "../../infrastructure/services/requests/FeesRequestService.js";
import { formatResponse } from "../helpers/format.js";

export class FeesService {
  constructor(private requestService: FeesRequestService) {}

  async getRecommended(): Promise<string> {
    const feesRecommendedData = await this.requestService.getFeesRecommended();
    return formatResponse<IFeesRecommendedResponse>(
      "Bitcoin Fees Recommended",
      feesRecommendedData
    );
  }
}
