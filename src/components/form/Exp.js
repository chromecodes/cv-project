import React, { Component } from "react";
import { MdNavigateNext, MdHighlightOff } from "react-icons/md";

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

        <div className='nxtPs'>
          <MdNavigateNext className='nxt-btn' onClick={this.props.next} />
          <MdHighlightOff className='dlt-btn' onClick={this.props.next} />
        </div>
      </>
    );
  }
}
