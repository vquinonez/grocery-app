import React, { Component } from 'react';
import { Redirect } from '../../node_modules/react-router-dom';

import './login.css';

import InputLabel from '../shared/input-label/input-label';
import ButtonElem from '../shared/button/button';

class Login extends Component {

    user = '';
    pass = '';

    constructor (props) {
        super(props);
        
        this.state = {
            user: '',
            pass: ''
        };
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-3 card">
                    <h1>Grocery App</h1>
                    <h3>Inciar Sesion</h3>
                    <InputLabel label="User:" onChange={this.getUser.bind(this)}/>
                    <InputLabel label="Password:" type="password" onChange={this.getPass.bind(this)}/>
                    <ButtonElem onClick={this.sendForm.bind(this)}>Entrar</ButtonElem>
                </div>
            </div>
        );
    }

    getUser(event) {
        this.setState({user: event.target.value });
    }
    
    getPass(event) {
        this.setState({pass: event.target.value });
    }

    sendForm() {
        if (this.state.user === 'ricardo' && this.state.pass === 'ricardo') {
            sessionStorage.setItem('user', {user: this.state.user, pass: this.state.pass}.toString());
            this.props.history.push('/home');
        }
    }
}

export default Login;
