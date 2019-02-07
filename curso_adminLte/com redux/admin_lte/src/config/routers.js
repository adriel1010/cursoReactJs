 const express = require('express') //pegando as referencias do express

 module.exports = function(server) {

    const router = express.Router() // pegando a rota do Routers 
    server.use('/api', router) // esse router sempre será chamando quando chamarmos /api 


    const todoService = require('../api/todo/todoService') //usa os métodos declarados em todoService 'get, ...'
    todoService.register(router, '/todos')
 }