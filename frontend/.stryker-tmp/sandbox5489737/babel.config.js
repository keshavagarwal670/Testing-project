// @ts-nocheck
module.exports = {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }], // Transpile modern JS for Node.js
      "@babel/preset-react", // Support React JSX
    ],
  };
  