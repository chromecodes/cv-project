import React, { Component } from "react";
import { MdNavigateNext, MdHighlightOff } from "react-icons/md";

export class Educ extends Component {
  render() {
    return (
      <>
        <div className='edu'>
          <input type='text' placeholder='Degree/Field' />
          <input type='text' placeholder='University/School ' />
          <input type='text' placeholder='Start Date' />
          <input type='text' placeholder='End Date ' />
        </div>
        <div className='nxtPs'>
          <MdNavigateNext className='nxt-btn' onClick={this.props.next} />
          {/* <MdHighlightOff  onClick={this.props.next} /> */}
        </div>
      </>
    );
  }
}

export default Educ;
