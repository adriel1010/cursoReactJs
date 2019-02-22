const mongoose = require('mongoose') // serve para fazer o mapeamento, tbm alteração exclusão.... é uma api  
mongoose.Promise = global.Promise //tirar msg de advertencia da api 
module.exports = mongoose.connect('mongodb://localhost/mymoney') // exportando o mongo - mymoney nome do banco

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."