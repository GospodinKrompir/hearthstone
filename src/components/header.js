import React, { Component } from 'react';
import '../scss/header.scss';
import logo from '../img/logo.png'

class Header extends Component {
    constructor(){
        super()
        this.state = {isLogged:false}
    }
    render() {
        const isLogged = this.state.isLogged
        return (
            <header>
                <div className="logo"><img src={logo} alt="logo"></img></div>
                <div className="banner"></div>
                {isLogged ?<div className="login"><div className="displayName"></div><div className="logout">LOGOUT</div></div> :<div className="login"> <div className="signin">SIGN IN</div>
                <div className="register">REGISTER</div></div>}
                
            </header>
        );
    }
}

export default Header;