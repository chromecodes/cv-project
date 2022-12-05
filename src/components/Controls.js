import React, { Component } from "react";

export default class Controls extends Component {
  preview = {
    intro: 0,
    bio: {
      first: "Chrome ",
      title: "Software Developer",
      email: "chrome@senkumail.com",
      linkedin: "chrome@linkedIn.com",
      phone: "100000000",
      github: "chrome@github.com",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra",
    },
    exp: [
      {
        set: 1,
        role: "Senior Web Developer",
        company: "Google LLC, Mountain View",
        start: "2020",
        end: "present",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra",
      },
      {
        set: 2,
        role: "Web Developer",
        company: "Google LLC, Mountain View",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra",
        end: "2020 ",
        start: "2017",
      },
      {
        set: 3,
        role: "Junior Web Developer",
        company: "Microsoft inc",
        start: "2014",
        end: "2017",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra",
      },
      {
        set: 4,
        role: "Role",
        start: "Start",
        end: "End",
        company: "Company",
        about: "Description",
      },
    ],
    edu: [
      {
        set: 1,
        degree: "Master's",
        school: "University of Tokyo",
        start: "2014",
        end: "2016",
      },
      {
        set: 2,
        degree: "Bachelor's",
        school: "University of Tokyo",
        end: "2014",
        start: "2010",
      },
    ],
    skill: [
      {
        set: 1,
        skills: ["HTML", "CSS", "JavaScript"],
      },
      {
        set: 2,
        skills: ["Bootstrap", "React", "Anugular"],
      },
      {
        set: 3,
        skills: ["GIT", "GitHub"],
      },
      {
        set: 4,
        skills: ["Linux"],
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
