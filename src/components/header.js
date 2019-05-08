import React, { Component } from 'react';
import '../scss/header.scss';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom'

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
                <div className="logo"><Link style={{ textDecoration: 'none', color: 'white' }} to="/"><img src={logo} alt="logo"></img></Link></div>
                <div className="banner"></div>
                {isLogged ? <div className="login"><div className="displayName">LALALALALALALA</div>
                    <div onClick={this.onClick.bind(this)} className="logout">LOGOUT</div></div> :
                    <div className="login"><Link style={{ textDecoration: 'none', color: 'white' }} to="/signin/"> <div className="signin">SIGN IN</div></Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/register/"><div className="register">REGISTER</div></Link>
                    </div>
                }
            </header>
        );
    }
}

export default Header;