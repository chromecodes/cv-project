import React, { Component } from "react";
import Container from "./components/Container";
import Preview from "./components/Preview";

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

  getBioData = (data) => {
    console.log(data);
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
    console.log(data);
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
    console.log(data);
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
    console.log(data);
    this.setState({
      masterData: {
        bio: this.state.masterData.bio,
        exp: this.state.masterData.exp,
        edu: this.state.masterData.edu,
        skill: data,
      },
    });
  };

  render() {
    return (
      <div className='app'>
        <Container
          getBioData={this.getBioData}
          getExpData={this.getExpData}
          getEduData={this.getEduData}
          getSkilData={this.getSkilData}
        />
        <Preview data={this.state.masterData} />
      </div>
    );
  }
}

export default App;
