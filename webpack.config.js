const path = require('path');

module.exports = {
    mode: 'production',
    entry: './assets/js/main.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ]
    }
}