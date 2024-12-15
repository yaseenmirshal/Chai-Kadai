
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Join Our Newsletter</h2>
        <p>Subscribe, follow our newsletter to get more updates</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section logo-section">
          <h3>Chai Kadai</h3>
          <p>
            Temporibus autem quibusdam officiis aut rerum necessitatibus eveniet
            voluta repudiandae.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Popular Food</h3>
          <ul>
            <li>Hamburger</li>
            <li>Chicken Pizza</li>
            <li>Vegetable Roll</li>
            <li>Sea Fish</li>
            <li>Fried Chicken</li>
            <li>French Fries</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Place Your Address Here</p>
          <p>info@chaikadai.com</p>
          <p>+91 999 999 9999</p>
        </div>
        <div className="footer-section">
          <h3>Opening Hour</h3>
          <p>Monday - Friday: 8am - 4pm</p>
          <p>Saturday: 8am - 12am</p>
          <button>Let's Talk</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Chai Kadai. All Rights Reserved.</p>
        <p>
          <a href="s">Privacy Policy</a> | <a href="s">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;