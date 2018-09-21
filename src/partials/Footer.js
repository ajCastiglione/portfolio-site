import React, { Component } from "react";
import Form from "./../components/Form";

class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="contact">
        <section className="top-footer">
          <article className="start-project">
            <div className="col-xs-12 col-sm-4">
              <h1>Start A Project</h1>
            </div>
            <div className="col-xs-12 col-sm-4">
              <p>
                Like what you see so far? Reach out to me so we can work
                together!
              </p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <a href="#contact" className="footer-btn">
                Lets Go!
              </a>
            </div>
          </article>
        </section>
        <section className="bottom-footer">
          <Form />
        </section>
      </footer>
    );
  }
}
export default Footer;
