const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');
const { merge } = require('webpack-merge');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 3001,
        historyApiFallback: true
    },
    output: {
        publicPath: 'http://localhost:3001/'
    },
    plugins: [
        new ModuleFederation({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/app-index.js',
            },
            shared: packageJSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig);