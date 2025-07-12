import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { GeneralService } from "./application/services/GeneralService.js";
import { FeesService } from "./application/services/FeesService.js";
import { GeneralRequestService } from "./infrastructure/services/requests/GeneralRequestService.js";
import { FeesRequestService } from "./infrastructure/services/requests/FeesRequestService.js";
import { MempoolApiClientService } from "./infrastructure/services/clients/MempoolApiClientService.js";
import { GeneralToolsController } from "./interface/controllers/GeneralToolsController.js";
import { FeesToolsController } from "./interface/controllers/FeesToolsController.js";

async function main() {
  const server = new McpServer({
    name: "btc",
    version: "1.0.0",
    capabilities: {
      resources: {},
      tools: {},
    },
  });

  const mempoolApiClientService = new MempoolApiClientService();

  const generalRequestService = new GeneralRequestService(
    mempoolApiClientService
  );
  const feesRequestService = new FeesRequestService(mempoolApiClientService);

  const generalService = new GeneralService(generalRequestService);
  const feesService = new FeesService(feesRequestService);

  new GeneralToolsController(server, generalService);
  new FeesToolsController(server, feesService);

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Bitcoin MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
