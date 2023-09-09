import React from "react";
import styled from "styled-components";
import Ambience1 from "../assets/Ambience1.jpg";
import Ambience2 from "../assets/Ambience2.jpg";
import Ambience3 from "../assets/Ambience3.jpg";
import Ambience4 from "../assets/Ambience4.jpg";
import Ambience5 from "../assets/Ambience5.jpg";
import Ambience6 from "../assets/Ambience6.jpg";
import Ambience7 from "../assets/Ambience7.jpg";
import Ambience8 from "../assets/Ambience8.jpg";
import Ambience9 from "../assets/Ambience9.jpg";
import Ambience10 from "../assets/Ambience10.jpg";
import Ambience11 from "../assets/Ambience11.jpg";
import Ambience12 from "../assets/Ambience12.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: Ambience5,
      
    },
    {
      image: Ambience6,
      
    },
    {
      image: Ambience7,
      
    },
    {
      image: Ambience8,
      
    },
    {
      image: Ambience9,
      
    },
    {
      image: Ambience10,
      
    },
    {
      image: Ambience11,
      
    },
    {
      image: Ambience12,
      
    },
    {
      image: Ambience1,
      
    },
    {
      image: Ambience2,
      
    },
    {
      image: Ambience3,
      
    },
    {
      image: Ambience4,
      
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Ambience </span>
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 3rem ;
  }
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h2 {
        color: #fafafa;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        color: white;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 15rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 15rem;
          width: 16.5rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
