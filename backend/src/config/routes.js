const express = require('express')

module.exports = function (server) {

    //Definir URL base para todasas rotas
    const router = express.Router()
    server.use('/api', router)

    //Rodas do Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}