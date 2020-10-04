const path = require('path');
const commonConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');

const developmentConfig = {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000,
        open: true,
        historyApiFallback: true,
        hot: true
    }
};

const config = merge(commonConfig, developmentConfig);

module.exports = config;
