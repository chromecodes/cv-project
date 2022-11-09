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
  removeSkil = (index) => {
    console.log(index);

    if (index) {
      console.log(index);
      let temp = this.state.count;
      console.log(temp);
      console.log(temp.indexOf(index));
      // temp.splice(temp.indexOf(index), 1);
      // this.setState(
      //   {
      //     count: temp,
      //   },
      //   console.log(this.state.count)
      // );
    }
  };

  render() {
    return (
      <>
        {this.state.count.map((cont) => {
          return (
            <div key={cont} className='flex'>
              <input type='text' placeholder='Skill' />
              <span
                index={cont}
                onClick={(e) => {
                  e.preventDefault();
                  this.removeSkil(e.target);
                }}
              >
                <IoClose className='dlt-btn' />{" "}
              </span>
            </div>
          );
        })}
        <AiOutlinePlusCircle onClick={this.addSkil} className='addBtn' />
      </>
    );
  }
}
