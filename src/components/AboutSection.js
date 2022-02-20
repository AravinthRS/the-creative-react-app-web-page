import React from "react";
import home from "../img/home.jpg";
//styled
import Styled from "styled-components";
import { About, Description, Hide, Image } from "../Style";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams </span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>Digital Camera World is the world's fastest-growing photography</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home} alt="Camera" height="350px" weight="30%" />
      </Image>
    </About>
  );
}

//styling components

export default AboutSection;
