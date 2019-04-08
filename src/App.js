import React, { Component } from 'react';
import "./App.scss";
import Header from './components/header';
import Nav from './components/nav';
import SignIn from './components/signin';

class App extends Component {
  render() {
    let view = <SignIn/>
    return (
      <div className="App">
      <Header/>
      <Nav/>
      {view}
      </div>
    );
  }
}

export default App;
