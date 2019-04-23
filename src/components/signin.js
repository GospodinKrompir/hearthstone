import React, { Component } from 'react';
import '../scss/reg-signin.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = { isClicked: false }
    }
    resetClick() {
        this.setState({ isClicked: true })
    }
    render() {
        const isClicked = this.state.isClicked;
        return (
            <main>
                <form>
                    <div>
                        <label><span>Username:</span><input type="text" size="16" placeholder="Username"></input></label>
                    </div>
                    <div>
                        <label><span>Password:</span><input type="password" size="16" placeholder="Password"></input></label>
                    </div>
                    <div>
                        <div className="signinForm">SIGN IN</div>
                    </div>
                    <div>You don't have account? *REGISTER*</div>
                    <div onClick={this.resetClick.bind(this)}>Forgot your password? *RESET* </div>
                    {isClicked ?
                        <React.Fragment>
                            <div>
                                <label><span>Email:</span><input type="text" size="16" placeholder="Email"></input></label>
                            </div>
                            <div>
                                <label><span>Password:</span><input type="password" size="16" placeholder="Password"></input></label>
                            </div>
                            <div>
                                <label><span>Re-Password:</span><input type="password" size="16" placeholder="Re-Password"></input></label>
                            </div>
                            <div>
                                <div className="resetPass">RESET</div>
                            </div>
                        </React.Fragment>
                        : <div></div>
                    }
                </form>
            </main>
        );
    }
}

export default SignIn;