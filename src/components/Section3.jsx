import React from "react";
import "./Section3.css";
import chickenSteak from "../assets/chicken-steak-removebg-preview.png";
import chilly from "../assets/red chilly.png";
import tomato from "../assets/tomaato.png";
import pizza from "../assets/pizzaa.png"




function Section3() {
    return (
        <div class="special-deal-section">
            <img src={pizza} alt="Pizza" className="pizza-image" />
            <img src={chilly} alt="Chilli" class="chilli-image" />
            <div class="deal-content">
                <h2 class="deal-title">
                    <span class="highlighted-text">Delicious</span><br />
                    SPECIAL DEAL OFFER FOR THIS WEEK
                </h2>
                <p class="deal-description">GRILLED BEEF MEAT ONLY <span class="price">$59</span></p>
                <p class="deal-detail">
                    Restaurant, where culinary excellence meets warm hospitality in
                    every dish we serve nestled in the heart of the city.
                </p>
                <button class="order-btn">ORDER NOW</button>
            </div>
            <div class="deal-image">
                <img src={tomato} alt="Tomato" class="tomato-image" />
                <img src={chickenSteak} alt="Steak" class="steak-image" />
                {/* <img src={chilly} alt="Chilli" class="chilli-image" /> */}

                <div class="price-tag">ONLY $59</div>
            </div>
        </div>

    )
}

export default Section3