import React from "react";
import { useNavigate } from "react-router-dom";
import apparImage from "../assets/apparimage.jpg";
import heroBg from "../assets/new_hero.png";

import "../stylesheets/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id="home-part1" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBg})` }}>
        <div className="intro-container">
          <br />
          <div className="bigname-container">
            <p id="bigname" className=" typewriter">
              Hi! I'm Appar.
            </p>
          </div>
          <br />

          <div id="text-pic-container">
            <div className="text-intro-container">
              <p className="u-mmm">
                I'm a student at UNT studying cybersecurity + CS.
                <br />
                Welcome to my personal website!
              </p>
              <br />
              <div className="u-flex  u-width-fill u-height-fill u-justify-center">
                <button onClick={() => navigate("/contact")}>
                  <p>Contact Me</p>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="downarrow-container">
          <a href="#home-part2">
            <img src="/assets/downarrow.png" className="downarrow bounce" />
          </a>
        </div>
      </div>
      <div id="home-part2">
        <p className="u-block u-xl">About Me</p>
        <br />
        <div className="u-flex">
          <div className="headshot-container">
            <img src={apparImage} id="headshot" />
          </div>
          <div className="about-container">
            <p className="u-mm">
              I'm a senior at UNT majoring in computer science and cybersecurity. I'm interested in computers and everything that makes technology better.
              <br />
              <br />
              Besides my passion for my major, I love playing sports like chess, table tennis, and badminton. In high school, I won over 20 certifications, including science projects, and I played table tennis for the under-14 team from Kathmandu Valley.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
