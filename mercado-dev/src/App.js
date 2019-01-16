import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './components/footer'

import Home from './components/home'
import NovoAnuncio from './components/novo-anuncio'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import base from './banco/base'
import Categorias from './components/categorias'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      categorias: []
    }

    base.bindToState('categorias', {
      context: this,
      state: 'categorias',
    });

  }


  render() {
    return (
      <Router>
      <div className="App">

        <div>
          <Route path='/' exact render={() => <Home categorias={this.state.categorias} />} />
          <Route path='/novo-anuncio' exact render={ () => <NovoAnuncio categorias={this.state.categorias}/> } />
          <Route path='/categorias' exact render={ () => <Categorias 
          categorias={this.state.categorias} />
        } />

       </div>

       <Footer />



      </div>
    </Router>
    );
  }
}

export default App;
