// webpack.config.js
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js", // your main JS file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new Dotenv(), // loads variables from .env into process.env
  ],
  module: {
    rules: [
      // Your loaders go here
    ],
  },
};
