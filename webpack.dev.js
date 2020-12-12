const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const devConfig = {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader','postcss-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                sideEffects: false,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 9000,
        compress: true,
        hot: true
    },
}
module.exports = merge(common, devConfig)