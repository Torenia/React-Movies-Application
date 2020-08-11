const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const productionConfig = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [new OptimizeCSSAssetsPlugin({}),  new MinifyPlugin()],
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        open: true
    },
};

const config = merge(commonConfig, productionConfig);

module.exports = config;
