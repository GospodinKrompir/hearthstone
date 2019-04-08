import React, { Component } from 'react';
import "./App.scss"
import Header from './components/header'
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Nav/>
      </div>
    );
  }
}

export default App;
