import React, { Component } from "react";

import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";

export default class Container extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Form getData={this.props.getData} />
        <Footer />
      </div>
    );
  }
}
