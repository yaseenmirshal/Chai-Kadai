import React from "react";
import "./HeroSection.css";
import juiceImage from "../assets/juice.png"; // Replace with actual juice image path
import chickenImage from "../assets/chicken1.png"; // Replace with actual chicken image path
// import food1 from "../assets/food1.jpg";
// import food2 from "../assets/food2.jpg"; // Replace with actual food images
// import food3 from "../assets/food3.jpg";
// import food4 from "../assets/food4.jpg";




function HeroSection() {
    return (
        <div className="hero">
            <div className="starting-section">
                <div className="hero-content">
                    <p className="subheading">SPECIAL FOR YOUR BEST CHOICE</p>
                    <h1 className="heading">
                        DELICIOUS FOOD <br />
                        NEAR YOUR TOWN
                    </h1>
                    <p className="description">
                        Welcome to our Chai Kadai, where every dish tells a story and every bite is an adventure at our food website.
                    </p>
                    <button className="get-started-btn">Get Started</button>
                </div>
                <div className="hero-images">
                    <img src={juiceImage} alt="Juice" className="juice-img" />
                    <img src={chickenImage} alt="Chicken" className="chicken-img" />
                </div>
            </div>
            <div className="flowing-background"></div>
           
        </div>
    );
}

export default HeroSection;