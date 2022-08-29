// referencia do lodash padrão é o underline 

const _ = require('lodash')

// padrao de assinatura de um middleware request, respo


module.exports = (req, res, next) => {
    const bundle = res.locals.bundle // os erros estão no bundle que tem a lista de erros

    if(bundle.errors) { // se bundle erros estiver setado vai precisar fazer o parse dos erros para retornar como quer
        const errors = parseErrors(bundle.errors) // a constante erros recebe o resultado da função parseErros, e o resultado será:  
        res.status(500).json({errors})
    } else {
        next() // se nao tiver erro ele irá para o proximo middleware
    }
}

// a função para receber os erros  que recebeu do bundle

const parseErrors = (nodeRestfulErrors) => {
    // para percorrer o objeto erros, deve ser feito um for dentro do objeto erro para pegar o atributo
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors 
}