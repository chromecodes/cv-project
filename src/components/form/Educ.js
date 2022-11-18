import React, { Component } from "react";
import { MdNavigateNext, MdHighlightOff } from "react-icons/md";

export class Educ extends Component {
  data = {
    set: this.props.set,
  };
  getInputs = () => {
    this.props.getData(this.data);
  };
  getDegree = (value) => {
    this.data.degree = value;
  };
  getSchool = (value) => {
    this.data.school = value;
  };
  getStart = (value) => {
    this.data.start = value;
  };
  getEnd = (value) => {
    this.data.end = value;
  };

  render() {
    return (
      <div className='spread'>
        <div className='edu'>
          <input
            type='text'
            placeholder='Degree/Field'
            onChange={(e) => this.getDegree(e.target.value)}
          />
          <input
            type='text'
            placeholder='University/School '
            onChange={(e) => this.getSchool(e.target.value)}
          />
          <input
            type='text'
            placeholder='Start Date'
            onChange={(e) => this.getStart(e.target.value)}
          />
          <input
            type='text'
            placeholder='End Date '
            onChange={(e) => this.getEnd(e.target.value)}
          />
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

export default Educ;
