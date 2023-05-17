import React from "react";
import "./Chef.css";
import chefImage from "../images/chef-image.png";
import littleSpoon from "../images/little-spoon.svg";
import quotation from "../images/quotation-mark.png";
import signature from "../images/chef-signature.png";

function Chef() {
  return (
    <div className="chef-container">
      <img src={chefImage} alt="chef-img" className="chef__image" />
      <div className="chef__content">
        <h2>Chef's Word</h2>
        <img src={littleSpoon} alt="little-spoon" className="little-spoon" />
        <h1 className="chef__header">What We Believe In</h1>
        <div className="chef__text-upper">
          <img
            src={quotation}
            alt="quotation-mark"
            className="chef__quotation"
          />
          <p className="chef__text">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit.
          </p>
        </div>
        <p className="chef__lower-text">
          Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.
          Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie
          Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
        </p>

        <h2 className="chef__chefs-name">Kevin Lou</h2>
        <p className="chef__chefs-title">Chef & Founder</p>
        <img
          src={signature}
          alt="chefs-signature"
          className="chef__signature"
        />
      </div>
    </div>
  );
}

export default Chef;
