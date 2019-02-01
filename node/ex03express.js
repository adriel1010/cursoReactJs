const express = require('express')

// pegando uma instância do express
const server = express()

//mapeando uma url  /primeiro parâmetro ta recebendo a requisição e no segundo a resposta
server.use('/api', function(req, res, next ) {
   console.log('Inicio...')
   next()
   console.log('fim...')
})

//mapeando com use, ele irá permitir passar dados de qq metodo, se colocar get só irá receber metodos get 
// se eu tirar o /api ele irá requisitar qualquer coisa. 
server.use('/api', function(req, res, next ) {
    console.log('Resposta...') 
    res.send('<h1>Api</h1>')
 })

 // aqui tem o mapeamento para 2 url, primeiro cai na 1 pq ela é a primeira associada, quando chama o next, ele manda passar para  execução 
 // do proximo da cadeia, ou seja, chamou o de baixo e continuou na sequencia. 



 

server.listen(3000, () =>
    console.log('executando na porta 3000') // msg apenas para saber se deu tudo certo no start
) 