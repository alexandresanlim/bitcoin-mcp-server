## Run server

```bash

npm install
npm run build
npm run server

```

## Debug server

```bash

npx @modelcontextprotocol/inspector node main.js
npx @modelcontextprotocol/inspector .../path/main.js args...
npx bitcoin-mcp-server --help

```

## Debug server with Clause (See logs)

```bash

tail -n 20 -F ~/Library/Logs/Claude/mcp*.log

```
