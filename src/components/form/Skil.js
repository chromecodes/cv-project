import React, { Component } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdNavigateNext, MdHighlightOff } from "react-icons/md";

export default class Skil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: [1, 2],
    };
  }
  data = {
    set: this.props.set,
    skills: [],
  };

  addSkil = () => {
    if (this.state.count.length < 5) {
      let temp = this.state.count;
      temp = [...temp.concat(temp[temp.length - 1] + 1)];

      this.setState({
        count: [...temp],
      });
    }
  };
  removeSkil = (index) => {
    if (index) {
      if (this.state.count.length > 2) {
        let temp = this.state.count;
        let dump = temp.indexOf(Number(index));
        temp.splice(temp.indexOf(Number(index)), 1);
        this.setState({
          count: temp,
        });
        this.data.skills.splice(dump, 1);
      }
    }
  };
  updateSkil = (index, value) => {
    let tempIndex = this.state.count.indexOf(Number(index));
    this.data.skills[tempIndex] = value;
  };
  getInputs = () => {
    this.props.getData(this.data);
  };

  render() {
    return (
      <div className='spread'>
        <div className='skils'>
          {this.state.count.map((cont) => {
            return (
              <div key={cont} className='flex'>
                <input
                  className='skill-input'
                  type='text'
                  placeholder='Skill'
                  data-index={cont}
                  onChange={(e) =>
                    this.updateSkil(e.target.dataset.index, e.target.value)
                  }
                />
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
        <div className='nxtPs'>
          <MdNavigateNext
            className='nxt-btn'
            onClick={() => {
              this.getInputs();
              this.props.next();
            }}
          />
          {/* <MdHighlightOff  onClick={this.props.next} /> */}
        </div>
      </div>
    );
  }
}
