import React from "react";
import "./Feedback.css";

import girl from "../assets/girl.avif";
import girl1 from "../assets/girl1.jpeg";
import girl2 from "../assets/girl2.jpeg";
import girl3 from "../assets/girl3.jpeg";

import juice from "../assets/orangejuice.jpg"
import orange from "../assets/slicedorange.avif";


const FeedbackSection = () => {
    return (
        <div className="feedback-section">
            <h5 className="small-title">CUSTOMER FEEDBACK</h5>
            <h2 className="feedback-title">WE'VE LOT'S OFF HAPPY CUSTOMER</h2>
            <h3 className="feedback-subtitle">EXPLORE OUR FEEDBACK</h3>

            <div className="feedback-container">
                
                <div className="left-section">
                    <img
                        src={girl} 
                        alt="Customer"
                        className="customer-img"
                    />
                    <div className="orange-decor">
                        <img src={orange} alt="Orange" /> 
                    </div>
                </div>

        
                <div className="middle-section">
                    <div className="profile-icons">
                        <img src={girl1} alt="Icon 1" />
                        <img src={girl2} alt="Icon 2" />
                        <img src={girl3} alt="Icon 3" />
                    </div>
                    <div className="feedback-text">
                        <p>
                            Renowned for its versatility in the kitchen Red can be prepared
                            various ways from simple steaming boiling to elaborate
                            preparations such
                        </p>
                        <span className="customer-name">SALVADOR I. BURTON</span>
                        <span className="customer-role">Customer</span>
                    </div>
                    <div className="pagination">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>

                
                <div className="right-section">
                    <img
                        src={juice} 
                        alt="Juice"
                        className="juice"
                    />

                </div>
                
            </div>
        </div>
    );
};

export default FeedbackSection;
