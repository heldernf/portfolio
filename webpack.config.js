const path = require('path');

module.exports = {
    entry: {
        main: './assets/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets/js/dist'),
        filename: 'bundle.js'
    }
};