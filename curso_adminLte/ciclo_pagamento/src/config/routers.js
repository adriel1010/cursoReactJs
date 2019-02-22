const express = require('express') //pegando as referencias do express

module.exports = function(server) {

    // sempre que tiver uma requisição /api ele chama meu router 
   const router = express.Router() // pegando a rota do Routers 
   server.use('/api', router) // esse router sempre será chamando quando chamarmos /api 



// aqui ele mapeia toda rota que eu definir lá em billingCycleService
   const BillingCycle = require('../api/billingCycle/billingCycleService') //usa os métodos declarados em BillingCycle 'get, ...'
   BillingCycle.register(router, '/billingCycles')
}  