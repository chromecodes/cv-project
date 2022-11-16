import React, { Component } from "react";
import Controls from "./Controls";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";

export default class Container extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Form
          getBioData={this.props.getBioData}
          getExpData={this.props.getExpData}
          getEduData={this.props.getEduData}
          getSkilData={this.props.getSkilData}
          removeExp={this.props.removeExp}
          removeEdu={this.props.removeEdu}
          removeSkill={this.props.removeSkill}
        />
        <Controls />
        <Footer />
      </div>
    );
  }
}
