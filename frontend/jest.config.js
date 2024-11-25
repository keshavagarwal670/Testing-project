module.exports = {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use Babel to transform JavaScript
    },
    testEnvironment: "jsdom", // Use this for React components
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock CSS imports
    },
    transformIgnorePatterns: [
      "node_modules/(?!axios)" // Transpile Axios and other ESM modules
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
  };
  