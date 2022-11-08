import React, { Component } from "react";
import Container from "./components/Container";
import Preview from "./components/Preview";

class App extends Component {
  getData = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className='app'>
        <Container getData={this.getData} />
        <Preview />
      </div>
    );
  }
}

export default App;
