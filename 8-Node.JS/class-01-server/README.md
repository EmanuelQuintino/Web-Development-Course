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

### Breakdown of `"dependence": ^1.4.2`:

- **`1 (MAJOR)`**: Indicates that there are breaking changes that are not backward-compatible.

- **`4 (MINOR)`**: New features were added in a backward-compatible manner.

- **`2 (PATCH)`**: Indicate bug fixes and minor improvements that are backward-compatible.

- **`^`**: Indicates a compatible update according to semantic versioning rules. For the version `^1.4.2`, it means:

  - You can install any version **1.x.x** that is compatible with `1.4.2`, such as `1.5.0` or `1.4.3`.
  - But **does not allow** upgrading to a major version (e.g., `2.0.0`).

## Links

- [express](https://expressjs.com/)
- [semver](https://semver.org/)
- [calc](https://semver.npmjs.com/)
