const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

module.exports = {
    mode: 'development',
    entry: {
        main: ['./assets/js/main.js', ...getImages()]
    },
    output: {
        filename: 'assets/js/bundle.[contenthash].js',
        path: path.resolve(__dirname, 'home')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssWebpackPlugin.loader },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/img/'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
        new MiniCssWebpackPlugin({
            filename: './assets/css/main.[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './php/', to: 'php' },
                { from: '.env', to: './'},
                { from: '.htaccess', to: './'},
                { from: 'composer.json', to: './'},
                { from: 'package.json', to: './'},
            ]
        })
    ]
}

function getImages() {
    return glob.sync('./assets/img/**/*.+(png|jpg|jpeg|gif|svg)').map(image => path.resolve(__dirname, image));
}