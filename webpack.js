/* eslint-disable */
const path                      = require('path');
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin   = require('optimize-css-assets-webpack-plugin');
const TerserPlugin              = require('terser-webpack-plugin');
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const CopyPlugin                = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    entry: {
        nocode: "./src/js/nocode.js",
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeTagWhitespace: true,
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyPlugin([
            {
                from: './src/images/*.png',
                to: './images',
                flatten: true
            },
            {
                from: './src/manifest.json',
                to: 'manifest.json'
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: false
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
