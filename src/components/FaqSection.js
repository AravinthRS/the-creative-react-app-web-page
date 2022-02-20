import React from "react";
//Style
import Styled from "styled-components";
import { About } from "../Style";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions<span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How I do start</h4>
        <div className="answer">
          <p>The sender of this email is registered with Naukri.com</p>
          <p>
            The sender of this email is registered with Naukri.com as TESCRA
            SOFTWARE PRIVATE LIMITED company. To respond back directly to the
            Employer, please click on Reply button, or send an
          </p>
        </div>
        <div className="Faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily schedule</h4>
        <div className="answer">
          <p>The sender of this email is registered with Naukri.com</p>
          <p>
            The sender of this email is registered with Naukri.com as TESCRA
            SOFTWARE PRIVATE LIMITED company. To respond back directly to the
            Employer, please click on Reply button, or send an
          </p>
        </div>
        <div className="Faq-line"></div>
      </div>
      <div className="question">
        <h4>Different payment method </h4>
        <div className="answer">
          <p>The sender of this email is registered with Naukri.com</p>
          <p>
            The sender of this email is registered with Naukri.com as TESCRA
            SOFTWARE PRIVATE LIMITED company. To respond back directly to the
            Employer, please click on Reply button, or send an
          </p>
        </div>
        <div className="Faq-line"></div>
      </div>
      <div className="question">
        <h4>What product do you offer</h4>
        <div className="answer">
          <p>The sender of this email is registered with Naukri.com</p>
          <p>
            The sender of this email is registered with Naukri.com as TESCRA
            SOFTWARE PRIVATE LIMITED company. To respond back directly to the
            Employer, please click on Reply button, or send an
          </p>
        </div>
        <div className="Faq-line"></div>
      </div>
    </Faq>
  );
}

//styles
const Faq = Styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;
    }
    .Faq-line{
        background:#cccccc;
        height:.2rem;
        margin:2rem 0rem;
        width:100%;
    }
    .question{
        padding:3rem 0rem;
        cursor:pointer;
    }
    .answer{
        padding:2rem 0rem;
        p{
            padding:1rem 0rem;
        }
}
`;

export default FaqSection;
