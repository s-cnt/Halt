import React from 'react';
import spoon from '../spoon.png';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem', color:"white",fontFamily: "cursive" }}>
    <p className="p__cormorant">{title}</p>
    <img src={spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
