import React from "react";
import "./Home.css";
import littleSpoon from "../images/little-spoon.svg";
import homeImage from "../images/home-image.png";

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="home__left">
        <h2>Chase The New Flavour</h2>
        <img src={littleSpoon} alt="little-spoon" className="little-spoon" />
        <h1 className="home__left-header">THE KEY TO FINE DINING</h1>
        <p className="home__left-lower-text">
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <button className="general-button">Explore Menu</button>
      </div>
      <img src={homeImage} alt="home-img" className="home__image" />
    </div>
  );
}

export default Home;
