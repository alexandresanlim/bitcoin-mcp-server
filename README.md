# 🚀 MCP Server DDD Template

This repository is a **template implementation** of a Model Context Protocol (MCP) server in Node.js/TypeScript, designed to demonstrate a clean, layered architecture using Domain-Driven Design (DDD) principles. It provides tools to obtain Bitcoin-related information via external APIs.

## ✨ Key Features

- **🏗️ Template Project:** This codebase serves as a reference template for structuring MCP servers with DDD, ready for customization and production use.
- **🔌 MCP Protocol:** Communicates via _stdio_ using the MCP protocol (`@modelcontextprotocol/sdk`).
- **🏛️ Layered DDD Architecture:** Clear separation of domain, application, infrastructure, and interface layers.
- **⚡ TypeScript:** Fully typed with modern TypeScript for better development experience.

## 📁 Project Structure

```
src/
├── domain/                  # 🏛️ Domain models and response interfaces
│   └── models/
│       └── responses/
│           ├── ** interfaces responses **
├── infrastructure/          # 🔌 External API clients and request services
│   ├── interfaces/
│   │   └── IApiClient.ts
│   └── services/
│       ├── clients/
│       │   └── ** client api
│       └── requests/
│           ├── ** requests services **
├── application/             # ⚙️ Business logic and helpers
│   ├── services/
│   │   ├── ** services implementation **
│   └── helpers/
│       └── ** helpers **
├── interface/               # 🎮 Controllers (MCP tool registration)
│   └── controllers/
│       ├── base/
│       │   └── BaseToolsController.ts
│       ├── **controllers to inteface**
│       └── index.ts
├── shared/                  # 🔗 Shared types/parameters
│   └── parameters/
│       └── **interfaces parameters**
└── main.ts                  # 🚀 Application entry point
```

## 🚀 Getting Started

```bash
git clone https://github.com/alexandresanlim/mcp-server-ddd-template.git
cd mcp-server-ddd-template
npm install
npm run build
```

## 🎯 Usage

After building, you can run the server directly:

```bash
node build/main.js
```

Or, if registered as a binary (for example, `mcp-server-ddd-template`):

```bash
npm link
mcp-server-ddd-template
```

The server will start on standard output (_stdio_) and wait for MCP requests.

## 🛠️ Available Tools in this sample

- **💰 get-recommended-fees**: Get recommended Bitcoin transaction fees from Mempool.space
- **🔗 ping**: Simple health check endpoint

## 🔗 Integration Example

To use this MCP server as a tool provider in a client (e.g., Claude client), you can either reference a local build or use the published npm package.

### 📂 Using Local Build Path

```json
"btc-server": {
    "command": "node",
    "args": [
        "{your project path}/mcp-server-ddd-template/build/main.js"
    ]
}
```

## 🛠️ Development

### Build Commands

```bash
# Build for Unix/Linux/macOS
npm run build

# Build for Windows
npm run build:windows

# Run the server
npm run server
```

### Dependencies

- **@modelcontextprotocol/sdk**: MCP protocol implementation
- **zod**: Runtime type validation
- **typescript**: Type safety and compilation

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues or suggest improvements for this template repository.

⭐ **Star this repository if you find it helpful!**