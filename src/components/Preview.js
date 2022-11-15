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
    let sec = ''
    if(this.props.data.skill[0]){
      for(let i = 0; i < this.props.data.skill.length ; i++){
        // for(let j = 0; j < this.props.data.skill[i].skills; j++){
          let temp = this.props.data.skill[i].skills.join(', ')
          if( i !== 0){
            temp = ' | ' + temp 
          }
          sec = sec + temp 
        // }
      }
      let con = <div><div className="Heading">Skills</div><div className="line"></div><div className="skills">{sec}</div></div>
      return con
    }
  }

  expSec=()=>{
    let exp
    if(this.props.data.exp[0]){
    for(let i = 0; i< this.props.data.exp.length; i++){
      let temp = <div>
                    <div className="sub-sec">
                      <span>{this.props.data.exp[i].role} - {this.props.data.exp[i].company} </span>
                      <span>{this.props.data.exp[i].start} - {this.props.data.exp[i].end} </span>
                    </div>
                    <div>{this.props.data.exp[i].about}</div>
                  </div>
    //   if (i !== 0){
    //     exp = exp + temp;
    //   } else {
      console.log(temp);

    //   }
    //   exp =  temp;
    }

    // return exp
    }
  }

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
              {this.skilSec()}
              <br/>
              <div>
              <div className="experience">
                <div className="Heading">Experience</div>
                <div className="line"></div>
                <div>
                  {/* <div className="sub-sec">
                    <span>{this.props.data.exp[0].role} - {this.props.data.exp[0].company} </span>
                    <span>{this.props.data.exp[0].start} - {this.props.data.exp[0].end} </span>
                  </div>
                  <div>{this.props.data.exp[0].about}</div> */}
                  {this.expSec()}
                </div>
              </div>

              </div>

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
