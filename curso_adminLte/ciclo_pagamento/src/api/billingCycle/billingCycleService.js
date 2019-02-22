const BillingCycle = require('./billingCycle') // importando o modelo do meu objeto criado 
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete']) // cria api rest padrão
BillingCycle.updateOptions({new: true, runValidators: true}) // quando faz a validação aplica a validação para os dois , new retorna o novo objeto validado, renVali... diz para apliocar as validações nos dois 
// quando atualiza um registro no mongo, ele retorna o registro atualizado, o segundo parametro valida os registros definidos no meu objeto

// interceptar a requisição 
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500),json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}, 
       }, {
          $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}  
       }, {
           $project:  {_id: 0, credit: 1, debt:1 }
       }, (error, result) => {
            if(error) {
                res.status(500),json({errors: [error]})
            } else {
                res.json(result[0] || { credit: 0, debt: 0 })
            }
       })
})

module.exports = BillingCycle