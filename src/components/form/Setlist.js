import React, { Component } from "react";
import Setbtn from "./Setbtn";

export default class Setlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sets: [1],
    };
  }

  addSet = () => {
    if (this.state.sets.length < 4) {
      this.setState({
        sets: this.state.sets.concat(this.state.sets.length + 1),
      });
    } else {
      console.log(this.state.sets);
    }
  };
  getCrt = (index) => {
    this.props.update(this.state.sets, index);
  };
  render() {
    return (
      <div className='setlist'>
        {this.state.sets.map((set) => {
          return <Setbtn key={set} set={set} get={this.getCrt} />;
        })}
        <button className='addBtn' onClick={this.addSet}>
          +
        </button>
      </div>
    );
  }
}
