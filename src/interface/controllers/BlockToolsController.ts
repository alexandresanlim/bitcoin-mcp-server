import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { z } from "zod";
import { BaseToolsController } from "./base/BaseToolsController.js";
import { BlockService } from "../../application/services/BlockService.js";
import { IBlockRequestParameter } from "../../shared/parameters/IBlockRequestParameter.js";

export class BlockToolsController extends BaseToolsController {
  constructor(server: McpServer, private service: BlockService) {
    super(server);
  }

  protected registerTools(): void {
    this.registerGetRecommendedFeesHandler();
  }

  private registerGetRecommendedFeesHandler(): void {
    this.server.tool(
      "get-block",
      "Returns details about a block from hash",
      {
        hash: z.string().length(64).describe("The hash info to get block"),
      },
      async ({ hash }: IBlockRequestParameter) => {
        const text = await this.service.getBlock({ hash });

        return {
          content: [
            {
              type: "text",
              text: text,
            },
          ],
        };
      }
    );
  }
}
