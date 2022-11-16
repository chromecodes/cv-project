import React, { Component } from "react";
import Bio from "./form/Bio";
import Set from "./form/Set";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  call = (index) => {
    this.setState({ count: index });
  };

  nextTab = () => {
    switch (this.state.count) {
      case 1:
        this.call(2);
        break;

      case 2:
        this.call(3);
        break;

      case 3:
        this.call(4);
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className='main'>
        <div className='tablist'>
          <div
            className={this.state.count === 1 ? "blue tabs" : "tabs"}
            onClick={() => this.call(1)}
          >
            Bio
          </div>
          <div
            className={this.state.count === 2 ? "blue tabs" : "tabs"}
            onClick={() => this.call(2)}
          >
            Experience
          </div>
          <div
            className={this.state.count === 3 ? "blue tabs" : "tabs"}
            onClick={() => this.call(3)}
          >
            Education
          </div>
          <div
            className={this.state.count === 4 ? "blue tabs" : "tabs"}
            onClick={() => this.call(4)}
          >
            Skills
          </div>
        </div>
        <div className={this.state.count === 1 ? "active tab" : "tab"}>
          <Bio next={this.nextTab} getData={this.props.getBioData} />
        </div>
        <div className={this.state.count === 2 ? "active tab" : "tab"}>
          <Set
            val='exp'
            next={this.nextTab}
            getExpData={this.props.getExpData}
            removeExp={this.props.removeExp}
          />
        </div>
        <div className={this.state.count === 3 ? "active tab" : "tab"}>
          <Set
            val='edu'
            next={this.nextTab}
            getEduData={this.props.getEduData}
            removeEdu={this.props.removeEdu}
          />
        </div>
        <div className={this.state.count === 4 ? "active tab" : "tab"}>
          <div className=''>
            Skill Catagories
            <Set
              val='skl'
              next={this.nextTab}
              getSkilData={this.props.getSkilData}
              removeSkill={this.props.removeSkill}
            />
          </div>
        </div>
      </div>
    );
  }
}
