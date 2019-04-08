import React, { Component } from 'react';
import '../scss/signin.scss';

class SignIn extends Component {
    render() {
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
                    <div>Forgot your password? *RESET* </div>
                    <div>You don't have account? *REGISTER*</div>
                </form>
            </main>
        );
    }
}

export default SignIn;