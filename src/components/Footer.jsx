import React from "react";
import styled from "styled-components";
import logo from "../assets/TheHaltLogo.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsPersonHeart } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."
          </p>
          <ul>
            <li>
              <a href="https://instagram.com/" style={{ textDecoration: "none" }}><AiFillInstagram /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/" style={{ textDecoration: "none" }}><FaFacebookF /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sushant-suman-193836268/" style={{ textDecoration: "none" }}><GrLinkedinOption /></a>
            </li>
            <li>
              <a href="https://github.com/s-cnt" style={{ textDecoration: "none" }}><BsGithub /></a>
            </li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
            The Halt Is An Art That Combines Exceptional Food, Impeccable Service, An Inviting Atmosphere, And Attention To Detail To Create An Unforgettable Culinary Journey For Every Guest.
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>+91-7070683287</p>
          <p>NH31,Above LG shoppe, near Alka Cinema Hall, Begusarai, Bihar 851101</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          2023 <span>The Halt</span>. All Rights Reserved.
        </h2>
        <h3>
          <a href="https://github.com/s-cnt" style={{ textDecoration: "none" }}>
            &copy; <span>Sushant</span>
          </a>
        </h3>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    color: white
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    font-size: 16px;
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  h3 {
    font-size: 12px;
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
