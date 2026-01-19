import React from "react";
import { useState, useEffect } from "react";
import { get } from "../utilities.js";

import Waiting from "./waiting.js";
import "../stylesheets/projects.css";

//project:
//  name: String,
// description: String,
// website_link: String,
// github_link: String,
// image_link: String,
// starred: Boolean, //true>false
// priority: Number, //higher priority comes first
// timestamp: { type: Date, default: Date.now },

const display_project = ({ name, description, website_link, github_link, image_link, starred }) => {
  return (
    <div className="u-width-fill u-flex u-align-center project" key={name}>
      <div className="u-height-fill u-flex-col words-container">
        <div className="u-height-fit u-flex u-justify-start u-align-center">
          {website_link ? (
            <a href={website_link} target="_blank" className="u-inline-block">
              <p className="u-ll">{name}</p>
            </a>
          ) : (
            <p className="u-inline-block u-ll">{name}</p>
          )}
          {github_link ? (
            <a
              href={github_link}
              target="_blank"
              className="u-flex u-align-center u-justify-center"
            >
              <img src="/assets/inverted_github.png" className="small-github-icon" />
            </a>
          ) : null}
          {starred ? <img src={"/assets/star.png"} className="u-inline-block star-icon" /> : null}
        </div>
        <div className="linebreak-1"></div>
        <p className="u-mm u-block">{description}</p>
      </div>
      <img src={image_link} className="u-block proj-image" />
    </div>
  );
};

const ProjectsPage = () => {
  // Hardcoded project data
  const projList = [
    {
      name: "xv6 networking stack",
      description: "The xv6 operating system is a great teaching tool, but its lack of native networking always felt like a significant missing piece for modern applications. To bridge this gap, I built a complete TCP/IP networking stack from scratch, starting with an E1000 network driver that uses DMA for efficient data transfer. I implemented essential layers including ARP with intelligent caching and a UDP transport layer with a custom socket management system. To make the system truly functional, I also integrated core services like DHCP, DNS, and even PXE boot support. The final implementation passed 100% of my stress tests with zero compilation warnings, resulting in a robust, modular stack that brings real-world connectivity to a minimalist OS.",
      website_link: "",
      github_link: "https://github.com/Apparlim/xv6-networking-stack",
      image_link: "/assets/xv6_project.png",
      starred: true,
    },
    {
      name: "The-Himalayan-Quest",
      description: "Nepal's diverse geography is often difficult to visualize through standard maps. To solve this, I built an interactive, 16-bit pixel art map using dynamic CSS and sprite graphics to create a geographically accurate representation of the country. By focusing on frontend creativity, I was able to turn complex spatial data into an engaging, gamified visual experience that showcases the unique terrain of the Himalayas.",
      website_link: "",
      github_link: "https://github.com/Apparlim/The-Himalayan-Quest",
      image_link: "/assets/himalayan_project.jpg",
      starred: true,
    },
    {
      name: "Hariyoilam",
      description: "Sustainable marketplaces often struggle with maintaining user trust while managing complex transactions. I built Hariyoilam, a full-stack SaaS marketplace designed with a 'Security-by-Design' philosophy. By implementing Privileged Identity Management (PIM) and robust data protection from the ground up, I created a platform that prioritizes both environmental sustainability and user data integrity in a single, scalable ecosystem.",
      website_link: "",
      github_link: "https://github.com/Apparlim/Hariyoilam",
      image_link: "/assets/hariyoilam_project.jpg",
      starred: true,
    },
    {
      name: "SpaceMed AI",
      description: "Remote healthcare is often inaccessible in high-pressure environments. For HackMIT 2025, my teammate and I built SpaceMed AI, a voice-first assistant integrated directly into Mentra Glass hardware. By leveraging Deepgram and Claude for real-time guidance and a Twilio-powered SOS system, we created a way for users to receive medical advice and trigger emergency alerts using only their voice, turning smart eyewear into a vital tool for urgent patient care.",
      website_link: "",
      github_link: "https://github.com/Apparlim/hackmit2025",
      image_link: "/assets/spacemed_project.jpg",
      starred: true,
    },
  ];

  return (
    <div className="page-container">
      <div>
        <p className="u-xl">Projects</p>
      </div>
      {projList.map(display_project)}
    </div>
  );
};

export default ProjectsPage;
