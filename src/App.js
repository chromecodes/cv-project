import React, { Component } from "react";
import Container from "./components/Container";
import Preview from "./components/Preview";
import Print from "./components/Print";

class App extends Component {
  constructor() {
    super();

    this.state = {
      masterData: {
        bio: 1,
        exp: [],
        edu: [],
        skill: [],
      },
    };
  }

  removeLastExp = () => {
    let temp = this.state.masterData.exp;
    temp.pop();
    this.setState({
      masterData: {
        bio: this.state.masterData.bio,
        exp: temp,
        edu: this.state.masterData.edu,
        skill: this.state.masterData.skill,
      },
    });
  };

  removeLastEdu = () => {
    let temp = this.state.masterData.edu;
    temp.pop();
    this.setState({
      masterData: {
        bio: this.state.masterData.bio,
        exp: this.state.masterData.exp,
        edu: temp,
        skill: this.state.masterData.skill,
      },
    });
  };

  removeLastSkill = () => {
    let temp = this.state.masterData.skill;
    temp.pop();
    this.setState({
      masterData: {
        bio: this.state.masterData.bio,
        exp: this.state.masterData.exp,
        edu: this.state.masterData.edu,
        skill: temp,
      },
    });
  };
  getBioData = (data) => {
    this.setState({
      masterData: {
        bio: data,
        exp: this.state.masterData.exp,
        edu: this.state.masterData.edu,
        skill: this.state.masterData.skill,
      },
    });
  };
  getExpData = (data) => {
    this.setState({
      masterData: {
        bio: this.state.masterData.bio,
        exp: data,
        edu: this.state.masterData.edu,
        skill: this.state.masterData.skill,
      },
    });
  };
  getEduData = (data) => {
    this.setState({
      masterData: {
        bio: this.state.masterData.bio,
        exp: this.state.masterData.exp,
        edu: data,
        skill: this.state.masterData.skill,
      },
    });
  };
  getSkilData = (data) => {
    this.setState({
      masterData: {
        bio: this.state.masterData.bio,
        exp: this.state.masterData.exp,
        edu: this.state.masterData.edu,
        skill: data,
      },
    });
  };

  // callPreview = () => {
  //   if (this.state.masterData.bio.first) {
  //     return this.state.masterData;
  //   } else {
  //     return "hello";
  //   }
  // };

  render() {
    return (
      <div className='app'>
        <Container
          getBioData={this.getBioData}
          getExpData={this.getExpData}
          getEduData={this.getEduData}
          getSkilData={this.getSkilData}
          removeExp={this.removeLastExp}
          removeEdu={this.removeLastEdu}
          removeSkill={this.removeLastSkill}
          data={this.state.masterData}
        />
        <Preview
          data={this.state.masterData}
          ref={(el) => (this.componentRef = el)}
        />
      </div>
    );
  }
}

export default App;
