// Definir os serviços rest

// realizar referencia do billingCycle
const BillingCycle = require("./billingCycle");

// a partir desse objeto será criado os serviços rest apenas dizendo quais os metodos HTTP que trabalharão
// o service REST pega os metodos do HTTP e aplica a semantica, usa para definir que tipo de operação ele fará

BillingCycle.methods(["get", "post", "put", "delete"]);
// o rest não aplica por padrão as regras definidas no mapeamento quando é feito uma atualização "PUT"
// para ser feita essa validação é necessário a linha a baixo

// sera passado 2 opçoes, a primeira quando  for feito uma atualização, o serviço devolve o objeto atualizado, ele retorna o antigo e não o novo
// new: true -> sempre retornará o objeto novo e  runValidators -> roda as validações também quando fizer um put.
BillingCycle.updateOptions({ new: true, runValidators: true });

// a baixo está como uma chamada get, dentro da função está fazendo um find, o mongoose ira buscar os registros na coleção billigCycle de forma sem distinção
// se não tiver erro ele retorna os dados se tiver erro ele retorna status 500 

BillingCycle.route("get", (req, res, next) => {
  BillingCycle.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json({ errors: [error] });
    }
  });
});

// Serviço para calcular a quantidade de pagamentos cadastrados, vai saber a quantidade de paginas

BillingCycle.route('count',(req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error){
      res.status(500).jason({erros: [error]})
    }else {
      res.json({value})
    }
  })
})

module.exports = BillingCycle;