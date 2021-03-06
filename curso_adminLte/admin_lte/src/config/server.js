/*esse método é responsável por confiruações referentes ao servidor express, como:
startar o servidor;
locar uma porta;
conseguir publicar os webServices
*/
const port = 3003 //porta de inicialização

const bodyParse = require('body-parser') // faz a conversão do corpo da requisição, converte json, forms etc  
const express = require ('express')
const server = express() // startando o express
const allowCors = require('./cors') //incluindo a cors 'com as permissões'

server.use(bodyParse.urlencoded({ extended: true }))  // 
server.use(bodyParse.json()) // parse de aquivo json 
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND RODANDO na porta ${port}.`) // caso consiga registrar nessa porta irá mostrar essa msg 
})

module.exports = server

