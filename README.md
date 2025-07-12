# Bitcoin (BTC) MCP Server

This repository contains an implementation of a Model Context Protocol (MCP) server in Node.js/TypeScript, providing tools to obtain Bitcoin information using external APIs.

## Features

- Communication via _stdio_ using the MCP protocol (`@modelcontextprotocol/sdk`).

## Architecture

The project follows a layered architecture inspired by **Domain-Driven Design** (DDD):

- **Domain** (`src/domain`):  
  Definition of interfaces and types representing data structures (e.g., `IFeesRecommendedResponse`, `IPricesResponse`).

- **Infrastructure** (`src/infrastructure`):  
  Implementation of external services, such as `MempoolApiService`, responsible for making HTTP calls to external APIs.

- **Application** (`src/application`):  
  Contains business logic in services like `FeesService` and `GeneralService`, which process and format data from the infrastructure.

- **Interface** (`src/interface`):  
  Includes controllers (`FeesToolsController`, `GeneralToolsController`) that register tools in the MCP server, define validation schemas, and return results.

- **Entry Point** (`src/main.ts`):  
  Initializes the `McpServer`, configures the transport (`StdioServerTransport`), instantiates services and controllers, and starts listening on _stdio_.

Folder structure:

```
src/
├── domain/
│   └── models/           # Domain interfaces
├── infrastructure/
│   └── services/         # External API implementations
├── application/
│   └── services/         # Business logic and data formatting
├── interface/
│   └── controllers/      # MCP tool registration and validation
└── main.ts               # Server entry point
build/                     # Compiled JavaScript code
```

## Installation

```bash
git clone https://github.com/alexandresanlim/btc-mcp-server.git
cd btc-mcp-server
npm install
npm run build
```

## Usage

After building, you can run the server directly:

```bash
node build/main.js
```

Or, if registered as a binary (`weather`):

```bash
npm link
weather
```

The server will start on standard output (_stdio_) and wait for MCP requests.

## Available Tools

- **get-recommended-fees**: Get recommended Bitcoin transaction fees.
- **get-prices**: Get Bitcoin prices in various currencies.
- **get-difficulty-adjustment**: Get current Bitcoin difficulty adjustment data.

## Contributing

Pull requests are welcome! Feel free to open issues and discuss improvements.
