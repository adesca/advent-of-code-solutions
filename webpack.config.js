const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index/index.ts',
        util: './src/util/DomBuilder.ts',
        pageOne: './src/1/index.ts',
        pageTwo: './src/2/index.ts',
        pageThree: './src/3/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index/index.html'
        }),
        new webpack.ProvidePlugin({
            ProblemSpace: './src/index/index'
        })
    ]
}