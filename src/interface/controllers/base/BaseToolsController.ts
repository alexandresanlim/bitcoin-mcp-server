import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export abstract class BaseToolsController {
  constructor(protected server: McpServer) {
    this.registerTools();
  }

  protected abstract registerTools(): void;
}