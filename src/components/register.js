import React, { Component } from 'react';
import '../scss/reg-signin.scss';

class Register extends Component {
 
    render() {
        return (
            <main>
                <form>
                    <div>
                        <label><span>Username:</span><input type="text" size="16" placeholder="Username"></input></label>
                    </div>
                    <div>
                        <label><span>Email:</span><input type="text" size="16" placeholder="E-mail"></input></label>
                    </div>
                    <div>
                        <label><span>Re-Email:</span><input type="text" size="16" placeholder="Re-Email"></input></label>
                    </div>
                    <div>
                        <label><span>Password:</span><input type="password" size="16" placeholder="Password"></input></label>
                    </div>
                    <div>
                        <label><span>Re-Password:</span><input type="password" size="16" placeholder="Re-Password"></input></label>
                    </div>
                    <div>
                        <div className="registerButton">REGISTER</div>
                    </div>

                </form>
            </main>
        );
    }
}

export default Register;