import React, { Component } from "react";
import "../style/page.css";
import Intro from "./form/Intro";

export default class Preview extends Component {
  bioSec = () => {
    if (this.props.data.bio.first) {
      let sec = (
        <div className='detail'>
          <div className='sec1'>
            <div className='Name'>
              {this.props.data.bio.first} {this.props.data.bio.last}
            </div>
            <div className='Title'>{this.props.data.bio.title} </div>
          </div>
          <div className='sec2'>
            <div>
              <span className='icon1'></span>
              <span>{this.props.data.bio.phone}</span>
            </div>
            <div>
              <span className='icon2'></span>
              <div>{this.props.data.bio.email}</div>
            </div>
            <div>
              <span className='icon3'></span>
              <span>{this.props.data.bio.linkedin}</span>
            </div>
            <div>
              <span className='icon4'></span>
              <span>{this.props.data.bio.github}</span>
            </div>
          </div>
        </div>
      );
      return sec;
    }
  };

  aboutSec = () => {
    if (this.props.data.bio.about) {
      let sec = (
        <div>
          <div className='Heading'>About</div>
          <div className='line'></div>
          <div className='sub-about'>{this.props.data.bio.about} </div>
        </div>
      );
      return sec;
    }
  };
  skilSec = () => {
    let sec = "";
    if (this.props.data.skill[0]) {
      console.log(this.props.data.skill);
      for (let i = 0; i < this.props.data.skill.length; i++) {
        let temp = this.props.data.skill[i].skills.join(", ");
        if (i !== 0) {
          temp = " | " + temp;
        }
        sec = sec + temp;
      }
      let con = (
        <div>
          <div className='Heading'>Skills</div>
          <div className='line'></div>
          <div className='sub-about'>{sec}</div>
        </div>
      );
      return con;
    }
  };

  expSec = () => {
    let exp = [];
    if (this.props.data.exp[0]) {
      for (let i = 0; i < this.props.data.exp.length; i++) {
        let temp = (
          <div key={this.props.data.exp[i].set}>
            <div className='sub-sec'>
              <span className='sub-name'>
                {this.props.data.exp[i].role} - {this.props.data.exp[i].company}{" "}
              </span>
              <span className='date'>
                {this.props.data.exp[i].start} - {this.props.data.exp[i].end}{" "}
              </span>
            </div>
            <div className='sub-about'>{this.props.data.exp[i].about}</div>
          </div>
        );
        exp[i] = temp;
      }
      let cont = (
        <div>
          <div className='experience'>
            <div className='Heading'>Experience</div>
            <div className='line'></div>
            <div>{exp}</div>
          </div>
        </div>
      );
      return cont;
    }
  };
  eduSec = () => {
    let edu = [];
    if (this.props.data.edu[0]) {
      for (let i = 0; i < this.props.data.edu.length; i++) {
        let temp = (
          <div key={this.props.data.edu[i].set}>
            <div className='sub-sec'>
              <span className='sub-name'>
                {this.props.data.edu[i].degree} -{" "}
                {this.props.data.edu[i].school}{" "}
              </span>
              <span className='date'>
                {this.props.data.edu[i].start} - {this.props.data.edu[i].end}{" "}
              </span>
            </div>
          </div>
        );
        edu[i] = temp;
      }
      let cont = (
        <div>
          <div className='education'>
            <div className='Heading'>Education</div>
            <div className='line'></div>
            <div>{edu}</div>
          </div>
        </div>
      );

      return cont;
    }
  };

  printData = () => {
    if (this.props.data.intro === 1) {
      console.log(this.props.data);
      return <Intro />;
    } else {
      return this.bioSec();
    }
  };

  render() {
    return (
      <>
        <div className='preview'>
          <div className='page'>
            <div className='work'>
              {this.printData()}
              {this.aboutSec()}
              {this.skilSec()}
              {this.expSec()}
              {this.eduSec()}
            </div>
          </div>
        </div>
      </>
    );
  }
}
