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

### Scripts

```json
{
  "scripts": {
    "dev": "tsx watch --env-file .env src/server.ts",
    "build": "tsup src --out-dir dist",
    "start": "node dist/server.js"
  }
}
```

## Semantic Versioning

In Semantic Versioning, versions are expressed in the format MAJOR.MINOR.PATCH, where each part has a specific meaning regarding changes made to the software.

```json
{
  "dependence": "^1.4.2"
}
```

### Breakdown of ^1.4.2:

1. **`1 (MAJOR)`**: This is the major version. A change in the major version (e.g., from 1 to 2) indicates that there are breaking changes that are not backward-compatible.

2. **`4 (MINOR)`**: This is the minor version. A change in the minor version (e.g., from 4 to 5) means new features were added in a backward-compatible manner.

3. **`2 (PATCH)`**: This is the patch version. Changes in the patch version (e.g., from 2 to 3) indicate bug fixes and minor improvements that are backward-compatible.

4. **`^`**: The `^` operator indicates a compatible update according to semantic versioning rules. For the version `^1.4.2`, it means:

- You can install any version **1.x.x** that is compatible with `1.4.2`.
- It allows updates to newer minor and patch versions, such as `1.5.0` or `1.4.3`, but **does not allow** upgrading to a major version (e.g., `2.0.0`).
