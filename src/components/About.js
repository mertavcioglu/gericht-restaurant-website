import React from "react";
import "./About.css";
import knife from "../images/knife.png";
import littleSpoon from "../images/little-spoon.svg";
import gLetter from "../images/g-letter.png";
function About() {
  return (
    <div className="about-container" id="about">
      {" "}
      <img src={gLetter} alt="g-letter" className="about__g-letter" />
      <div className="about__left">
        <h1 className="about__header">About Us</h1>
        <img src={littleSpoon} alt="little-spoon" className="little-spoon" />
        <p className="about__text about__text-left">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </p>
        <button className="general-button">Know More</button>
      </div>
      <img src={knife} alt="knife-img" className="about__knife-img" />
      <div className="about__right">
        <h1 className="about__header">Our History</h1>
        <img src={littleSpoon} alt="little-spoon" className="little-spoon" />
        <p className="about__text about__text-right">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </p>
        <button className="general-button">Know More</button>
      </div>
    </div>
  );
}

export default About;
