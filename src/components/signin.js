import React, { Component } from 'react';
import '../scss/reg-signin.scss';
import { getUserName } from './Api';

class SignIn extends Component {
    _isMounted = true;
    constructor(props) {
        super(props);
        this.state = { isLogged: false, isClicked: false, user: null };
        this.userRef = React.createRef()
        this.passRef = React.createRef()

    }
    resetClick() {
        this.setState({ isClicked: true })
    }
    logUser() {
        (async () => {
            let username = await getUserName(this.userRef.current.value);
            if (username[0] !== undefined && username[0].password === this.passRef.current.value) {
                this.setState({ isLogged: true })
                this.props.logCheck(true,username[0].username)
            }
        })();

        if (this.state.user === this.userRef.value) {
            console.log(this.userRef)
        }
    }


    render() {
        const isClicked = this.state.isClicked;
        return (
            <main>
                <form>
                    <div>
                        <label><span>Username:</span><input ref={this.userRef} type="text" size="16" placeholder="Username"></input></label>
                    </div>
                    <div>
                        <label><span>Password:</span><input ref={this.passRef} type="password" size="16" placeholder="Password"></input></label>
                    </div>
                    <div>
                        <div onClick={this.logUser.bind(this)} className="signinForm">SIGN IN</div>
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