//mesma coisa do express, criar um servidor
const http = require('http')
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end('<h1>Acho que é melhor usar o Express, não ? ')
})

const porta = 3456 // defini a porta 
server.listen(porta, function() { // mandei o servidor ficar escutando essa porta 
    console.log('escutando na porta 3456');
})