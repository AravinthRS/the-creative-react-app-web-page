import React from "react";
import home from "../img/home.jpg";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams </span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Digital Camera World is the world's fastest-growing photography,
          covering every aspect of image-making, from DSLRs and photo editing to
          mobile photography and drones.
        </p>
        <button>Contact Us</button>
      </div>
      <div>
        <img src={home} alt="Camera" height="350px" weight="30%" />
      </div>
    </div>
  );
}

export default AboutSection;
