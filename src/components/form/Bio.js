import React, { Component } from "react";
import { MdNavigateNext } from "react-icons/md";

export class Bio extends Component {
  render() {
    return (
      <div className='bio'>
        <div className='name'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='text' placeholder='Title ' />
        </div>
        <div className='contacts '>
          <input type='email' placeholder='Email' />
          <input type='phone' placeholder='Phone' />
        </div>
        <div className='links '>
          <input type='text' placeholder='LinkedIn' />
          <input type='text' placeholder='GitHub' />
        </div>
        <textarea
          className='about'
          placeholder='About yourself'
          maxLength='150'
        ></textarea>
        <div className='nxtPs'>
          <MdNavigateNext className='nxt-btn' onClick={this.props.next} />
        </div>
      </div>
    );
  }
}

export default Bio;
