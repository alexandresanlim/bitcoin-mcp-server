import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { FeesService } from "../../application/services/FeesService.js";
import { BaseToolsController } from "./base/BaseToolsController.js";

export class FeesToolsController extends BaseToolsController {
  constructor(server: McpServer, private feesService: FeesService) {
    super(server);
  }

  protected registerTools(): void {
    this.registerGetRecommendedFeesHandler();
  }

  private registerGetRecommendedFeesHandler(): void {
    this.server.tool(
      "get-recommended-fees",
      "Get recommended fees for Bitcoin",
      async () => {
        const recommendedText = await this.feesService.getRecommended();

        return {
          content: [
            {
              type: "text",
              text: recommendedText,
            },
          ],
        };
      }
    );
  }
}
