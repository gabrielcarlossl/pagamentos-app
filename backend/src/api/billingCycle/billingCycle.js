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
    value: {type: Number, min: 0, required: [true, 'Informe o valor do débito!']}, // Quando colocado o valor e a string, será a mensagem apresentada quando não informar esse valor que é obrigatório
    status: {type: String, required: false, uppercase: true, 
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

// Schema para o ciclo de pagamento 
// ele terá 5 atributos NOME, MES, ANO, LISTA DE CREDITOS E LISTA DEBITOS
// NOME String, requerido,
// MES Number, min 1 max 12, requerido
// ANO Number, min 1970, max 2100, requerido
// CREDITS apontado para o creditSchema criado anteriormente
// DEBTS apontado para o debtSchema criado anteriormente

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max: 12, required: true },
    year: {type: Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

// Exportar o modulo colocando o billingCycleSchema para dizer como ele sera persistido no mongoDB

module.exports = restful.model('BillingCycle', billingCycleSchema)