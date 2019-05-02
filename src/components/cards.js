import React, { Component } from 'react';
import '../scss/cards.scss';
import { getCards } from './Api'


class Cards extends Component {
    constructor() {
        super();
        this.state = { cards: null }
      }
    
      componentDidMount() {
        (async () => {
          let cards = await getCards();
          this.setState({ cards: cards });
        })();
      }
  
    render() {
        let cards = this.state.cards;
        let cl = console.log(cards)
        return (
           <div>Cards{cl}</div>
        );
    }
}

export default Cards;