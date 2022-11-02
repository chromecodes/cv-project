import React, { Component } from "react";

export default class Exp extends Component {
  render() {
    return (
      <div className='exp'>
        <div className='company'>
          <input type='text' placeholder='Role' />
          <input type='text' placeholder='Company Name ' />
        </div>
        <div className='date'>
          <input type='text' placeholder='Start Date' />
          <input type='text' placeholder='End Date ' />
        </div>
        <button className='nxt btn'> Next </button>
      </div>
    );
  }
}
