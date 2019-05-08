import React, { Component } from 'react';
import '../scss/reg-signin.scss';
import { postUser } from './Api';

class Register extends Component {
    constructor(){
        super();
        this.userRef = React.createRef();
        this.passRef = React.createRef();
        this.repassRef = React.createRef();
        this.emailRef = React.createRef();
        this.reemailRef = React.createRef();
    }
    
    registerUser(){
        if(this.passRef.current.value === this.repassRef.current.value && this.emailRef.current.value === this.reemailRef.current.value){
            
                let user={email:this.emailRef.current.value, username:this.userRef.current.value, password: this.passRef.current.value}
                postUser(user);
            
        }
    }
    render() {
        return (
            <main>
                <form>
                    <div>
                        <label><span>Username:</span><input ref={this.userRef} type="text" size="16" placeholder="Username"></input></label>
                    </div>
                    <div>
                        <label><span>Email:</span><input ref={this.emailRef} type="text" size="16" placeholder="E-mail"></input></label>
                    </div>
                    <div>
                        <label><span>Re-Email:</span><input ref={this.reemailRef} type="text" size="16" placeholder="Re-Email"></input></label>
                    </div>
                    <div>
                        <label><span>Password:</span><input ref={this.passRef} type="password" size="16" placeholder="Password"></input></label>
                    </div>
                    <div>
                        <label><span>Re-Password:</span><input ref={this.repassRef} type="password" size="16" placeholder="Re-Password"></input></label>
                    </div>
                    <div>
                        <div onClick={this.registerUser.bind(this)} className="registerButton">REGISTER</div>
                    </div>

                </form>
            </main>
        );
    }
}

export default Register;