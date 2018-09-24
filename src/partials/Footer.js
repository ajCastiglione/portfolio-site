import React, { Component } from "react";
import Form from "./../components/Form";

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="footer" id="contact">
        <section className="footer-container">
          <h1 className="footer-title">
            <span>Contact</span>
          </h1>
          <p>Have a question or want to work together?</p>
          <Form />
        </section>
        <section className="social-media-container">
          <article className="social-media">
            <a
              href="https://www.linkedin.com/in/antonio-castiglione/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/ajCastiglione"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://codepen.io/aj-castiglione/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen" />
            </a>
            <a
              href="mailto:info@minervawebdevelopment.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-envelope" />
            </a>
          </article>
          <h3 className="copyright">Antonio Castiglione &copy; {year}</h3>
        </section>
      </footer>
    );
  }
}
export default Footer;
