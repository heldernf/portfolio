const path = require('path');

module.exports = {
    entry: {
        main: './assets/js/main.js' // Seu arquivo JavaScript principal
    },
    output: {
        path: path.resolve(__dirname, 'assets/js/dist'), // Diretório de saída
        filename: 'bundle.js' // Nome do arquivo de saída
    }
};