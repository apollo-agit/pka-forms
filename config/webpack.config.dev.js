/**
 * webpack configuration for local dev builds and ambient 
 * server and watch configurations
 * This webpack config will merge with the common webpack conf
 */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var helpers = require('./helpers');



/**
 * Setting environments
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

const HMR = process.argv.join('').indexOf('hot') > -1;
const METADATA = {
    title: 'App Portfolio',
    baseUrl: '/',
    host: 'localhost',
    port: 8080,
    ENV: ENV,
    HMR: HMR
};

module.exports = webpackMerge(commonConfig, {
    metadata: METADATA,
    debug: true,
    devtool: 'source-map',

    devServer: {
        port: METADATA.port,
        host: METADATA.host,
        historyApiFallback: true,
        stats: 'minimal'
    },


    output: {
        path: helpers.root('dist/public'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    }

});
