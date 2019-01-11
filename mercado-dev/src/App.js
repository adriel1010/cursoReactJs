import React, { Component } from 'react';
import logo from './logo.svg'; 
import HeaderHome from './components/header-home'
import AnuncioHome from './components/anuncio-home'

class App extends Component {
  render() {
    return (
      <div className="App">
       <HeaderHome />

       <div className="container">
       <AnuncioHome />
       <AnuncioHome />
       <AnuncioHome />
       </div>



      </div>
    );
  }
}

export default App;
