import React from "react";
import "./MenuItem.css";

function MenuItem(props) {
  return (
    <div className="today-menu__item">
      <div className="today-menu__item-top">
        <h3 className="today-menu__item-header">{props.title}</h3>
        <div className="today-menu__item-right">
          <div className="today-menu__item-dash"></div>
          <div className="today-menu__item-price">${props.price}</div>
        </div>
      </div>
      <p className="today-menu__item-text">{props.text}</p>
    </div>
  );
}

export default MenuItem;
