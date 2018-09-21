import React, { Component } from "react";
import "./App.css";

import Header from "./partials/Header";
import Body from "./partials/Body";
import Footer from "./partials/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
