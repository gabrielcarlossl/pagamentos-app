// Fazer o mapeamento do objeto de como ele colocaria no banco de dados, o esquema

// fazer referencia para o node restful
const restful = require('node-restful')
// pegar referencia do mongoose que esta dentro do node resful
const mongoose = restful.mongoose

// Primeiro criar o esquema de crédito
// com sub esquemas o crédito e débito

//criando o objeto que representa o schema relativo ao credito,
// ele terá 2 atributos o NOME string será requerido ou seja, obrigatório
// e o VALUE, number com o valor minimo 0, para ser um número positivo e também é requerido
const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
})

// Schema relativo ao débito 
// com 3 atributos
// NOME String, requerido,
// VALUE Number, com o minimo 0 e também requerido
// STATUS string, não requerido, com a função uppercase,  e ele estará dentro de uma enumeração que é os tipos {PAGO, PENDENTE E AGENDADO}
const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true},
    status: {type: String, required: false, uppercase: true, 
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

// Schema para o ciclo de pagamento 