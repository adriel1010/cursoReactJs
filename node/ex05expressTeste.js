const express = require('express')
 const server = express()
 const router = require('./ex05express')

 // o router tem várias rotas mapeadas, chama api que vai chamar essas rotas
 server.use('/api', router)

server.listen(3000, () => 
    console.log('executando na porta 3000') // msg apenas para saber se deu tudo certo no start
) 