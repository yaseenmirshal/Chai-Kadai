import React from "react";
import "./Section5.css";
import fruits from "../assets/fruits.jpg";
import chicken from "../assets/chicken.jpg";
import smoothie from "../assets/smoothie.jpg";
import chef from "../assets/chef.jpg";
import fries from "../assets/fries.jpeg";
import pizza from "../assets/pizz.jpg";
import burgers from "../assets/burgers.jpg"

const Gallery = () => {
    return (
      <div className="gallery-container">
        <div className="upper-section">
          <div className="text-section">
            <h4>OUR GALLERY</h4>
            <h1>WE OFFER QUALITY FOODS & 
                CUSTOMERS SERVICE</h1>
            <p>
              Welcome to our restaurant, where culinary excellence meets warm
              hospitality in every dish we serve. Nestled in the heart of City Name,
              our eatery invites you on a journey.
            </p>
          </div>
          <div className="image-item fruits">
            <img src={fruits} alt="Fruits" />
          </div>
        </div>
        <div className="image-grid">
          <div className="image-item">
            <img src={chicken} alt="Chicken" />
          </div>
          <div className="image-item">
            <img src={smoothie} alt="Smoothie" />
          </div>
          <div className="image-item">
            <img src={chef} alt="Chef" />
          </div>
          <div className="image-item">
            <img src={fries} alt="Fries" />
          </div>
          <div className="image-item">
            <img src={pizza} alt="Pizza" />
          </div>
          <div className="image-item">
            <img src={burgers} alt="Burgers" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;