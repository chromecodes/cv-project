import React, { Component } from "react";
import "../style/page.css";

export default class Preview extends Component {
  aboutSec= ()=>{
    let sec = <div><div className="Heading">About</div><div className="line"></div><div className="About" >{this.props.data.bio.about} </div></div>
    if (this.props.data.bio.about){
      return sec
    }
  }
  skilSec= ()=>{
    if(this.props.data.skill[0]){
      console.log(this.props.data.skill[0].skills);
    }
  }

  // expSec=()=>{
  //   let exp = 
  // }

  render() {
    return (
      <>
        <div className='preview'>
          <div className='page'>
            <div className="work">
              <div className="detail">
                <div className="sec1">
                <div className="Name">{this.props.data.bio.first}  {this.props.data.bio.last}</div>
                <div className="Title" >{this.props.data.bio.title} </div>
                </div>
                <div className="sec2">
                <div><span className="icon1"></span><span>{this.props.data.bio.phone}</span></div>
                <div><span className="icon2"></span><span>{this.props.data.bio.email}</span></div>
                <div><span className="icon3"></span><span>{this.props.data.bio.linkedin}</span></div>
                <div><span className="icon4"></span><span>{this.props.data.bio.github}</span></div>
                </div>

              </div>
              
              {this.aboutSec()}
              <br/>
              <div> 
                <div className="Heading">Skills</div>
                <div className="line"></div>
                <div className="skills">
                    {this.skilSec()}

                  {/* {this.props.data.skill[0].skills[1]} */}
                  {/* {console.log(this.props.data.skill[0].skills[0])} */}
                </div>
              </div>
              
              
              <span className="breaker"></span>
              
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
