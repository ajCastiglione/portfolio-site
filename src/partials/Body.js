import React, { Component } from "react";

class Body extends Component {
  render() {
    const websites = (
      <React.Fragment>
        <div className="grid-3">
          <img
            src="https://minervawebdevelopment.com/wp-content/uploads/2018/09/vip.jpg"
            className="responsive-image"
            alt="Portfolio Website"
          />
          <div className="grid-name-link">
            <h2 className="grid-title">VIP Custom Vapors</h2>
            <a
              href="https://www.vipcustomvapors.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="grid-3">
          <img
            src="https://minervawebdevelopment.com/wp-content/uploads/2018/09/crtropical.jpg"
            className="responsive-image"
            alt="Portfolio Website"
          />
          <div className="grid-name-link">
            <h2 className="grid-title">CR Tropical</h2>
            <a
              href="https://crtropical.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="grid-3">
          <img
            src="https://minervawebdevelopment.com/wp-content/uploads/2018/09/icecream.jpg"
            className="responsive-image"
            alt="Portfolio Website"
          />
          <div className="grid-name-link">
            <h2 className="grid-title">Main Street Ice Cream</h2>
            <a
              href="https://mainstreeticecream.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="grid-3">
          <img
            src="https://minervawebdevelopment.com/wp-content/uploads/2018/07/wanderstarr.jpg"
            className="responsive-image"
            alt="Portfolio Website"
          />
          <div className="grid-name-link">
            <h2 className="grid-title">Wanderstarr</h2>
            <a
              href="https://wanderstarr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="grid-3">
          <img
            src="https://minervawebdevelopment.com/wp-content/uploads/2018/11/classiceventsbuffalo.jpg"
            className="responsive-image"
            alt="Portfolio Website"
          />
          <div className="grid-name-link">
            <h2 className="grid-title">Classic Events Buffalo</h2>
            <a
              href="https://classiceventsbuffalo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="grid-3">
          <img
            src="https://minervawebdevelopment.com/wp-content/uploads/2018/11/chrisnaugle.jpg"
            className="responsive-image"
            alt="Portfolio Website"
          />
          <div className="grid-name-link">
            <h2 className="grid-title">Chris Naugle</h2>
            <a
              href="https://chrisnaugle.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </React.Fragment>
    );

    const projects = (
      <React.Fragment>
        <div className="grid-3">
          <img
            src="https://minervawebdevelopment.com/wp-content/uploads/2018/10/js-typewriter.jpg"
            className="responsive-image"
            alt="JS Typewriter"
          />
          <div className="grid-name-link">
            <h2 className="grid-title">JS Typewriter Effect</h2>
            <a
              href="https://ajcastiglione.github.io/js-typewriter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="grid-3">
          <img
            src="https://minervawebdevelopment.com/wp-content/uploads/2018/10/password-generator.jpg"
            className="responsive-image"
            alt="Password Generator"
          />
          <div className="grid-name-link">
            <h2 className="grid-title">Password Generator</h2>
            <a
              href="https://ajcastiglione.github.io/password-generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </React.Fragment>
    );

    return (
      <main className="main clearfix">
        <section className="section-one intro">
          <div className="container">
            <h2>Hello, I'm AJ. Pleased to meet you.</h2>
            <p>
              I've been told my work is like no other when it comes to
              development. I ensure every detail is perfected, and that nothing
              slips through the cracks. I develop each website carefully to your
              liking, and the job isn't finished until you are completely
              satisfied with your new website.
            </p>
          </div>
        </section>
        <section className="section-two info-boxes">
          <div className="develop-box box-group">
            <i className="far fa-file-code" />
            <h2 className="info-box-title">Development</h2>
            <p>
              All of the websites I build are made from scratch or built on
              existing platforms based on 6 years of experience.
            </p>
            <h3 className="info-box-subtitle">
              Languages / Frameworks I know:
            </h3>
            <p>HTML, SCSS, PHP, NodeJS, React, JavaScript, WordPress</p>
          </div>
          <div className="market-box box-group">
            <i className="fab fa-google" />
            <h2 className="info-box-title">Ad Campaign</h2>
            <p>
              My years of experience aid me in running successful ad campaigns
              for satisfied clients.
            </p>
            <h3 className="info-box-subtitle">Google Ads Campaigns:</h3>
            <p>I manage the campaigns with ROI in mind.</p>
          </div>
          <div className="design-box box-group">
            <i className="far fa-object-ungroup" />
            <h2 className="info-box-title">Design</h2>
            <p>
              The art of responsive &amp; elegant design is a tricky yet
              rewarding aspect of this industry.
            </p>
            <h3 className="info-box-subtitle">Things I can design:</h3>
            <p>UX, UI, Websites, Web Apps, Admin Panels, Logos</p>
          </div>
        </section>
        <section className="section-three portfolio">
          <h1 className="portfolio-title">
            <span>Projects</span>
          </h1>
          <h3 className="portfolio-subtitle">
            Below you will find a couple JavaScript projects
          </h3>
          <article className="grid-container large-container">
            {projects}
          </article>
        </section>
        <section className="section-four portfolio">
          <h1 className="portfolio-title">
            <span>Portfolio</span>
          </h1>
          <h3 className="portfolio-subtitle">
            Below you will find a few websites I've developed
          </h3>
          <article className="grid-container large-container">
            {websites}
          </article>
        </section>
        <iframe name="invis" id="invis" title="invis" />
      </main>
    );
  }
}
export default Body;
