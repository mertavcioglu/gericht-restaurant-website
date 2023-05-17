import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link className="navbar__header">Gerícht</Link>
      <div className="navbar__list">
        <Link className="navbar__list-item" smooth spy to="home">
          Home
        </Link>
        <Link className="navbar__list-item" smooth spy to="about">
          About
        </Link>
        <Link className="navbar__list-item" smooth spy to="menu">
          Menu
        </Link>
        <Link className="navbar__list-item" smooth spy to="awards">
          Awards
        </Link>
        <Link className="navbar__list-item" smooth spy to="contact">
          Contact
        </Link>
      </div>
      <div className="navbar__user-actions">
        <a href="login" className="navbar__user-actions-action">
          Log In / Register
        </a>
        <div className="navbar__user-actions-seperator"></div>
        <a href="book" className="navbar__user-actions-action">
          Book Table
        </a>
      </div>
    </div>
  );
}

export default Navbar;
