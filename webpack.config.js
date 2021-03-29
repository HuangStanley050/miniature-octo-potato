const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("./node_modules/webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
    }),
  ],
};
