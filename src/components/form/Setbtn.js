import React, { Component } from 'react'

export default class Setbtn extends Component {

  render() {
    return (
      <button className="setBtn" value={this.props.set} onClick={(e)=>this.props.get(e.target.value)}>{this.props.set}</button>
    )
  }
}
