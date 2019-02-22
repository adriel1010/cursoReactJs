// mapeando minha entidade 
const restful = require('node-restful') //nesse arquivo é fazendo o mapeamento do objeto
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({ // criando um objeto e definindo os campos. 
    name: { type: String, require: true}, 
    valor: { type: Number, require: true, min: 0} 

})

const debitSchema = new mongoose.Schema({ // criando um objeto e definindo os campos. 
    name: { type: String, require: true}, 
    valor: { type: Number, require: [true, 'Informe o valor do débito!'], min: 0},
    status: { type: String, require: true, uppercase: true, 
            enum: ['PAGO', 'PENDENTE', 'AGENDADO']} 

})

const billingCycleSchema = new mongoose.Schema({ // criando um objeto e definindo os campos. 
    name: { type: String, require: true}, 
    month: { type: Number, min: 1, max: 12, require: true},
    year: { type: Number, min: 1970, max: 2100, require: true},
    credits: [creditSchema],
    debits: [debitSchema]

})


module.exports = restful.model('BillingCycle', billingCycleSchema) // exportando o arquivo