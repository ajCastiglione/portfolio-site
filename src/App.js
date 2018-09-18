import React, { Component } from "react";
import "./App.css";

import Header from "./partials/Header";
import Body from "./partials/Body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
