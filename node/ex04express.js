const express = require('express')

// pegando uma instância do express
const server = express()

 //assim não precisa ficar repetindo a mesma URL 
server.route('/clientes')
    .get((req, res ) => res.send('Lista de cliente'))
    .post((req, res ) => res.send('Novo  cliente'))
    .put((req, res ) => res.send('Altera cliente'))
    .delete((req, res ) => res.send('Remove cliente'))
 

server.listen(3000, () =>
    console.log('executando na porta 3000') // msg apenas para saber se deu tudo certo no start
) 