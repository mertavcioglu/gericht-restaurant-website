import React from "react";
import "./Awards.css";
import awardsImage from "../images/laurel-image.png";
import littleSpoon from "../images/little-spoon.svg";
import AwardItem from "./AwardItem";
import award02 from "../images/award02.png";
import award01 from "../images/award01.png";
import award05 from "../images/award05.png";
import award03 from "../images/award03.png";

function Awards() {
  return (
    <div className="awards-container" id="awards">
      <div className="awards__left">
        <h2>Awards & Recongnition</h2>
        <img src={littleSpoon} alt="little-spoon" className="little-spoon" />
        <h1 className="awards__header">Our Laurels</h1>
        <div className="awards__list">
          <AwardItem title="Bib Gourmond" image={award02} />
          <AwardItem title="Rising Star" image={award01} />
          <AwardItem title="AA Hospitality" image={award05} />
          <AwardItem title="Outstanding Chef" image={award03} />
        </div>
      </div>
      <img src={awardsImage} alt="awards-img" className="awards__image" />
    </div>
  );
}

export default Awards;
