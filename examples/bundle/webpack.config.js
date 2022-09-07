const { resolve } = require("node:path");
const { DefinePlugin } = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const mode = process.env.NODE_ENV || "production";

module.exports = [
  {
    mode,
    name: "browser",
    target: "web",
    context: __dirname,
    entry: "./src/index.ts",
    output: {
      path: resolve(__dirname, "./build/browser"),
      clean: true,
      publicPath: "/assets/",
      filename: `[name]-[contenthash:16].js`,
      chunkFilename: `[name]-[contenthash:16].js`,
      assetModuleFilename: `[name]-[contenthash:16][ext]`,
    },
    resolve: {
      extensions: [".ts", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          type: "javascript/auto",
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                compilerOptions: {
                  target: "es2020",
                  module: "es2020",
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: { beautify: true },
          },
        }),
      ],
      minimize: true,
      moduleIds: "named",
    },
    devtool: "source-map",
    plugins: [
      new DefinePlugin({
        // if (typeof window === "object") { ... }
        "typeof window": JSON.stringify("object"),
      }),
    ],
  },
  {
    mode,
    name: "server",
    target: "node",
    context: __dirname,
    entry: "./src/index.ts",
    output: {
      path: resolve(__dirname, "./build/server"),
      clean: true,
      publicPath: "/assets/",
      filename: `[name]-[contenthash:16].js`,
      chunkFilename: `[name]-[contenthash:16].js`,
      assetModuleFilename: `[name]-[contenthash:16][ext]`,
    },
    resolve: {
      extensions: [".ts", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          type: "javascript/auto",
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                compilerOptions: {
                  target: "es2020",
                  module: "es2020",
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: false,
      moduleIds: "named",
    },
    devtool: "source-map",
    plugins: [
      new DefinePlugin({
        // if (typeof window === "object") { ... }
        "typeof window": JSON.stringify("undefined"),
      }),
    ],
  },
];
