#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { MempoolApiClientService } from "./infrastructure/services/clients/MempoolApiClientService.js";
import {
  FeesRequestService,
  BlockRequestService,
} from "./infrastructure/services/requests/index.js";
import { FeesService, BlockService } from "./application/services/index.js";
import {
  FeesToolsController,
  PingToolsController,
  BlockToolsController,
} from "./interface/controllers/index.js";

const mempoolApiClientService = new MempoolApiClientService();

const feesRequestService = new FeesRequestService(mempoolApiClientService);
const blockRequestService = new BlockRequestService(mempoolApiClientService);

const feesService = new FeesService(feesRequestService);
const blockService = new BlockService(blockRequestService);

async function main() {
  const server = new McpServer({
    name: "mcp-server-ddd-sample",
    version: "1.0.0",
  });

  const transport = new StdioServerTransport();

  new FeesToolsController(server, feesService);
  new PingToolsController(server);
  new BlockToolsController(server, blockService);

  await server.connect(transport);
  process.stderr.write(`MCP Server DDD sample is running on stdio`);
}

main().catch((error) => {
  process.stderr.write(`Fatal error in main():`, error);
  process.exit(1);
});
