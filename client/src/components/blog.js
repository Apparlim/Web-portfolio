import React from "react";
import "../stylesheets/story.css";

const MyStory = () => {
  return (
    <div className="story-container">
      <div className="story-header">
        <h1 className="story-title">My Story</h1>
      </div>

      <div className="story-simple-content">
        <div className="story-text-content">
          <p className="story-paragraph highlight">
            Kathmandu kid, dorm-bound with a crew of mischief-makers and mentors who felt like family.
          </p>

          <p className="story-paragraph">
            The Himalayas whispered through our games, ping pong rallies that echoed till curfew,
            badminton smashes under monsoon skies, lawn tennis volleys that left me undefeated,
            first in every singles showdown. Sports? Not just play. <span className="emphasis">It was fire.</span>
          </p>

          <p className="story-paragraph">
            SEE done, Nepal behind me like a half-read chapter. Then Y8 hit, online sports games
            that turned pixels into portals. Computers weren't machines; they were <span className="emphasis">magic</span>.
            Jan 2018: fingers on keys, first lines of code flickering to life. Simple scripts, endless nights.
          </p>

          <p className="story-paragraph">
            USA called. Studies in Denton, but summers? <span className="emphasis">Pure alchemy.</span> Research dives
            into uncharted code, wild ideas sketched on napkins, horizons chased from lab benches
            to late-night prototypes.
          </p>

          <p className="story-paragraph">
            Then Seoul, GYS 2023, a whirlwind of 40 nations' sharpest minds. Street food symphonies,
            K-pop pulses, cultures colliding like open-source commits. Met hackers who'd bend reality,
            dreamers who'd rewrite rules. <span className="emphasis">Go. Just go. It's the upgrade your soul didn't know it needed.</span>
          </p>

          <p className="story-paragraph">
            Life's no straight shot, it's a <span className="emphasis">masala chai</span>, bold and brewing,
            one sip revealing layers you chase forever. I'm steeping deeper: more lines of code,
            more borders blurred, more fire kindled. Motivating the kid in the dorm to run faster,
            code sharper, dream louder.
          </p>

          <p className="story-paragraph final-quote">
            One pivot closes, another spins,<br />
            more breakthroughs, more worlds, more me.<br />
            <span className="emphasis">Isn't that the ultimate win?</span>
          </p>
        </div>
      </div>

      <div className="story-footer">
        © 2024-25. Designed & developed by Appar Thebe.
      </div>
    </div>
  );
};

export { MyStory };
