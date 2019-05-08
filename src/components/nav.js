import React, { Component } from 'react';
import '../scss/nav.scss';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    render() {
        let style={ textDecoration: 'none', color: 'white' }
        return (
            <nav>
            <NavLink to="/game/" style ={style}><div className="navButton">GAME</div></NavLink>
            <NavLink to="/classes/" style ={style}><div className="navButton">CLASSES</div></NavLink>
            <NavLink to="/sets/" style ={style}><div className="navButton">SETS</div></NavLink>
            <NavLink to="/dbuilder/" style ={style}><div className="navButton">DBUILDER</div></NavLink>
            <NavLink to="/about/" style ={style}><div className="navButton">ABOUT</div></NavLink>
            </nav>
        );
    }
}

export default Nav;