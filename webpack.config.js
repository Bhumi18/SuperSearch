const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDevelopment = env.NODE_ENV === "development";

  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].bundle.css",
        chunkFilename: "[id].css",
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js",
      library: "$",
      libraryTarget: "umd",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      //   contentBase: path.resolve(__dirname, "dist"),
      open: true,
      port: 9000,
      historyApiFallback: true,
      hot: true, // Enable HMR for JavaScript
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: "defaults",
                    },
                  ],
                  "@babel/preset-react",
                ],
              },
            },
            // {
            //   loader: "eslint-loader",
            //   options: {
            //     fix: true,
            //   },
            // },
          ],
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 0,
              },
            },
            "postcss-loader",
          ],
        },
      ],
    },
    mode: "development",
  };
};
