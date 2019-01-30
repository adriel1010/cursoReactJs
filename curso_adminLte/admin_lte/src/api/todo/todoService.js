const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todos.updateOption({new: true, runValidators: true})

module.exports = Todo