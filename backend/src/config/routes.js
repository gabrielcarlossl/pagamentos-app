// referencia do express

const express = require('express')

//vai receber o servidor express como paramentro usando o module.exports

module.exports = function(server){
    // definir URL base para todas as rotas

    const router = express.Router()
    // todas as URL que tiverem /api serão direcionados para esse middleware router
    server.use('/api', router)

    // Mapeamento das rotas do ciclo de pagamento 
    // primeiro pegando a referencia do billingCycle

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
    
}