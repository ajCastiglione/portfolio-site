import React, { Component } from "react";

export default class Form extends Component {
  state = {
    contact_name: "",
    contact_email: "",
    phone: "",
    message: "",
    to: "antonio@minervawebdevelopment.com",
    warning: false,
    success: false
  };

  componentDidMount() {
    let btn = document.querySelector("#submit");
    btn.addEventListener("mouseenter", this.addHoverClass);
    btn.addEventListener("mouseleave", this.removeHoverClass);
  }
  componentWillUnmount() {
    document.querySelector("#submit").removeEventListener("hover");
  }

  addHoverClass = () => {
    let btn = document.querySelector("#submit");
    btn.classList.add("animated");
    btn.classList.add("tada");
  };
  removeHoverClass = () => {
    let btn = document.querySelector("#submit");
    btn.classList.remove("animated");
    btn.classList.remove("tada");
  };

  handleChange = e => {
    let { value } = e.target;
    this.setState({ [e.target.name]: value, warning: false, success: false });
  };

  handleSubmit = e => {
    let { contact_name, contact_email, phone, message } = this.state;
    if (
      contact_email === "" ||
      contact_name === "" ||
      phone === "" ||
      message === ""
    ) {
      this.setState({ warning: true });
      return e.preventDefault();
    } else {
      setTimeout(() => {
        this.setState({
          contact_name: "",
          contact_email: "",
          phone: "",
          message: "",
          success: true
        });
      }, 1000);
    }
  };

  render() {
    return (
      <form
        action="https://minervawebdevelopment.com/contact-react/"
        method="POST"
        encType="multipart/form-data"
        target="invis"
        className="form"
      >
        {this.state.warning ? (
          <p className="alert alert-warning">All Fields Are Required</p>
        ) : null}
        {this.state.success ? (
          <p className="alert alert-success">
            Your email has been sent successfully!
          </p>
        ) : null}
        <div className="form-group">
          <input
            type="text"
            className="input-field"
            name="contact_name"
            value={this.state.contact_name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            className="input-field"
            name="contact_email"
            value={this.state.contact_email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            className="input-field"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Phone"
          />
          <textarea
            className="input-field message-field"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Message"
          />
          <input name="to_email" type="hidden" value={this.state.to} />
        </div>
        <input
          type="submit"
          id="submit"
          name="submit-form"
          onClick={this.handleSubmit}
          className="submit-btn"
        />
      </form>
    );
  }
}
