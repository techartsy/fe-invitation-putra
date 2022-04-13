const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Path = require("path");
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: Path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_module/,
        use: "babel-loader",
      },
      // {
      //   test: /\.svg$/,
      //   use: { loader: "file-loader" },
      // },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     "style-loader",
      //     // Translates CSS into CommonJS
      //     "css-loader",
      //     "resolve-url-loader",
      //     // Compiles Sass to CSS
      //     "sass-loader",
      //   ],
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: "css-loader",
      //     },
      //     {
      //       loader: "resolve-url-loader",
      //     },
      //     {
      //       loader: "sass-loader",
      //     },
      //   ],
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: "style-loader",
      //     },
      //     {
      //       loader: "css-loader",
      //     },
      //     {
      //       loader: "resolve-url-loader",
      //     },
      //     {
      //       loader: "sass-loader",
      //     },
      //   ],
      // },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        // use: "file-loader",
        // type: "asset/resource",
        use: ["file-loader?name=assets/images/[name].[ext]"],
      },
      // {
      //   // images
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[path][name].[ext]",
      //         context: Path.resolve(__dirname, "src/"),
      //         outputPath: "dist/",
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[Path][name].[ext]",
      //         context: Path.resolve(__dirname, "src/"),
      //         outputPath: "dist/",
      //         // publicPath: "../images",
      //         publicPath: ".",
      //         useRelativePaths: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: "url-loader",
      // },
      // {
      //   test: /\.(jpg|png|svg|jpeg|gif)$/,
      //   use: "url-loader",
      // },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      // },
      {
        test: /\.(s[ac]ss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                // eslint-disable-next-line no-unused-vars
                getLocalIdent: (context, localIdentName, localName) => {
                  return `${
                    context.context.split(/[/|\\]+/).slice(-1)[0]
                  }__style__${localName}`;
                },
              },
            },
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        // type: "asset/resource",
        use: {
          loader: "file-loader",
          options: {
            // name: "[name].[ext]",
            name: "[Path][name].[ext]",
            outputPath: "fonts/",
          },
        },
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "fonts/",
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   use: [
      //     {
      //       loader: "ttf-loader",
      //       options: {
      //         name: "./fonts/[hash].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: Path.resolve(__dirname, "public/index.html"),
      // favicon: Path.join(__dirname, '../src/static/favicon.png'),
      filename: "index.html",
    }),
    // new MiniCssExtractPlugin(),
    new MiniCssExtractPlugin({
      attributes: {
        id: "target",
        "data-target": "example",
      },
    }),
  ],
};
