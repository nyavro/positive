const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack')
const path = require("path");
const webpack = require("webpack");
const basePath = __dirname;

module.exports = (env) => {
    return {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    entry: ["@babel/polyfill", "./index.tsx"],
    output: {
        path: path.join(basePath, "dist"),
        filename: "bundle.js",
    },
    devtool: "source-map",
    devServer: {
        host: "localhost",
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    babelCore: "@babel/core", // needed for Babel v7
                },
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "assets/img/[name].[ext]?[hash]",
                    esModule: false,
                },
            },
        ],
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: "index.html", //Name of file in ./dist/
            template: "index.html", //Name of template in ./src
            hash: true,
        }),
        new Dotenv(),
        new webpack.DefinePlugin({
            POSITIVE_BOT_TOKEN: JSON.stringify(process.env.POSITIVE_BOT_TOKEN)
        })
    ],
}};