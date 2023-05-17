import React from "react";
import "./AwardItem.css";

function AwardItem(props) {
  return (
    <div className="award-item-container">
      <img src={props.image} alt="award-img" className="award-item__image" />
      <div className="award-item__content">
        <h2 className="award-item__header">{props.title}</h2>
        <h2 className="award-item__text">
          Lorem Ipsum Dolor Sit Amet, Consectetur.
        </h2>
      </div>
    </div>
  );
}

export default AwardItem;
