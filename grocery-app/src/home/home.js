import React, { Component } from 'react';
import { Redirect } from '../../node_modules/react-router-dom';
import './home.css';


class Home extends Component {

    constructor (props) {
        super(props);
        
    }

    componentWillMount() {
        if (!sessionStorage.getItem('user')) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-3 card">
                    <h1>Hola</h1>
                </div>
            </div>
        );
    }
}

export default Home;
