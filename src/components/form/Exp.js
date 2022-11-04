import React, { Component } from "react";

export default class Exp extends Component {
  render() {
    return (
      <>
        <div className='exp'>
          <input type='text' placeholder='Role' />
          <input type='text' placeholder='Company Name ' />

          <input type='text' placeholder='Start Date' />
          <input type='text' placeholder='End Date ' />

          <textarea
            className='about'
            placeholder='Description (if required)'
            maxLength='150'
          ></textarea>
        </div>

        <button className='nxt btn'> Next </button>
      </>
    );
  }
}
