import React, { Component } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

// import Setbtn from "./Setbtn";

export default class Setlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sets: [1],
      crtset: 1,
    };
  }

  addSet = () => {
    if (this.state.sets.length < 4) {
      this.setState({
        sets: this.state.sets.concat(this.state.sets.length + 1),
        crtset: this.state.crtset,
      });
      this.props.update(this.state.sets, this.state.crtset);
    } else {
      console.log(this.state.sets);
    }
  };

  getCrt = (index) => {
    this.setState({
      sets: this.state.sets,
      crtset: Number(index),
    });
    this.props.update(this.state.sets, index);
  };

  render() {
    if (this.props.crtSet !== this.state.crtset) {
      this.getCrt(this.props.crtSet);
    }
    return (
      <div className='setlist'>
        {this.state.sets.map((set) => {
          return (
            <button
              key={set}
              className={
                this.state.crtset === set ? "selected set-btn" : "set-btn"
              }
              value={set}
              onClick={(e) => this.getCrt(e.target.value)}
            >
              {set}
            </button>
          );
        })}
        <AiOutlinePlusCircle onClick={this.addSet} className='addBtn' />
      </div>
    );
  }
}
