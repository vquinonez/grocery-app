import React, { Component } from 'react';
import './button.css';

class ButtonElem extends Component {
  render() {
    return (
        <button className="btn btn-primary" onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}

export default ButtonElem;
