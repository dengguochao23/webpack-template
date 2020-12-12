const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js'
    },
    optimization: {
        // 代码分离
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: 'single',
        // tree shaking
        usedExports: true
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
}