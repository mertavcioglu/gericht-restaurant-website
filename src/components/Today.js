import React from "react";
import "./Today.css";
import littleSpoon from "../images/little-spoon.svg";
import todaysSpecial from "../images/todays-special.png";
import MenuItem from "./MenuItem";

function Today() {
  return (
    <div className="today-container" id="menu">
      <div className="today__top">
        <h2>Menu That Fits You Palatte</h2>
        <img src={littleSpoon} alt="little-spoon" className="little-spoon" />
        <h1 className="today__header">Today's Special</h1>
      </div>
      <div className="today__content">
        <div className="today__menu">
          <h3 className="today__menu-header">Wine & Beer</h3>
          <MenuItem title="Chapel Hill Shiraz" text="AU | Bottle" price="56" />
          <MenuItem title="Catena Malbee" text="AU | Bottle" price="59" />
          <MenuItem title="La Vieillw Rose" text="FR | 750 Ml" price="44" />
          <MenuItem title="Rhino Pale Ale" text="CA | 750 Ml" price="31" />
          <MenuItem title="Irish Guinness" text="IE | 750 Ml" price="26" />
        </div>
        <img
          src={todaysSpecial}
          alt="todays-special"
          className="about__image"
        />
        <div className="today__menu">
          <h3 className="today__menu-header">Cocktails </h3>
          <MenuItem
            title="Aperol Sprtiz"
            text="Aperol | Villa Marchesi Prosecco | Soda | 30 Ml"
            price="20"
          />
          <MenuItem
            title="Dark 'N' Stormy"
            text="Dark Rum | Ginger Beer | Slice Of Lime"
            price="16"
          />
          <MenuItem
            title="Daiquiri"
            text="Rum | Citrus Juice | Sugar"
            price="10"
          />
          <MenuItem
            title="Old Fashioned"
            text="Bourbon | Brown Sugar | Angostura Bitters"
            price="31"
          />
          <MenuItem
            title="Negroni"
            text="Gin | Sweet Vermouth | Campari | Orange Garnish"
            price="26"
          />
        </div>
      </div>
      <button className="general-button today_button">View More</button>
    </div>
  );
}

export default Today;
