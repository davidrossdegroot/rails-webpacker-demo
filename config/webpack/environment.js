const { environment } = require("@rails/webpacker");
const webpack = require("webpack");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const babelLoader = environment.loaders.get("babel");
babelLoader.test = /\.(js|jsx|ts|tsx|mjs)?(\.erb)?$/;

environment.plugins.append(
  "Provide",
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    Popper: ["popper.js", "default"]
  }),
  [new ForkTSCheckerWebpackPlugin()]
);

module.exports = environment;
