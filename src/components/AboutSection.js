import React from "react";
import home from "../img/home.jpg";
import Styled from "styled-components";

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
const About = Styled.div`
  min-height:90vh;
  display:flex;
  align-items: center;
  justify-content:space-between;
  padding:5rem 10rem;
  color:white;
`;

const Description = Styled.div`
  flex:1;
  padding-right:5rem;
  h2{
    font-weight:lighter;
  }
`;

const Image = Styled.div`
  flex:1;
  overflow:hidden;
  img{
    width:100%;
    height:80vh;
    object-fit:cover;
  }
`;

const Hide = Styled.div`
  overflow:hidden;
`;

export default AboutSection;
