import React, { useState } from "react";
import axios from "axios";
import linkedinLogo from "../images/linkedin-IMG.jpg";
import gitHubLogo from "../images/GitHub.jpg";
import "../Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://portfoliobackend-ldhj.onrender.com/", formData);
      alert("Email sent successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email", error);
      alert("Failed to send email");
    }
  };

  return (
    <div className="contact-container">
      <div className="linkedin-container">
        <h2>LinkedIn</h2>
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/david-wright2"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="linkedin" src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>

      <br></br>

      <div className="github-container">
        <h2>GitHub</h2>
        <a
          className="Github-link"
          href="https://github.com/Code-Life-Hub"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="GitHub" src={gitHubLogo} alt="GitHub" />
        </a>
      </div>

      <h2 className="email-form-header">E-Mail</h2>
      <div className="form-container">
        <form className="email-form" onSubmit={handleSubmit}>
          <label className="email-form-name">
            Name:
            <input
              className="name-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Please enter your name here..."
            />
            <br></br>
          </label>
          <label className="email-form-email">
            Email:
            <input
              className="email-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Please enter your email here..."
            />
          </label>

          <br></br>

          <label className="email-form-message">
            Message:
            <textarea
              className="message-input"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Please enter your message here..."
            />
          </label>
          <div className="email-send-container">
            <button className="email-form-send" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
