import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './index.scss'

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    count: 0,
    name: '',
    lastName: ''
  }
}


  contarClique(){
    this.setState({
      nome: this.state.nome
    })
  }

  contarClique2(){
    this.setState({
      count: this.state.count +  1
    })
  }

  mens(event){
    this.setState({
      lastName: event.target.value
    })
  }

  onChangeEvent(key, valor){
    this.setState({
      [key]: valor.target.value
    })
  }



 render() {
    return (
      <div className="App">

        <p>Contador: {this.state.count}</p>
        <button onClick={this.contarClique.bind(this)}>
          Contar
        </button>
        <br />
        <input type='text'  value={this.state.nome}  onChange={(e) => {
            this.setState({
              name: e.target.value
            })
        }}/>

        <br />
        <input type='text' value={this.state.lastName}  onChange={this.mens.bind(this)}/>

          <p>{this.state.name} {this.state.lastName}</p>


      </div>
    );
  }
}

export default App;
