import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketches/sketch";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Logo className="logo" />
        </div>
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}

export default App;
