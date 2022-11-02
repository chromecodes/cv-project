import React, { Component } from 'react'

export default class Setbtn extends Component {


  getForm(e){
    console.log(e.target.value);
  }


  render() {
    return (
      <button className="setBtn" value={this.props.set} onClick={this.getForm}>{this.props.set}</button>
    )
  }
}
