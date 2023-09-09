import React from "react";
import styled from "styled-components";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">What we do?</h1>
      </div>
      <div className="services" >
        <div className="service" style={{borderRadius: "10px",padding: "15px 0px"}}>
          <img src={Services2} alt="" />
          <p>
           Authentic spices, herbs, and traditional high-quality ingredients to ensure the authenticity and flavor of your dishes.
          </p>
          <button>
            <a style={{ textDecoration: 'none' }} href="https://www.zomato.com/begusarai/the-halt-1-begusarai-locality/order">Order now</a>
          </button>
        </div>
        <div className="service yellow" style={{borderRadius: "10px",padding: "10px 0px"}}>
          <img src={Services1} alt="" />
          <p>
          Skilled chefs who are well-versed in Indian cooking techniques with deep understanding of the intricacies of Indian flavors.
          </p>
          <button><a style={{ textDecoration: 'none' }} href="https://www.zomato.com/begusarai/the-halt-1-begusarai-locality/order">Order now</a></button>
        </div>
        <div className="service" style={{borderRadius: "10px",padding: "10px 0px"}}>
          <img src={Services3} alt="" />
          <p>
          We Create a welcoming ambiance that reflects Indian culture through decor, music, and traditional art that enhance overall dining experience.
          </p>
          <button><a style={{ textDecoration: 'none',fontSize: "16px",
    fontWeight: "700" }} 
    href="https://www.zomato.com/begusarai/the-halt-1-begusarai-locality/order" >Order now</a></button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 3rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5vw;
    margin-top: 3rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      background-color: #3c3f45;
      &:hover {
        background-color: black;
      }
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 1.5rem;
        font-size: 1.0rem;
       color: white;
       font-family: inherit;
        color: white;
        letter-spacing: 0.1rem;
        padding: 0 1rem;
      }
      button {
        padding: 0.6rem 2rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        font-weight:700;

        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
