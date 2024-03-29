import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

//style components
const StyledNav = Styled.div`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding:1rem 5rem;
background-color: #282828;
a{
    color:white;
    text-decoration:none;
}
ul{
    display:flex;
    list-style:none;
}
#logo{
    font-size:1.5rem;
    font-weight:lighter;
}
li{
    padding-left:10rem;
    position:relative;
}
`;

export default Nav;
