// Configuração do WebPack

const webpack = require('webpack') // Importando o webpack

const ExtractTextPlugin = require('extract-text-webpack-plugin') // Importar o arquivo responsavel pelos CSS e aplicar 

// Configuração abaixo do webpack,
// primeiro configurando a entrada ENTRY e saida OUTPUT

module.exports = {
    entry: './src/index.jsx', 
    output: {
        path: __dirname + '/public',
        filename: './app.js' 
    },
    // configurando webserver
    devServer: {
        port: 8080,
        contentBase: './public', // Pasta onde ele vai ler o conteudo
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: { // criando apelido para arquivos
            modules: __dirname + '/node_modules', // sempre que for usar a pasta node_modules basta colocar modules
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js', // Criar apelido ao jquery e bootstrap, admin lte usa
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    // Configuração dos plugins, referencias para o jquery
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test:/.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                preset: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/, // fontes
            loader: 'file'
        }]
    }
}