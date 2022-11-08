import React, { Component } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export default class Skil extends Component {
  constructor() {
    super();

    this.state = {
      count: [1],
    };
  }
  addSkil = () => {
    if (this.state.count.length < 5) {
      this.setState({
        count: [...this.state.count.concat(this.state.count.length + 1)],
      });
    }
  };
  removeSkil = () => {
    if (this.state.count.length < 5) {
      this.setState({
        count: [...this.state.count.concat(this.state.count.length + 1)],
      });
    }
  };

  render() {
    return (
      <>
        {this.state.count.map((cont) => {
          return (
            <div key={cont} className='flex'>
              <input type='text' placeholder='Skill' />
              <IoClose className='dlt-btn' />
            </div>
          );
        })}
        <AiOutlinePlusCircle onClick={this.addSkil} className='addBtn' />
      </>
    );
  }
}
