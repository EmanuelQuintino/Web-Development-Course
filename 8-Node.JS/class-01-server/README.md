# Class 01 Server

## Create server and install dependencies

### Init

- Initialize a new NODE project with default values

```bash
npm init -y
```

### TypeScript

- Install typescript as a development dependency

```bash
npm install typescript -D
```

- Initialize the typescript configuration file

```bash
npx tsc --init
```

### Express

- Install express as a dependency

```bash
npm install express --save
```

- Install typescript types for express as a development dependency

```bash
npm install @types/express --save-dev
```

### Execute

- Install tsx for execute as a development dependency

```bash
npm i tsx -D
```

### Scripts

```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsup src",
    "start": "node dist/server.js"
  }
}
```

### Dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

```bash
npm install dotenv --save
```

```ts
import "dotenv/config";
```

### Build

Install tsup for build as a development dependency

```bash
npm install tsup -D
```
