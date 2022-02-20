import React from "react";
import home2 from "../img/home2.jpg";
import timer from "../img/timer.png";
import teamwork from "../img/teamwork.png";
import affordable from "../img/affordable.png";
import diaphragm from "../img/diaphragm.png";
import Styled from "styled-components";
import { About, Description, Image } from "../Style";

function ServicesSection() {
  return (
    <Services>
      <Description>
        <h2>
          High<span> quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={timer} alt="timer" />
              <h3>Efficient</h3>
            </div>
            <p>Sending transfers to clients.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>teamwork</h3>
            </div>
            <p>Sending transfers to clients.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={affordable} alt="affordable" />
              <h3>affordable</h3>
            </div>
            <p>Sending transfers to clients.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>diaphragm</h3>
            </div>
            <p>Sending transfers to clients.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="home2" height="350px" weight="30%" />
      </Image>
    </Services>
  );
}

//Styled components

const Services = Styled(About)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width:70%;
    padding:2rem 0rem 4rem 0rem;
  }
`;

const Cards = Styled.div`
  display:flex;
  flex-wrap:wrap;
`;

const Card = Styled.div`
  flex-basis:15rem;
  .icon{
    display:flex;
    align-items:center;
    h3{
      margin-left:1rem;
      background:white;
      color:black;
      padding:1rem;
    }
  }
`;

export default ServicesSection;
