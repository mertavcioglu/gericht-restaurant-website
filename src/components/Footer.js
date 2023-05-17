import React from "react";
import "./Footer.css";
import littleSpoon from "../images/little-spoon.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer__newsletter">
        <h2>Newsletter</h2>
        <img src={littleSpoon} alt="little-spoon" className="little-spoon" />
        <h1 className="footer__header">Subscribe To Our Newsletter</h1>
        <p className="footer__text">And Never Miss Latest Updates!</p>
        <div className="footer__subscribe">
          <input
            type="email"
            placeholder="Enter your email adress"
            className="footer__input"
          />
          <button className="general-button footer__button">Subscribe</button>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__links-item">
          <h1 className="footer__links-header">Contact Us</h1>
          <p className="footer__links-text">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="footer__links-text">+1 212-344-1230</p>
          <p className="footer__links-text">+1 212-555-1230</p>
        </div>
        <div className="footer__links-item">
          <h1 className="footer__links-header footer__links-special-header">
            GERÍCHT
          </h1>
          <p className="footer__links-text">
            "The Best Way To Find Yourself Is To Lose Yourself In The
          </p>
          <p className="footer__links-text">Service Of Others."</p>
          <img
            src={littleSpoon}
            alt="little-spoon"
            className="little-spoon footer__spoon"
          />
          <div className="footer__social-links">
            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-facebook-f fa-xl"></i>
            </a>
            <a href="https://twitter.com/" rel="noreferrer" target="_blank">
              <i class="fa-brands fa-twitter fa-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
          </div>
        </div>
        <div className="footer__links-item">
          <h1 className="footer__links-header">Working Hours</h1>
          <p className="footer__links-text">Monday-Friday:</p>
          <p className="footer__links-text">08:00 Am - 12:00 Am</p>
          <br />
          <p className="footer__links-text">Saturday-Sunday:</p>
          <p className="footer__links-text">07:00 Am - 11:00 Pm</p>
        </div>
      </div>
      <p className="footer__rights">2021 Gericht. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
