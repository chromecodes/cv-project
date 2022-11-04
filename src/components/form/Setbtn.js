import React, { Component } from "react";

export default class Setbtn extends Component {
  constructor() {
    super();

    this.state = { selected: true };
  }

  selectSet = (e) => {
    this.props.get(e.target.value);
  };

  render() {
    return (
      <button
        className='set-btn'
        value={this.props.set}
        onClick={this.selectSet}
      >
        {this.props.set}
      </button>
    );
  }
}
