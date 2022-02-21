import React from "react";
//styles
import Styled from "styled-components";
import athelete from "../img/athelete.jpg";
import goodtimes from "../img/goodtimes.jpg";
import race from "../img/race.jpg";

function OurWork() {
  return (
    <Work>
      <Movie>
        <h2>The Athelete</h2>
        <div className="line"></div>
        <img src={athelete} alt="athelete" width="80%" height="500px" />
      </Movie>
      <Movie>
        <h2>The Good Time</h2>
        <div className="line"></div>
        <img src={goodtimes} alt="goodtimes" width="80%" height="500px" />
      </Movie>
      <Movie>
        <h2>The Race</h2>
        <div className="line"></div>
        <img src={race} alt="race" width="80%" height="500px" />
      </Movie>
    </Work>
  );
}

//stule components
const Work = Styled.div`
min-height:100vh;
overflow:hidden;
padding:2rem 5rem;
h2{
  padding:1rem 0rem;
  color:blue;
}
`;

const Movie = Styled.div`
padding-buttom:10rem;
.line{
  background:#cccccc;
  height:.5rem;
  margin:2rem 0rem;
  width:100%;
}
img{
  width:100%;
  height:70vh;
  object-fit:cover;
}
`;
export default OurWork;
