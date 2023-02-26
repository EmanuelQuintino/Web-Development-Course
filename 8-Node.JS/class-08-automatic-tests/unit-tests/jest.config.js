module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  testMatch: ["<rootDir>/services/**/*.test.js"]
};