function temParam(param) {
    return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
    console.log('atenção total')
}else {
    console.log('sem argumento produção')
}
// aqui da para fazer verificações, caso seja produção execute isso, caso não, faça isso 

// modulo de acessar e ler arquivos, 
const fs = require('fs')

const files = fs.readdirSync(__dirname)

files.forEach(f => console.log(f))
