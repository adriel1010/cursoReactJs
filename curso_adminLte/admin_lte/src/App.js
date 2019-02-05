import React, { Component } from 'react'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Todo from './components/todo'
import About from './components/about'
import Menu from './template/menu'
import Routes from './main/routes'

class App extends Component { 
  render() {
    return (
      <div className="container"> 
         <Menu />
         <Routes /> 
      </div>
    );
  }
}

export default App;
