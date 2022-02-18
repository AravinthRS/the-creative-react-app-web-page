import React from "react";
import home2 from "../img/home2.jpg";
import timer from "../img/timer.png";
import teamwork from "../img/teamwork.jpg";
import affordable from "../img/affordable.png";
import diaphragm from "../img/diaphragm.png";

function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High<span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={timer} alt="timer" height="30px" weight="30px" />
              <h3>Efficient</h3>
            </div>
            <p>Sending transfers to clients is pretty simple.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" height="30px" weight="30px" />
              <h3>teamwork</h3>
            </div>
            <p>Sending transfers to clients is pretty simple.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img
                src={affordable}
                alt="affordable"
                height="30px"
                weight="30px"
              />
              <h3>affordable</h3>
            </div>
            <p>Sending transfers to clients is pretty simple.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img
                src={diaphragm}
                alt="diaphragm"
                height="30px"
                weight="30px"
              />
              <h3>diaphragm</h3>
            </div>
            <p>Sending transfers to clients is pretty simple.</p>
          </div>
        </div>
      </div>
      <img src={home2} alt="home2" height="350px" weight="30%" />
    </div>
  );
}

export default ServicesSection;
