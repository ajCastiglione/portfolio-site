import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.png";

export default class Header extends Component {
  componentDidMount() {
    let btn = document.querySelector("#contact-btn");
    btn.addEventListener("mouseenter", this.addHoverClass);
    btn.addEventListener("mouseleave", this.removeHoverClass);
  }
  componentWillUnmount() {
    document.querySelector("#contact-btn").removeEventListener("hover");
  }

  addHoverClass = () => {
    let btn = document.querySelector("#contact-btn");
    btn.classList.add("pulse");
    btn.classList.add("animated");
  };
  removeHoverClass = () => {
    let btn = document.querySelector("#contact-btn");
    btn.classList.remove("animated");
    btn.classList.remove("pulse");
  };

  render() {
    return (
      <header className="header">
        <div className="header-top large-container">
          <img src={logo} className="logo" alt="logo" />
          <div className="header-contact">
            <Link to="/contact" id="contact-btn">
              Get In Touch!
            </Link>
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
