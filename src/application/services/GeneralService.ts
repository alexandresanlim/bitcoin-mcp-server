import { IDifficultyAdjustmentResponse } from "../../domain/models/responses/general/IDifficultyAdjustmentResponse.js";
import { GeneralRequestService } from "../../infrastructure/services/requests/GeneralRequestService.js";
import { formatResponse } from "../helpers/format.js";

export class GeneralService {
  constructor(private requestService: GeneralRequestService) {}

  async getPrices(): Promise<string> {
    const pricesPossible = ["USD", "EUR", "GBP", "CAD", "CHF", "AUD", "JPY"];
    const pricesData = await this.requestService.getPrices();

    if (!pricesData) {
      return "Failed to retrieve prices data";
    }

    let msg = "";

    pricesPossible.forEach((element) => {
      if (!pricesData[element]) {
        msg += `Price in ${element} is not available.\n`;
      } else {
        msg += `price in ${element}: ${pricesData?.[element] || "N/A"}\n`;
      }
    });

    msg += `Time: ${
      pricesData.time
        ? new Date(pricesData.time * 1000).toLocaleString()
        : "N/A"
    }`;

    return msg.trim();
  }

  async getDifficultyAdjustment(): Promise<string> {
    const difficultyData = await this.requestService.getDifficultyAdjustment();
    return formatResponse<IDifficultyAdjustmentResponse>(
      "Bitcoin Difficulty Adjustment",
      difficultyData
    );
  }
}
