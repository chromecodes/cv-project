import React, { Component } from "react";
import { MdNavigateNext } from "react-icons/md";

export default class Exp extends Component {
  data = {
    set: this.props.set,
    data: {
      role: "",
      company: "",
      start: "",
      end: "",
      about: "",
    },
  };
  getInputs = () => {
    this.props.getData(this.data);
  };
  getRole = (value) => {
    this.data.email = value;
  };
  getCompany = (value) => {
    this.data.phone = value;
  };
  getStart = (value) => {
    this.data.linkedin = value;
  };
  getEnd = (value) => {
    this.data.github = value;
  };
  getAbout = (value) => {
    this.data.about = value;
  };
  render() {
    return (
      <>
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
      </>
    );
  }
}
