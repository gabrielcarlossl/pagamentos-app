// Configuração do WebPack

const webpack = require('webpack') // Importando o webpack

const ExtractTextPlugin = require('extract-text-webpack-plugin') // Importar o arquivo responsavel pelos CSS e aplicar 

// Configuração abaixo do webpack,
// primeiro configurando a entrada ENTRY

module.exports = {
    entry: './src/index.jsx', 
    
}