import React, { Component } from 'react';
import '../scss/nav.scss';
import {NavLink} from 'react-router-dom'

class Game extends Component {
    render() {
        let style={ textDecoration: 'none', color: 'white' }
        return (
            <nav>
            <NavLink to="/game/" style ={style}><div className="navButton">GAME</div></NavLink>
            <NavLink to="/cards/" style ={style}><div className="navButton">CARDS</div></NavLink>
            <NavLink to="/decks/" style ={style}><div className="navButton">DECKS</div></NavLink>
            <NavLink to="/dbuilder/" style ={style}><div className="navButton">DBUILDER</div></NavLink>
            <NavLink to="/about/" style ={style}><div className="navButton">ABOUT</div></NavLink>
               <div className="search">
               <input type="search"/><div className="navButton">SEARCH</div>
               </div>
            </nav>
        );
    }
}

export default Game;