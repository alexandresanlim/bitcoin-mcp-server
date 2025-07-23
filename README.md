# MCP Server DDD Sample

This repository is a **sample implementation** of a Model Context Protocol (MCP) server in Node.js/TypeScript, designed to demonstrate a clean, layered architecture using Domain-Driven Design (DDD) principles. It provides tools to obtain Bitcoin-related information via external APIs.

## Key Points

- **Sample Project:** This codebase is intended as a reference for structuring MCP servers with DDD, not for production use.
- **MCP Protocol:** Communicates via _stdio_ using the MCP protocol (`@modelcontextprotocol/sdk`).
- **Layered DDD Architecture:** Clear separation of domain, application, infrastructure, and interface layers.

## Project Structure

```
src/
├── domain/                  # Domain models and response interfaces
│   └── models/
│       └── responses/
│           ├── block/
│           │   └── IBlockResponse.ts
│           └── fees/
│               └── IFeesRecommendedResponse.ts
├── infrastructure/          # External API clients and request services
│   ├── interfaces/
│   │   └── IApiClient.ts
│   └── services/
│       ├── clients/
│       │   └── MempoolApiClientService.ts
│       └── requests/
│           ├── BlockRequestService.ts
│           └── FeesRequestService.ts
├── application/             # Business logic and helpers
│   ├── services/
│   │   ├── BlockService.ts
│   │   └── FeesService.ts
│   └── helpers/
│       └── format.ts
├── interface/               # Controllers (MCP tool registration)
│   └── controllers/
│       ├── base/
│       │   └── BaseToolsController.ts
│       ├── BlockToolsController.ts
│       ├── FeesToolsController.ts
│       ├── PingController.ts
│       └── index.ts
├── shared/                  # Shared types/parameters
│   └── parameters/
│       └── IBlockRequestParameter.ts
└── main.ts                  # Application entry point
```

## Getting Started

```bash
git clone https://github.com/alexandresanlim/mcp-server-ddd-sample.git
cd mcp-server-ddd-sample
npm install
npm run build
```

## Usage

After building, you can run the server directly:

```bash
node build/main.js
```

Or, if registered as a binary (for example, `mcp-server-ddd-sample`):

```bash
npm link
mcp-server-ddd-sample
```

The server will start on standard output (_stdio_) and wait for MCP requests.

## Example Tools (Sample)

- **get-recommended-fees**: Get recommended Bitcoin transaction fees.

## Integration Example

To use this MCP server as a tool provider in a client (e.g., Claude client), you can either reference a local build or use the published npm package.

### Using Local Build Path

```json
"btc-server": {
    "command": "node",
    "args": [
        "{your path project}/mcp-server-ddd-sample/build/main.js"
    ]
},
```

### Using the Published NPM Package

If the package is published to npm as `mcp-server-ddd-sample`, you can use `npx` to run it directly without cloning or building:

```json
"mcp-ddd-server-package": {
    "command": "npx",
    "args": [
        "mcp-server-ddd-sample"
    ]
},
```

This allows you to always use the latest published version from npm.

## Publishing to NPM

To publish this package to npm:

1. Update the `name` field in your `package.json` to `mcp-server-ddd-sample` (or your preferred name).
2. Run the following commands:

```bash
npm login
npm publish --access public
```

After publishing, users can run the server with `npx mcp-server-ddd-sample`.

## Contributing

Pull requests are welcome! Feel free to open issues or suggest improvements for this sample repository.

## Project URL

[https://github.com/alexandresanlim/mcp-server-ddd-sample](https://github.com/alexandresanlim/mcp-server-ddd-sample)