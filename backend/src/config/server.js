// Arquivo para configurar servidor 

// definir a porta
const port = 3003

// referencia de middleware body-parser esta dentro da cadeia de tratamento das requisições
// ele faz o parser no corpo da requisição para entregar o objeto pronto
const bodyParser = require('body-parser')

// Referencia parar o express
// sempre que faz o require no modulo node é retornado uma instancia unica
const express = require('express')

// instanciando o express, ele faz a referenica do servidor, sempre que fizer a chamada dessa função ele 
// ira retornar uma nova instancia do express, sempre retornara um novo servidor 
const server = express()

// esse middleware para ser intercpetado pela requisição
server.use(bodyParser.urlencoded({extended: true})) // urlEncoded é o padrão quando formulario é submetido, utilizando modo extendido ele consegue interpretar mais dados
server.use(bodyParser.json()) // middleware para fazer parser quando no corpo da requisição vier um JSON

// Metodo listen para escutar uma porta e caso a porta seja alocada ele irá imprimir a mensagem.
server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})