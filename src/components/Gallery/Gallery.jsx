import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import SubHeading from '../../assets/SubHeading/SubHeading';
import product1 from "../../assets/0.jpg";
import product2 from "../../assets/2.jpg";
import product3 from "../../assets/3.jpg";
import product4 from "../../assets/4.jpg";
import product5 from "../../assets/5.jpg";
import product6 from "../../assets/6.jpg";
import product7 from "../../assets/7.jpg";
import product8 from "../../assets/8.jpg";
import product9 from "../../assets/9.jpg";
import product10 from "../../assets/10.jpg";
import product11 from "../../assets/11.jpg";
import product12 from "../../assets/12.jpg";
import product13 from "../../assets/0.jpg";
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id='gallery'>
      <div className="app__gallery-content">
        <SubHeading title="The Halt" />
        <h1 className="headtext__cormorant">Menu's Gallery</h1>
        <button type="button" className="custom__button">
        <a style={{ textDecoration: 'none' }} href="https://www.zomato.com/begusarai/the-halt-1-begusarai-locality/order">View more</a>
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[product1, product2, product3, product4,product5, product6, product7, product8,product9, product10, product11, product12,product13].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
