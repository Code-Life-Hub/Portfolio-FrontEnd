import React from "react";
import "../App.css";
import portfolioCover from "../images/portfolioCover.jpg";
function About() {
  return (
    <div className="about-container">
      <p className="intro-P">
        Welcome to my digital domain! I'm David Wright, a software engineer with
        a flair for creating innovative and efficient solutions. Dive into my
        portfolio to explore a spectrum of projects showcasing my technical
        prowess and my journey in turning complex challenges into seamless user
        experiences.
      </p>
      <img src={portfolioCover} alt="David Wright" />
    </div>
  );
}

export default About;
