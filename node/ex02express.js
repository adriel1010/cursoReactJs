const express = require('express')

// pegando uma instância do express
const server = express()

//mapeando uma url  /primeiro parâmetro ta recebendo a requisição e no segundo a resposta
server.get('/', function(req, res, next ) {
   console.log('Inicio...')
   next()
   console.log('fim...')
})

server.get('/', function(req, res, next ) {
    console.log('Resposta...') 
    res.send('<h1>olá express</h1>')
 })

 // aqui tem o mapeamento para 2 url, primeiro cai na 1 pq ela é a primeira associada, quando chama o next, ele manda passar para  execução 
 // do proximo da cadeia, ou seja, chamou o de baixo e continuou na sequencia. 


 

server.listen(3000, () =>
    console.log('executando na porta 3000') // msg apenas para saber se deu tudo certo no start
) 