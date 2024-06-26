const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },
    devServer: {
        client: {
          overlay: {
            errors: true,
            warnings: false,
          },
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/index.html", to: "" },
                { from: "node_modules/scichart/_wasm/scichart2d.data", to: "" },
                { from: "node_modules/scichart/_wasm/scichart2d.wasm", to: "" }
            ]
        }),
    ],
    devServer: {
        client: {
            overlay: {
                warnings: false,
                errors: true
            }
        }
    }
};
