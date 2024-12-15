import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo}alt="Chai Kadai Logo" />
        </div>

        {/* Navigation Menu */}
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#menu">Our Menu</a>
          <a href="#booking">Party Booking</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Testimonials</a>
        </nav>

        {/* Contact and Button */}
        <div className="contact">
          <span className="phone">
            <i className="fa fa-phone" aria-hidden="true"></i> Call: +99 9999 999
          </span>
          <button className="party-booking-btn">Party Booking</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

