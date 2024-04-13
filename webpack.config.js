const path = require('path');
const glob = require('glob');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssWebpackPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
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
                    { loader: miniCssWebpackPlugin.loader },
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
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
        new miniCssWebpackPlugin({
            filename: './assets/css/main.[contenthash].css'
        }),
        new copyWebpackPlugin({
            patterns: [
                { from: './php/', to: 'php' },
                { from: '.env', to: './' },
                { from: '.htaccess', to: './' },
                { from: 'composer.json', to: './' },
                { from: 'package.json', to: './' },
            ]
        }),
    ]
}

function getImages() {
    return glob.sync('./assets/img/**/*.+(png|jpg|jpeg|gif|svg)').map(image => path.resolve(__dirname, image));
}