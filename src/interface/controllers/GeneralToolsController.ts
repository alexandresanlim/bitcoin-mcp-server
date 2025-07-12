import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { GeneralService } from "../../application/services/GeneralService.js";
import { BaseToolsController } from "./base/BaseToolsController.js";

export class GeneralToolsController extends BaseToolsController {
  constructor(server: McpServer, private generalService: GeneralService) {
    super(server);
  }

  protected registerTools(): void {
    this.registerGetPriceToolhandler();
    this.registerGetDifficultyAdjustmenthandler();
  }

  private registerGetPriceToolhandler(): void {
    this.server.tool(
      "get-prices",
      "Get prices for Bitcoin in various currencies",
      async () => {
        const pricesText = await this.generalService.getPrices();

        return {
          content: [
            {
              type: "text",
              text: pricesText,
            },
          ],
        };
      }
    );
  }

  private registerGetDifficultyAdjustmenthandler(): void {
    this.server.tool(
      "get-difficulty-adjustment",
      "Get difficulty adjustment for Bitcoin",
      async () => {
        const difficultyAdjustmentText =
          await this.generalService.getDifficultyAdjustment();

        return {
          content: [
            {
              type: "text",
              text: difficultyAdjustmentText,
            },
          ],
        };
      }
    );
  }
}
