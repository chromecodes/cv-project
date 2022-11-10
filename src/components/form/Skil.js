import React, { Component } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";

export default class Skil extends Component {
  constructor() {
    super();

    this.state = {
      count: [1, 2],
    };
  }
  addSkil = () => {
    if (this.state.count.length < 5) {
      let temp = this.state.count;
      temp = [...temp.concat(temp[temp.length - 1] + 1)];
      console.log(temp);

      this.setState(
        {
          count: [...temp],
        },
        console.log(this.state.count)
      );
    }
  };
  removeSkil = (index) => {
    console.log(index);
    if (index) {
      if (this.state.count.length > 2) {
        let temp = this.state.count;
        temp.splice(temp.indexOf(Number(index)), 1);
        this.setState(
          {
            count: temp,
          },
          console.log(this.state.count)
        );
      }
    }
  };

  render() {
    return (
      <div className='skils'>
        {this.state.count.map((cont) => {
          return (
            <div key={cont} className='flex '>
              <input type='text' placeholder='Skill' />
              <button
                className='dlt-btn'
                data-index={cont}
                onClick={(e) => {
                  e.preventDefault();
                  this.removeSkil(e.target.dataset.index);
                }}
              >
                x
                {/* x <FaRegTimesCircle className='dlt-btn' data-index={cont} /> */}
              </button>
            </div>
          );
        })}
        <AiOutlinePlusCircle onClick={this.addSkil} className='addBtn' />
      </div>
    );
  }
}
