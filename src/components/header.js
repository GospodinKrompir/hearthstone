import React, { Component } from 'react';
import '../scss/header.scss';
import logo from '../img/logo.png'

class Header extends Component {
    constructor() {
        super()
        this.state = { isLogged: false }
    }
    onClick() {
        this.setState({ isLogged: !this.state.isLogged })
    }
    render() {
        const isLogged = this.state.isLogged
        return (
            <header>
                <div className="logo"><img src={logo} alt="logo"></img></div>
                <div className="banner"></div>
                {isLogged ? <div className="login"><div className="displayName">LALALALALALALA</div>
                    <div onClick={this.onClick.bind(this)} className="logout">LOGOUT</div></div> :
                    <div className="login"> <div onClick={this.onClick.bind(this)} className="signin">SIGN IN</div>
                        <div className="register">REGISTER</div>
                    </div>
                }
            </header>
        );
    }
}

export default Header;