const restful = require('node-restful') //nesse arquivo é fazendo o mapeamento do objeto
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({ // criando um objeto e definindo os campos. 
    description: { type: String, require: true}, 
    done: { type: Boolean, require: true, default: false}, 
    createAt: { type: Date, default: Date.now }

})

module.exports = restful.model('Todo', todoSchema) // exportando o arquivo