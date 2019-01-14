import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';

import './App.css';
import Home from './components/home'





class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (

        <Router>

         <Link to='/'>Home</Link> 


        </Router>


    );
  }
}

export default App;
