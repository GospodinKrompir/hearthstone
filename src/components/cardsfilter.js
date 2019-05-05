import React, { Component } from 'react';
import '../scss/cards.scss';
import { getCard, getCards } from './Api'


class CardsFilter extends Component {
  constructor() {
    super();
    this.state = { manacost: "All Mana Cost", class:"All Classes", rarity:"All Rarities", type:"All Types", set:'All Sets' };
  }

 handleChange(e){
     this.setState({[e.target.id]: e.target.value})
     console.log(this.state.manacost)
 }

  render() {

    return (
      <div>
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
        <option value="8+">8+</option>
      </select>
      <select id="class" onChange={this.handleChange.bind(this)} value={this.state.class}>
        <option value="All Classes">All Classes</option>
        <option value="Druid">Druid</option>
        <option value="Hunter">Hunter</option>
        <option value="Mage">Mage</option>
        <option value="Paladin">Paladin</option>
        <option value="Priest">Priest</option>
        <option value="Rogue">Rogue</option>
        <option value="Warlock">Warlock</option>
        <option value="Warrior">Warrior</option>
        <option value="Neutral">Neutral</option>
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
        <option value="Hero">Hero</option>
        <option value="Minion">Minion</option>
        <option value="Spell">Spell</option>
        <option value="Weapon">Weapon</option>
      </select>
      <select id="set" onChange={this.handleChange.bind(this)} value={this.state.set}>
        <option value="All Sets">All Sets</option>
        <option value="Basic">Basic</option>
        <option value="Classic">Classic</option>
        <option value="Blackrock Mountain">Blackrock Mountain</option>
        <option value="Naxxramas">Curse of Naxxramas</option>
        <option value="Goblins vs Gnomes">Goblins vs Gnomes</option>
        <option value="Journey to Un'Goro">Journey to Un'Goro</option>
        <option value="Knights of the Frozen Throne">Knights of the Frozen Throne</option>
        <option value="Kobolds &amp; Catacombs">Kobolds &amp; Catacombs</option>
        <option value="Basic">Basic</option>
        <option value="Basic">Basic</option>
        <option value="Basic">Basic</option>
        <option value="Basic">Basic</option>
        <option value="Basic">Basic</option>
      </select>
      <h2>{this.state.tech}</h2>
    </div>
    );
  }
}

export default CardsFilter;