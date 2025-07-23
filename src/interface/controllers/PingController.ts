import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { BaseToolsController } from "./base/BaseToolsController.js";

export class PingToolsController extends BaseToolsController {
  constructor(server: McpServer) {
    super(server);
  }

  protected registerTools(): void {
    this.registerGetPingHandler();
  }

  private registerGetPingHandler(): void {
    this.server.tool("get-ping", "Get ping to check service is working", () => {
      return {
        content: [
          {
            type: "text",
            text: "Yes! Bitcoin MCM server is working good.",
          },
        ],
      };
    });
  }
}
