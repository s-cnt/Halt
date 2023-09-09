import React from "react";
import styled from "styled-components";
import avatar2 from "../assets/avatar2.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar2} alt="" />
            </div>
            <p>
            The Halt Restaurant is a hidden gem that offers a memorable dining experience. The inviting ambiance, scrumptious dishes, exceptional service, and dedication to supporting local produce make it a standout choice. 
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar2} alt="" />
            </div>
            <p>
            Beautiful ambience with a huge massive space decorated in such a manner that is directly useful for any of the purpose.
       Wish to see the more branches 🌟
      All the very best.
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar2} alt="" />
            </div>
            <p>
            One of the best interiors of entire Bihar.
The Halt is the Best place to eat, to chill, for meeting, parties and so on. Staff members are so polite here. And foods are so delicious.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: #3c3f45;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
      border-radius: 10px
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          color: white;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
