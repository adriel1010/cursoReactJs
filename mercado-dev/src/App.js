import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './components/footer'

import Home from './components/home'
import NovoAnuncio from './components/novo-anuncio'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <Router>
      <div className="App">

        <div>
          <Route path='/' exact component={Home} />
          <Route path='/novo-anuncio' exact component={NovoAnuncio} />

       </div>

       <Footer />



      </div>
    </Router>
    );
  }
}

export default App;
