import React, { Component } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBack2Fill } from "react-icons/ri";

export default class Setlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sets: [1],
      crtset: 1,
    };
  }

  updateSet = () => {};

  addSet = () => {
    if (this.state.sets.length < 4) {
      this.setState({
        sets: this.state.sets.concat(this.state.sets.length + 1),
        crtset: this.state.crtset,
      });
      this.props.update(this.state.sets, this.state.crtset);
    } else {
      console.log("Max Set is " + this.state.sets);
    }
  };

  getCrt = (index) => {
    this.setState({
      sets: this.state.sets,
      crtset: Number(index),
    });
    this.props.update(this.state.sets, index);
  };
  removeSet = () => {
    if (this.state.sets.length !== 1) {
      let tempSet = [1, 2, 3, 4],
        tempSets = [];
      if (this.state.sets.length === 4) {
        tempSets = tempSet.splice(0, 3);
      } else if (this.state.sets.length === 3) {
        tempSets = tempSet.splice(0, 2);
      } else if (this.state.sets.length === 2) {
        tempSets = tempSet.splice(0, 1);
      }
      this.setState({
        sets: tempSets,
        crtset: tempSets.length,
      });
    }
  };
  removeData = () => {
    if (this.state.sets.length !== 1) {
      if (this.props.val === "exp") {
        this.props.removeExp(this.state.sets.length);
      } else if (this.props.val === "edu") {
        this.props.removeEdu(this.state.sets.length);
      } else if (this.props.val === "skl") {
        this.props.removeSkill(this.state.sets.length);
      }
    }
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
        <RiDeleteBack2Fill
          className={
            this.state.sets.length === 1 ? "grayed dlt-btn" : "dlt-btn"
          }
          onClick={() => {
            this.removeSet();
            this.removeData();
          }}
        />
      </div>
    );
  }
}
