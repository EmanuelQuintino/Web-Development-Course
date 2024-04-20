import type { Config } from "jest";

export const jestConfig: Config = {
  bail: true,
  coverageProvider: "v8",
  verbose: false,
  testMatch: ["<rootDir>/src/**/*.{spec,test}.ts"],
};
