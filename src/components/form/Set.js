import React, { Component } from "react";
import Setlist from "./Setlist";
import Skil from "./Skil";
import Exp from "./Exp";
import Educ from "./Educ";

export default class Set extends Component {
  constructor(props) {
    super(props);

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

  data = { exp: [], edu: [], skill: [] };

  sortData = (datum) => {
    for (let i = 1; i < 5; i++) {
      if (datum.set === i) {
        if (datum.role) {
          this.data.exp[i - 1] = datum;
        }
        if (datum.degree) {
          this.data.edu[i - 1] = datum;
        }
        if (datum.skills) {
          this.data.skill[i - 1] = datum;
        }
      }
    }
    if (datum.role) {
      this.props.getExpData(this.data.exp);
    } else if (datum.degree) {
      this.props.getEduData(this.data.edu);
    } else if (datum.skills) {
      this.props.getSkilData(this.data.skill);
    }
  };

  addForm = (val) => {
    if (val === "exp") {
      let Addf = this.state.sets.map((set) => {
        return (
          <div
            className={this.state.crtset === set ? "active set" : "set"}
            key={set}
            set={set}
          >
            <Exp next={this.nextSet} getData={this.sortData} set={set} />
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
            <Educ next={this.nextSet} getData={this.sortData} set={set} />
          </div>
        );
      });
      return Addf;
    } else if (val === "skl") {
      let Addf = this.state.sets.map((set) => {
        return (
          <div
            className={this.state.crtset === set ? "active set" : "set"}
            key={set}
            set={set}
          >
            <Skil next={this.nextSet} getData={this.sortData} set={set} />
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
          removeExp={this.props.removeExp}
          removeEdu={this.props.removeEdu}
          removeSkill={this.props.removeSkill}
        />
        {this.addForm(this.props.val)}
      </>
    );
  }
}
