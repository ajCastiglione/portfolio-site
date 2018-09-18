import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.png";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-top large-container">
          <img src={logo} className="logo" alt="logo" />
          <div className="header-contact">
            <Link to="/contact">Get In Touch!</Link>
          </div>
        </div>
        <div className="header-content">
          <h2 className="header-subtitle">
            Frontend Developer, Entrepreneur &amp; Enthusiast
          </h2>
          <p className="header-subcontent">
            Building stunning websites is not only my job,
            <em> but my passion</em>
          </p>
        </div>
      </header>
    );
  }
}
