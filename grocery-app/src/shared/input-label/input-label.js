import React, { Component } from 'react';
import './input-label.css';

class InputLabel extends Component {
  render() {
    return (
        <div className="form-group">
            <label>{this.props.label}</label>
            <input type={this.props.type} className="form-control" onChange={this.props.onChange}></input>
        </div>
    );
  }
}

export default InputLabel;
