
import React from "react";
import "./Section6.css";
import foods from "../assets/foods.jpg"

const Section6 = () => {
  return (
    <div className="container">
      <div className="left">
        <p className="tagline">NEED ANY FOOD?</p>
        <h1 className="main-heading">LOOKING FOR BEST QUALITY FOOD FOR PARTY?</h1>
        <button className="quote-button">GET A QUOTE →</button>
      </div>
      <div className="right">
        
        <img
          src={foods}
          alt="Food Spread"
          className="food-image"
        />
      </div>
    </div>
  );
};

export default Section6;