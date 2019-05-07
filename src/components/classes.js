import React, { Component } from 'react';
import '../scss/classes.scss';
import { NavLink } from 'react-router-dom'

class Classes extends Component {
  constructor() {
    super();
    this.class = ["Druid", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior", "Neutral"]
  }

  render() {
    let style = { textDecoration: 'none', color: 'white' }
    let view = this.class.map(element => { let url = element.toLowerCase(); return <div key={element} className="itemBox"><NavLink to={"/classes/" + url} style={style}><div className={element}></div> <div className="classNameplate">{element}</div></NavLink></div> })
    return (
      <main>
        {view}
      </main>
    )
  }
}

export default Classes;