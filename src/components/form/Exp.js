import React, { Component } from "react";
import { MdNavigateNext } from "react-icons/md";

export default class Exp extends Component {
  data = {
    set: this.props.set,
  };
  getInputs = () => {
    this.props.getData(this.data);
  };
  getRole = (value) => {
    this.data.role = value;
  };
  getCompany = (value) => {
    this.data.company = value;
  };
  getStart = (value) => {
    this.data.start = value;
  };
  getEnd = (value) => {
    this.data.end = value;
  };
  getAbout = (value) => {
    this.data.about = value;
  };
  render() {
    return (
      <div className='spread'>
        <div className='exp'>
          <input
            type='text'
            placeholder='Role'
            onChange={(e) => this.getRole(e.target.value)}
          />
          <input
            type='text'
            placeholder='Company Name '
            onChange={(e) => this.getCompany(e.target.value)}
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

          <textarea
            className='about'
            placeholder='Description (if required)'
            maxLength='150'
            onChange={(e) => this.getAbout(e.target.value)}
          ></textarea>
        </div>

        <div className='nxtPs'>
          <MdNavigateNext
            className='nxt-btn'
            onClick={() => {
              this.getInputs();
              this.props.next();
            }}
          />
        </div>
      </div>
    );
  }
}
