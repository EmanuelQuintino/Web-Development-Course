import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  bail: true,
  coverageProvider: "v8",
  verbose: false,
  testMatch: ["<rootDir>/src/**/*.{spec,test}.ts"],
};

export default config;
