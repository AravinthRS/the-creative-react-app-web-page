import Styled from "styled-components";

export const About = Styled.div`
  min-height:90vh;
  display:flex;
  align-items: center;
  justify-content:space-between;
  padding:5rem 5rem;
  color:white;
`;

export const Description = Styled.div`
  flex:1;
  padding-right:5rem;
  h2{
    font-weight:lighter;
  }
`;

export const Image = Styled.div`
  flex:1;
  overflow:hidden;
  img{
    width:100%;
    height:80vh;
    object-fit:cover;
  }
`;

export const Hide = Styled.div`
  overflow:hidden;
`;
