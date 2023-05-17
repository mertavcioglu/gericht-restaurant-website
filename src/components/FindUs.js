import React from "react";
import "./FindUs.css";
import littleSpoon from "../images/little-spoon.svg";
import findUsImage from "../images/find-us-image.png";

function FindUs() {
  return (
    <div className="find-us-container">
      <div className="find-us__left">
        <h2>Contact</h2>
        <img src={littleSpoon} alt="little-spoon" className="little-spoon" />
        <h1 className="find-us__header">Find Us</h1>
        <p className="find-us__text">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <h2 className="find-us__small-header">Opening Hours</h2>
        <p className="find-us__text">Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p className="find-us__text">Sat - Sun: 10:00 Am - 03:00 Am</p>
        <button className="general-button find-us__button">Visit Us</button>
      </div>
      <img src={findUsImage} alt="find-us-img" className="find-us__image" />
    </div>
  );
}

export default FindUs;
