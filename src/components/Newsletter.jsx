import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
export default function Newsletter() {
  const [firstName, setFirstName] = React.useState('');
  return (
    <Section id="newsletter">
      <div className="title">
        <h1>
          <span>Contact</span> Us
        </h1>
        <p>
        The Halt Offers Finger-Licking Food, Refreshing Drinks, And A Lively Atmosphere, Making It A Hit With Locals And Visitors Alike.
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder="send us feedback..." value={firstName} onChange={e => setFirstName(e.target.value)} />
        <button onClick={()=>setFirstName("")}>Send</button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #3c3f45;
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
