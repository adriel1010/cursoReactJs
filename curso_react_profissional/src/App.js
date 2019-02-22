import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './index.scss'

class Apps extends Component {

  render(){
    return (
    <div className='container'>
      <NewNote />
      <NoteList />
    </div>
  )

}
}

const NewNote = () => (
  <div className='new-note'>
      <input type="text" className='new-note_input' />
    </div>
);

const NoteList = () => (
    <div className='note-list'>
      <div className='note'> teste </div>
      <div className='note'> teste </div>
      <div className='note'> teste </div>

    </div>
);

class App extends Component {



  render() {

    return (
      <Apps />
    )

  }



}

export default App;

/*
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

*/
