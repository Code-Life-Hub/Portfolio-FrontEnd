import React from "react";
import Movies from "../images/Movies-IMG.png";
import RecipeTracker from "../images/RecipeTracker-IMG.png";
import DineDoctor from "../images/DineDoctor-IMG.png";
import Decoder from "../images/DecoderRing-IMG.png";
import FlashCards from "../images/FlashCards-IMG.png";

function Projects() {
  return (
    <div className="projects-container">
      <div className="movies">
        <h3>We Love Movies</h3>
        <p>
          We Love Movies is a comprehensive movie review platform designed to
          enhance the movie selection experience for users. Developed using
          React.JS, HTML, and CSS, the platform offers a seamless and
          user-friendly interface, allowing users to easily navigate through a
          wide array of movie reviews. The backend of the application interacts
          efficiently with the database to fetch and store movie reviews,
          ensuring that users have access to the latest and most relevant
          information. Whether you're looking for reviews of current theater
          showings or just exploring new films, We Love Movies is your go-to
          destination.
        </p>
        <a
          href="https://davidswelovemoviesdatabase.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Movies} alt="We Love Movies" />
        </a>
      </div>

      <br></br>

      <div className="RecipeTracker">
        <h3>Recipe Tracker</h3>
        <p>
          Recipe Tracker is a dynamic web application tailored for culinary
          enthusiasts and home cooks. Utilizing React.js for a responsive
          frontend, the application provides users with the ability to
          seamlessly add, edit, delete, and search for recipes. This digital
          cookbook not only simplifies the process of managing a variety of
          recipes but also ensures that your favorite dishes are always just a
          click away. Embrace the art of cooking with Recipe Tracker, your
          personal culinary assistant.
        </p>
        <a
          href="https://two6-7-recipe-tracker-deploy.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={RecipeTracker} alt="Recipe Tracker" />
        </a>
      </div>

      <br></br>

      <div className="DineDoctor">
        <h3>Dine Doctor</h3>
        <p>
          Dine Doctor revolutionizes the way restaurants manage their
          reservations. Designed with user-friendliness in mind, this
          application provides restaurant staff with a streamlined interface for
          handling reservations. From viewing and adding to updating
          reservations, every aspect of reservation management is covered. Dine
          Doctor ensures that your restaurant's reservation system runs
          smoothly, allowing you to focus on providing an exceptional dining
          experience.
        </p>
        <a
          href="https://restauraunt-reservation-frontend.onrender.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={DineDoctor} alt="Dine Doctor" />
        </a>
      </div>

      <br></br>

      <div className="Decoder">
        <h3>Decoder Ring</h3>
        <p>
          Decoder Ring is an interactive web application dedicated to the world
          of cryptography. Developed using HTML, CSS, and JavaScript, the
          application offers users a hands-on experience with various cipher
          techniques. Whether you're encoding a secret message or decoding an
          encrypted text, Decoder Ring provides a comprehensive set of tools to
          assist you.
        </p>
        <a
          href="https://code-life-hub.github.io/Decoder-Ring/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Decoder} alt="Decoder Ring" />
        </a>
      </div>

      <br></br>

      <div className="FlashCards">
        <h3>Flash Cards</h3>
        <p>
          Flash Cards is an innovative learning application developed using
          React, JavaScript, HTML5, and CSS. Designed to assist users in
          studying and mastering new information, the application allows for the
          creation of personalized decks and cards. Users can view decks, flip
          cards to reveal answers, and navigate through flashcards individually,
          making the learning process both efficient and engaging. Elevate your
          study sessions with Flash Cards, your digital companion for knowledge
          and mastery.
        </p>
        <a
          href="https://flash-cards-react.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FlashCards} alt="Flash Cards" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
