const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(webp|jpe?g|svg|avif|png)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      title: "BAO Landing Page",
      filename: "index.html",
      cache: true,
      meta: {
        description:
          "BAO DAO NFT Bteam Academy academy bteam Blockchain blockchain nft bao dao Nft Bao Dao",
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
