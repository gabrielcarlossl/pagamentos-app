// Fazer a requisição do Mongoose e o comando para evitar avisoes desnecessários 

const mongoose = require('mongoose')

mongoose.Promise = global.Promise // Vai pegar a API de promises do NODE global e vai atribuir a API para o mongoose

module.exports = mongoose.connect('mongodb://localhost/pagamentos') // vai exportar a conexão do MongoDB, 
// deve fazer uma referencia desse arquivo "DATABASE.JS" dentro do arquivo LOADER.JS 