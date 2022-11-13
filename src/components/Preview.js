import React, { Component } from "react";
import "../style/page.css";

export default class Preview extends Component {
  render() {
    return (
      <>
        <div className='preview'>
          <div className='page'>
            <div className="work">
              <div className="detail">
                <div className="sec1">
                <span className="name">{this.props.data.bio.first}  {this.props.data.bio.last}</span>
                <br />
                <span>{this.props.data.bio.title} </span>
                <br />
                <span>{this.props.data.bio.about} </span>
                </div>
                <div className="sec2">
                <span>{this.props.data.bio.phone} </span>
                <br />
                <span>{this.props.data.bio.email} </span>
                <br />
                <span>{this.props.data.bio.linkedin} </span>
                <br />
                <span>{this.props.data.bio.github} </span>
                </div>
                

              </div>
              <span className="breaker"></span>
              <div className="skills">    </div>
              <span className="breaker"></span>

              <div className="experience"></div>
              <span className="breaker"></span>

              <div className="education"></div>
            </div>
          </div>
          {console.log(this.props.data)}
        </div>
      </>
    );
  }
}
