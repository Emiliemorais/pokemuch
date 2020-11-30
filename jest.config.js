module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  testMatch: [
    "<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
};
