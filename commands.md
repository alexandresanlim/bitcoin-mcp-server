## Run server

```bash

npm install
npm run build
npm run server

```

## Publish as a NPM package

- First, put a name on package.json file and follow it:

```bash

npm login
npm publish

```

## Debug server

```bash

npx @modelcontextprotocol/inspector node main.js
npx @modelcontextprotocol/inspector .../path/main.js args...
npx mcp-server-ddd-sample --help

```

## Debug server with Clause (See logs)

```bash

tail -n 20 -F ~/Library/Logs/Claude/mcp*.log

```
