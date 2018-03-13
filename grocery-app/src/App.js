import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from '../node_modules/react-router-dom';
import logo from './logo.svg';
// import styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Login from './login/login';
import Home from './home/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
      /* <div className="App container-fluid">
        <Login></Login>
      </div> */
    );
  }
}

export default App;
