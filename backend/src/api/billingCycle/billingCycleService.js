// Definir os serviços rest


const BillingCycle = require("./billingCycle"); // realizar referencia do billingCycle

const errorHandler = require('../common/errorHandler') // constante para importar o errorHandler

// a partir desse objeto será criado os serviços rest apenas dizendo quais os metodos HTTP que trabalharão
// o service REST pega os metodos do HTTP e aplica a semantica, usa para definir que tipo de operação ele fará

BillingCycle.methods(["get", "post", "put", "delete"]);
// o rest não aplica por padrão as regras definidas no mapeamento quando é feito uma atualização "PUT"
// para ser feita essa validação é necessário a linha a baixo

// sera passado 2 opçoes, a primeira quando  for feito uma atualização, o serviço devolve o objeto atualizado, ele retorna o antigo e não o novo
// new: true -> sempre retornará o objeto novo e  runValidators -> roda as validações também quando fizer um put.
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.after('post', errorHandler).after('put', errorHandler) // para interceptar os momentos que foi feito o post e put para que possa aplicar o middleware de converter mensagem de error

// a baixo está como uma chamada get, dentro da função está fazendo um find, o mongoose ira buscar os registros na coleção billigCycle de forma sem distinção
// se não tiver erro ele retorna os dados se tiver erro ele retorna status 500 

BillingCycle.route("get", (req, res, next) => {
  BillingCycle.find({}, (err, docs) => {
    if(!err) {
      res.json(docs)
  } else {
      res.status(500).json({errors: [error]})
  }
}).skip(req.query.skip).limit(req.query.limit)
})

// Serviço para calcular a quantidade de pagamentos cadastrados, vai saber a quantidade de paginas
// uma nova rota, que se chama "COUNT" para quando colocar no link /count, ele mostrar a quantidade de pagamentos cadastrados
//recebe um middleware, que recebe uma REQuisição, RESposta e next e vai retornar a quantidade
//recebe como parametro uma callback, que recebe como primeiro elemento o erro, e um VALUE, que é a quantidade de elementos no billigCycle,
// faz o tratemnto de erro, caso tenha o erro, vai retornar o erro,  
//se não tiver erro vai retornar o value, que é a quantidade de elementos da coleção billingcycle
BillingCycle.route('count',(req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error){
      res.status(500).jason({erros: [error]})
    }else {
      res.json({value})
    }
  })
})

//serviço para retornar o sumario de todos os ciclos de pagamento

BillingCycle.route('summary', (req, res, next) => {
  // o aggregate é uma função que recebe varios parametnros, cada parametro é um objeto, serão os passos para a PIPE line, sequencia de passos para agregar o valor dos ciclos
  //
  BillingCycle.aggregate([{ 
      
      $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} // o PROJECT deve colocar dentro aquilo que  quero extrair de dentro do objeto ciclo de pagamento
    }, { 
    
      // Agora fazer um grupo, agrupar um valor de acordo com algo, igual o group by do SQL
      // usando group como null ele vai pegar tudo, vai somar todos os credits

      $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} // o segundo passo de agrupamento de todos os credit e debt
    // vai gerar um atributo credit e  vai somar todos os valores do credits e debt do passo anterior que é o project
    
    }, { 
      
    $project: {_id: 0, credit: 1, debt: 1}// colocando 0 não vai aparecer // por fim extrair o resultado para que saia apenas credit e debt
  }], (error, result) => { 

    // por ultimo uma callback que sera chamada depois que acabar a pipe line, se houver erro será tratada, 
    if(error) {
      res.status(500).json({errors: [error]})
  } else {
      res.json(result[0] || {credit: 0, debt: 0})
  }
  })
})

module.exports = BillingCycle;