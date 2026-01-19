import React from "react";
import "../stylesheets/navbar.css";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <div className="hamburger-container u-width-fill">
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <Link className="menu__item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/blog">
              My Story
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};


const Navbar = () => {
  return (
    <div className="Navbar u-width-fill">
      <div className="navlink-container name-container">
        <Link to="/" className="nav-link u-mmm">
          Appar Thebe
        </Link>
      </div>
      <div className="navlink-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        {/* <Link to="/academics" className="nav-link">
          Academics
        </Link> */}
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/blog" className="nav-link">
          My Story
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <a href="https://github.com/Apparlim" target="_blank" className="navicon-container">
          <img src="/assets/github.png" className="nav-icon github" />
        </a>
        <a
          href="https://www.linkedin.com/in/apparthebe/"
          target="_blank"
          className="navicon-container"
        >
          <img src="/assets/linkedin.png" className="nav-icon linkedin" />
        </a>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="u-width-fill u-height-fit">
      <Navbar />
      <HamburgerMenu />
    </div>
  );
};

export default Nav;
