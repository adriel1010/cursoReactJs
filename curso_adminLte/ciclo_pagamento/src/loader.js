const server = require('./config/server')
require('./config/database') // colocando a referencia do banco 
require('./config/routers')(server) // passa server como parâmetro

/*essa classe é responsável por carregar os principais arquivos de configuração*/ 