import React, { Component } from "react";
import Container from "./components/Container";
import Preview from "./components/Preview";
import ReactToPrint from "react-to-print";

class App extends Component {
  constructor() {
    super();

    this.printRef = React.createRef();
    this.state = {
      masterData: {
        intro: 1,
        bio: [],
        exp: [],
        edu: [],
        skill: [],
      },
    };
  }

  removeLastExp = (leng) => {
    if (leng === this.state.masterData.exp.length) {
      let temp = this.state.masterData.exp;
      temp.pop();
      this.setState({
        masterData: {
          intro: this.state.masterData.intro,
          bio: this.state.masterData.bio,
          exp: temp,
          edu: this.state.masterData.edu,
          skill: this.state.masterData.skill,
        },
      });
    }
  };

  removeLastEdu = (leng) => {
    if (leng === this.state.masterData.edu.length) {
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
    }
  };

  removeLastSkill = (leng) => {
    if (leng === this.state.masterData.skill.length) {
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
    }
  };

  getBioData = (data) => {
    this.setState({
      masterData: {
        intro: 0,
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
        intro: 0,
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
        intro: 0,
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
        intro: 0,
        bio: this.state.masterData.bio,
        exp: this.state.masterData.exp,
        edu: this.state.masterData.edu,
        skill: data,
      },
    });
  };

  getPrint = () => {
    this.printRef.current.click();
  };

  resetAll = () => {
    this.setState({
      masterData: {
        intro: 1,
        bio: [],
        exp: [],
        edu: [],
        skill: [],
      },
    });
  };

  demoMode = (data) => {
    this.setState({
      masterData: data,
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
          removeExp={this.removeLastExp}
          removeEdu={this.removeLastEdu}
          removeSkill={this.removeLastSkill}
          print={this.getPrint}
          resetAll={this.resetAll}
          demo={this.demoMode}
        />
        <ReactToPrint
          trigger={() => {
            return <div ref={this.printRef} style={{ display: "none" }}></div>;
          }}
          content={() => this.componentRef}
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
