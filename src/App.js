import React, { Component } from 'react';
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import SignIn from './components/signin';
import Register from './components/register';
import Game from './components/game';
import Classes from './components/classes';
import Class from './components/class';
import Card from './components/card'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" />
            <Route exact path="/signin/" component={SignIn} />
            <Route exact path="/register/" component={Register} />
            <Route exact path="/game/" component={Game} />
            <Route exact path="/classes/" component={Classes} />
            <Route exact path="/classes/:class" component={Class} />
            <Route path="/:name" component={Card}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
