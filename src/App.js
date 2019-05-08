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
import CardSets from './components/cardsets';
import CardSet from './components/cardset';
import Home from './components/home';


class App extends Component {
  constructor() {
    super()
    this.state = { islogged : false, name:"LogPlz" }
  }
  logCheck = (islogged,name) => {
    this.setState({ islogged: islogged, name:name })
  }
  logOutCheck = ()=>{
    this.setState({islogged:false, name:"LogPlz"})
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header logged={this.state.islogged} name={this.state.name} logOut={this.logOutCheck} />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin/" render={(routeProps) =>
              <SignIn {...routeProps} logCheck={this.logCheck}/>}/>
              <Route path="/register/" component={Register} />
              <Route exact path="/game/" component={Game} />
              <Route exact path="/classes/" component={Classes} />
              <Route path="/classes/:class" component={Class} />
              <Route exact path="/sets/" component={CardSets} />
              <Route exact path="/sets/:set" component={CardSet} />
          </Switch>
          <Footer />
        </Router>
      </div>
        );
      }
    }
    
    export default App;
