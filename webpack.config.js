const path = require("path");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode,
  entry: path.resolve(__dirname, "src"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: { fallback: { util: false } },
  module: {
    rules: [
      {
        test: /.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
};
