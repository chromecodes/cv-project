import React, { Component } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export default class Skil extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <>
        <div className='flex'>
          <input type='text' placeholder='Skill' />
          <IoClose className='dlt-btn' />
        </div>
        <AiOutlinePlusCircle onClick={this.addSet} className='addBtn' />
      </>
    );
  }
}
