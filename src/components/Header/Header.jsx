import React from 'react';

import SubHeading from '../../assets/SubHeading/SubHeading';
import './Header.css';
import background from "../../assets/welcome.png";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To The Halt</h1>
      <p className="p__opensans" style={{ margin: '2rem 0', color:"white",fontFamily:"revert" }}>The Halt Is An Art That Combines Exceptional Food, Impeccable Service, An Inviting Atmosphere, And Attention To Detail To Create An Unforgettable Culinary Journey For Every Guest. </p>
      <button type="button" className="custom__button"><a style={{ textDecoration: 'none' }} href="https://www.zomato.com/begusarai/the-halt-1-begusarai-locality/order">Order now</a></button>
    </div>

    <div className="app__wrapper_img">
    <img src={background} alt="header_img" />
    </div>
  </div>
);

export default Header;
