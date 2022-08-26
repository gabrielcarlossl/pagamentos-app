// Fazer a requisição do Mongoose e o comando para evitar avisoes desnecessários 

const mongoose = require('mongoose')

mongoose.Promise = global.Promise // Vai pegar a API de promises do NODE global e vai atribuir a API para o mongoose

module.exports = mongoose.connect('mongodb://localhost/pagamentos') // vai exportar a conexão do MongoDB, 
// deve fazer uma referencia desse arquivo "DATABASE.JS" dentro do arquivo LOADER.JS 

// traduções das mensagem de error quando for receber a mensagem de error no postman
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{min}'. "
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{max}'. "
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'. "