import React, { Component } from "react";
import { MdNavigateNext } from "react-icons/md";

export class Bio extends Component {
  data = {};

  getInputs = () => {
    this.props.getData(this.data);
  };
  getFirst = (value) => {
    this.data.first = value;
  };
  getLast = (value) => {
    this.data.last = value;
  };
  getTitle = (value) => {
    this.data.title = value;
  };
  getEmail = (value) => {
    this.data.email = value;
  };
  getPhone = (value) => {
    this.data.phone = value;
  };
  getLinkedIn = (value) => {
    this.data.linkedin = value;
  };
  getGitHub = (value) => {
    this.data.github = value;
  };
  getAbout = (value) => {
    this.data.about = value;
  };

  clear = () => {
    const bio = document.querySelector(".bio");
    const clearInputs = bio.querySelectorAll("input");
    const clearTextarea = bio.querySelector("textarea");

    clearInputs.forEach((input) => {
      input.value = "";
    });
    clearTextarea.value = "";

    this.data = {};
  };
  render() {
    return (
      <div className='spread'>
        <div className='bio'>
          <div className='name'>
            <input
              type='text'
              placeholder='First Name'
              onChange={(e) => this.getFirst(e.target.value)}
            />
            <input
              type='text'
              placeholder='Last Name'
              onChange={(e) => this.getLast(e.target.value)}
            />
            <input
              type='text'
              placeholder='Title '
              onChange={(e) => this.getTitle(e.target.value)}
            />
          </div>
          <div className='contacts '>
            <input
              type='email'
              placeholder='Email'
              onChange={(e) => this.getEmail(e.target.value)}
            />
            <input
              type='phone'
              placeholder='Phone'
              onChange={(e) => this.getPhone(e.target.value)}
            />
          </div>
          <div className='links '>
            <input
              type='text'
              placeholder='LinkedIn'
              onChange={(e) => this.getLinkedIn(e.target.value)}
            />
            <input
              type='text'
              placeholder='GitHub'
              onChange={(e) => this.getGitHub(e.target.value)}
            />
          </div>
          <textarea
            className='about'
            placeholder='About yourself'
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
          <button onClick={this.clear} className='clear'>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Bio;
