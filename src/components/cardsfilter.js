import React, { Component } from 'react';
import '../scss/cardsfilter.scss'
import { getCardsByClass, getCardsBySet } from './Api'

class CardsFilter extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { cards: [], manacost: "All Mana Cost", rarity: "All Rarities", type: "All Types", attack: "All Attacks", health: "All HP" };
    this.bg = require(`../img/${this.props.getImg}.jpg`)
  }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }
  filterCards = () => {
    let cards = this.state.cards;
    let newCards = [];
    let pomCards = [];
    if (this.state.manacost !== "All Mana Cost") {
      cards.map(e => e.cost === parseInt(this.state.manacost) && newCards.push(e))
    }
    if (this.state.rarity !== "All Rarities" && newCards.length === 0) {
      cards.map(e => e.rarity === this.state.rarity && newCards.push(e))
    } else if (this.state.rarity !== "All Rarities") {
      newCards.map(e => e.rarity === this.state.rarity && (pomCards.push(e)));
      newCards = pomCards.slice()
      pomCards = []
    }
    if (this.state.type !== "All Types" && newCards.length === 0) {
      cards.map(e => e.type === this.state.type && newCards.push(e))
    } else if (this.state.type !== "All Types") {
      newCards.map(e => e.type === this.state.type && (pomCards.push(e)));
      newCards = pomCards.slice()
      pomCards = []
    }
    if (this.state.attack !== "All Attacks" && newCards.length === 0) {
      cards.map(e => e.attack === parseInt(this.state.attack) && newCards.push(e))
    } else if (this.state.attack !== "All Attacks") {
      newCards.map(e => e.attack === parseInt(this.state.attack) && (pomCards.push(e)));
      newCards = pomCards.slice()
      pomCards = [];
    }
    if (this.state.health !== "All HP" && newCards.length === 0) {
      cards.map(e => e.health === parseInt(this.state.health) && newCards.push(e))
    } else if (this.state.health !== "All HP") {
      newCards.map(e => e.health === parseInt(this.state.health) && (pomCards.push(e)));
      newCards = pomCards.slice()
    }
    if (newCards.length === 0 && (this.state.type !== "All Types" || this.state.rarity !== "All Rarities" || this.state.manacost !== "All Mana Cost" || this.state.health !== "All HP" || this.state.attack !== "All Attacks")) newCards = []
    else if (newCards.length === 0) newCards = cards.slice()
    this.props.getCards(newCards)
  }
  componentDidMount() {
    this._isMounted = true;
    (async () => {
      if (this.props.cardSet === "cardSet") {
        var cards = await getCardsBySet(this.props.getUrl);
      } else {
        cards = await getCardsByClass(this.props.getUrl);
      }
      if (this._isMounted) {
        this.setState({ cards: cards });
        this.filterCards()
      }
    })();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <article id="classArt" style={{ backgroundImage: "url(" + this.bg + ")" }}>
        <select id="manacost" onChange={this.handleChange.bind(this)} value={this.state.manacost}>
          <option value="All Mana Cost">All Mana Cost</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <select id="rarity" onChange={this.handleChange.bind(this)} value={this.state.rarity}>
          <option value="All Rarities">All Rarities</option>
          <option value="Free">Free</option>
          <option value="Common">Common</option>
          <option value="Rare">Rare</option>
          <option value="Epic">Epic</option>
          <option value="Legendary">Legendary</option>
        </select>
        <select id="type" onChange={this.handleChange.bind(this)} value={this.state.type}>
          <option value="All Types">All Types</option>
          <option value="Minion">Minion</option>
          <option value="Spell">Spell</option>
          <option value="Weapon">Weapon</option>
        </select>
        <select id="attack" onChange={this.handleChange.bind(this)} value={this.state.attack}>
          <option value="All Attacks">All Attacks</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <select id="health" onChange={this.handleChange.bind(this)} value={this.state.health}>
          <option value="All HP">All HP</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <h2>{this.props.getUrl.toUpperCase()}</h2>
        <button type="button" className="filterButton" onClick={this.filterCards.bind(this)}>FILTER</button>
      </article>
    );
  }
}

export default CardsFilter;