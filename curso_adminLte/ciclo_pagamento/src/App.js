import './lib_react_admin_lte/style/styles'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/template/Header';   
import SideBar from './components/template/SideBar';   
import Contents from './components/template/Contents'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SideBar />
        <Contents />
      </div>
    );
  }
}

export default App;

