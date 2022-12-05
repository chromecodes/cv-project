import React, { Component } from "react";

export default class Controls extends Component {
  preview = {
    bio: {
      first: "chrome ",
      last: "ishigami",
      title: "Socessor Scientist",
      email: "chrome@senkumail.com",
      phone: "777999666",
      linkedin: "chrome.linkedin",
      github: "chrome.github ",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod placeat commodi ea sequi doloribus laboriosam! Nemo praesentium deleniti ut illo",
    },
    exp: [
      {
        set: 1,
        role: "Socessor",
        company: "Ishigami village",
        start: "2020",
        end: "2021",
        about:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod placeat commodi ea sequi doloribus laboriosam! Nemo praesentium deleniti ut illo",
      },
      {
        set: 2,
        role: "scientist ",
        company: "Kingdom of science",
        start: "2022",
        end: "present",
        about:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod placeat commodi ea sequi doloribus laboriosam! Nemo praesentium deleniti ut illo",
      },
      {
        set: 3,
        role: "Socessor",
        company: "Ishigami village",
        start: "2020",
        end: "2021",
        about:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod placeat commodi ea sequi doloribus laboriosam! Nemo praesentium deleniti ut illo",
      },
      {
        set: 4,
        role: "scientist ",
        company: "Kingdom of science",
        start: "2022",
        end: "present",
        about:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod placeat commodi ea sequi doloribus laboriosam! Nemo praesentium deleniti ut illo",
      },
    ],
    edu: [
      {
        set: 1,
        degree: "nothing ",
        school: "Ishigami village",
        start: "2012",
        end: "2014",
      },
      {
        set: 2,
        degree: "nothing ",
        school: "Ishigami village",
        start: "2010",
        end: "2012",
      },
      {
        set: 3,
        degree: "simply nothing",
        school: "Ishigami village",
        start: "2008",
        end: "2010",
      },
      {
        set: 4,
        degree: "simply nothing",
        school: "Ishigami village",
        start: "2008",
        end: "2010",
      },
    ],
    skill: [
      {
        set: 1,
        skills: ["ore", "metal", "chemical", "fighting"],
      },
      {
        set: 2,
        skills: ["sads", "aasdasd", "asdas"],
      },
      {
        set: 3,
        skills: ["sdasd", "dasdass"],
      },
    ],
  };

  render() {
    return (
      <div className='controls'>
        <button
          className='demo-btn'
          onClick={() => this.props.demo(this.preview)}
        >
          Preview
        </button>
        <button className='reset-btn' onClick={this.props.resetAll}>
          Reset
        </button>

        <button className='pdf-btn' onClick={this.props.print}>
          Generate PDF
        </button>
      </div>
    );
  }
}
