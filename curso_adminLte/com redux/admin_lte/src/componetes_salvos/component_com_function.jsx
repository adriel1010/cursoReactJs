import React from 'react'

//todo componente no final vira uma function, uma classe vira uma function, usa a classe quando temos mais propriedades a ser feita. 
// function não tem state. 
export default (props) => (
    <h1>{props.value}</h1>
)


// podemos ter varios componetes em um mesmo arquivo ex:

 const Primeiro = props => (
     <h1>Primeiro Componente </h1>
 )

 const Segundo = props => (
    <h1>Primeiro Componente </h1>
)

export { Primeiro, Segundo }


// podemos exportar dessa forma 
export default Segundo2 = props => (
    <h1>Primeiro Componente </h1>
)

export const Segundo3 = props => (
    <h1>Primeiro Componente </h1>
)
 
//props.children -> isso aqui renderiza os filhos na tela, ou seja, tenho um componente chamano menber, nesse comonente eu recebo por prop o nome e o last name
// ai eu tenho outro componente chamado family que recebe um {props.children}, quando eu usar esse componente family ele irá renderizar todos os meus filhos, ex:
// ao renderizar fica:
// <Family>
//      <menber nome='adrie' lastName='carlos' />
//      <menber nome='adrie2' lastName='carlos' />
//      <menber nome='adrie3' lastName='carlos' />
// </Family> 
// ou seja, passamos tudo para family e lá renderiza todos os filhos, dentro de family tbm pode colocar h1 e outras coisas



// component class 
// forma de declarar o bind 
// pode ser no proprio elemento onChange={this.handleChange.bind(this)} 
// ou declara no construtir ex: this.handleChange = this.handleChange.bind(this)