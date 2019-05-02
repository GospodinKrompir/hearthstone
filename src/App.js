import React, { Component } from 'react';
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import SignIn from './components/signin';
import Register from './components/register';
import Cards from './components/cards';


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
            <Route exact path="/cards/" component={Cards} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
