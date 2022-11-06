import React, { Component } from "react";
import Setlist from "./Setlist";
// import Setbtn from './Setbtn'
import Exp from "./Exp";
import Educ from "./Educ";

export default class Set extends Component {
  constructor() {
    super();

    this.state = {
      sets: [1],
      crtset: 1,
    };
  }

  updateSets = (x, y) => {
    this.setState({
      sets: x,
      crtset: Number(y),
    });
  };

  nextSet = () => {
    if (this.state.crtset === this.state.sets.length) {
      console.log(4);
      this.props.next();
    } else {
      switch (this.state.crtset) {
        case 1:
          this.updateSets(this.state.sets, 2);
          break;

        case 2:
          this.updateSets(this.state.sets, 3);
          break;

        case 3:
          this.updateSets(this.state.sets, 4);
          break;

        default:
          break;
      }
    }
  };

  // deleteSet = (index) => {
  //   if (this.state.crtset === this.state.sets.length) {
  //     console.log(4);
  //     this.props.next();
  //   } else {
  //     switch (index) {
  //       case 4:
  //         this.updateSets(this.state.sets, 3);
  //         break;

  //       case 3:
  //         this.updateSets(this.state.sets, 2);
  //         break;

  //       case 2:
  //         this.updateSets(this.state.sets, 1);
  //         break;

  //       default:
  //         break;
  //     }
  //   }
  // };

  addForm = (val) => {
    if (val === "exp") {
      let Addf = this.state.sets.map((set) => {
        return (
          <div
            className={this.state.crtset === set ? "active set" : "set"}
            key={set}
            set={set}
          >
            <Exp next={this.nextSet} />
          </div>
        );
      });
      return Addf;
    } else if (val === "edu") {
      let Addf = this.state.sets.map((set) => {
        return (
          <div
            className={this.state.crtset === set ? "active set" : "set"}
            key={set}
            set={set}
          >
            <Educ next={this.nextSet} />
          </div>
        );
      });
      return Addf;
    }
  };

  render() {
    return (
      <>
        <Setlist
          val={this.props.val}
          update={this.updateSets}
          crtSet={this.state.crtset}
        />
        {this.addForm(this.props.val)}
      </>
    );
  }
}
