const Todo = require('./todo') // importando o modelo do meu objeto criado 

Todo.methods(['get', 'post', 'put', 'delete']) // cria api rest padrão
Todo.updateOptions({new: true, runValidators: true}) // quando atualiza um registro no mongo, ele retorna o registro atualizado, o segundo parametro valida os registros definidos no meu objeto

module.exports = Todo