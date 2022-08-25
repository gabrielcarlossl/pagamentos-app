// Definir os serviços rest

// realizar referencia do billingCycle
const BillingCycle = require('./billingCycle')

// a partir desse objeto será criado os serviços rest apenas dizendo quais os metodos HTTP que trabalharão
// o service REST pega os metodos do HTTP e aplica a semantica, usa para definir que tipo de operação ele fará

BillingCycle.methods(['get', 'post', 'put', 'delete'])
// o rest não aplica por padrão as regras definidas no mapeamento quando é feito uma atualização "PUT" 
// para ser feita essa validação é necessário a linha a baixo

// sera passado 2 opçoes, a primeira quando  for feito uma atualização, o serviço devolve o objeto atualizado, ele retorna o antigo e não o novo
// new: true -> sempre retornará o objeto novo e  runValidators -> roda as validações também quando fizer um put.
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle