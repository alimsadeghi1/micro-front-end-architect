const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');
const { merge } = require('webpack-merge');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    output: {
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        new ModuleFederation({
            name: 'container',
            remotes: {
                auth: 'auth@http://localhost:3001/remoteEntry.js',
                layout: 'layout@http://localhost:3002/remoteEntry.js',
                contactUs: 'contactUs@http://localhost:4200/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
            },
            shared: packageJSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig);