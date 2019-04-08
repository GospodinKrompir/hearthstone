import React, { Component } from 'react';
import '../scss/nav.scss';

class Nav extends Component {
    render() {
        return (
            <nav>
               <div className="navButton">GAME</div>
               <div className="navButton">CARDS</div>
               <div className="navButton">DECKS</div>
               <div className="navButton">DBUILDER</div>
               <div className="navButton">ABOUT</div>
               <div className="search">
               <input type="search"/><div className="navButton">SEARCH</div>
               </div>
            </nav>
        );
    }
}

export default Nav;