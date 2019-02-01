const _ = require('lodash')

const alunos = [{

    nome: 'João',
    nota: 7.6

}, 
{
    nome: 'Mario',
    nota: 7.8
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)
// aqui baixou o npm i lodash --save ele salva no pack.json, --save dev ele salva bibliotecas de desenvolvimetno que são aquelas de testes... 