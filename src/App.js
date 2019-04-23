import React, { Component } from 'react';
import "./App.scss";
import Header from './components/header';
import Nav from './components/nav';
import SignIn from './components/signin';
import Register from './components/register';
import Footer from './components/footer'

class App extends Component {
  render() {
    let view = <SignIn/>
    return (
      <div className="App">
      <Header/>
      <Nav/>
      {view}
      <Footer/>
      </div>
    );
  }
}

export default App;
