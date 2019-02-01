const express = require('express')

// pegando uma instância do express
const server = express()

//mapeando uma url  /primeiro parâmetro ta recebendo a requisição e no segundo a resposta
server.get('/', function(req, res) {
    res.send('<h1>Index !</h1>')//send é para madnar um html completo 
})

//diz q irá responder a qualquer tipo de requisição feita para /teste , aqui aceita por get, post....
server.all('/teste', function(req, res) {
    res.send('<h>Teste  </h>')
})

//expressão regular, chama se tiver esses  3 palavras na url
server.get(/api/, function(req, res) {
    res.send('<h>resposta </h>')
})

server.listen(3000, () =>
    console.log('executando na porta 3000') // msg apenas para saber se deu tudo certo no start
) 