const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var entry = './src/index.js';

const srcDir = path.resolve(process.cwd(), 'src');
const distDir = path.resolve(process.cwd(), 'dist');

module.exports = {
    entry: entry,
    output: {
        path: distDir,
        filename: 'index.js',
        library: 'CodishChart',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    resolve: {
        modules: [
            'node_modules',
            srcDir
        ],
        extensions: ['.js', '.json'],
    },
    mode: 'production',
    target: 'web',
    optimization: {
        minimize: true
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
    ],
};
