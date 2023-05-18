import React from "react";
import "./Gallery.css";
import photo01 from "../images/photo01.png";
import photo02 from "../images/photo02.png";
import photo03 from "../images/photo03.png";
import photo04 from "../images/photo04.png";
import littleSpoon from "../images/little-spoon.svg";

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery__left">
        <h2>Instagram</h2>
        <img src={littleSpoon} alt="little-spoon" className="little-spoon" />
        <h1 className="gallery__header">Photo Gallery</h1>
        <p className="gallery__text">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button className="general-button">View More</button>
      </div>
      <div className="gallery__right">
        <div className="gallery__item">
          <img src={photo01} alt="gallery-img" className="gallery__photo" />
          <i className="fa-brands fa-instagram fa-2xl instagram-logo"></i>
        </div>
        <div className="gallery__item">
          <img src={photo02} alt="gallery-img" className="gallery__photo" />
          <i className="fa-brands fa-instagram fa-2xl instagram-logo"></i>
        </div>
        <div className="gallery__item">
          <img src={photo03} alt="gallery-img" className="gallery__photo" />
          <i className="fa-brands fa-instagram fa-2xl instagram-logo"></i>
        </div>
        <div className="gallery__item">
          <img
            src={photo04}
            alt="gallery-img"
            className="gallery__photo gallery__last-photo"
          />
          <i className="fa-brands fa-instagram fa-2xl instagram-logo"></i>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
