import React from "react";
import "./ProductMenu.css";
import steakImage from "../assets/chicken-steak-removebg-preview.png";
import burgerImage from "../assets/burger.jpg";
import pizzaImage from "../assets/piza1-removebg-preview.png";
import blackBurgerImage from "../assets/black-burger.jpg";
import chickenImage from "../assets/thai_spicy_salad-removebg-preview.png";
import pastaImage from "../assets/club burger.png";
import friesImage from "../assets/shaway.png";

function ProductMenu() {
  const items = [
    { id: 1, image: steakImage, name: "Steak", price: "$50", discount: "$25", rating: "5k" },
    { id: 2, image: burgerImage, name: "Burger", price: "$50", discount: "$25", rating: "5k" },
    { id: 3, image: pizzaImage, name: "Pizza", price: "$50",  rating: "5k" },
    { id: 4, image: blackBurgerImage, name: "Black Burger", price: "$50", discount: "$25", rating: "5k" },
    { id: 5, image: burgerImage, name: "Special Burger", price: "$50", discount: "$25", rating: "5k" },
    { id: 6, image: pastaImage, name: "Pasta", price: "$50", discount: "$25", rating: "5k" },
    { id: 7, image: friesImage, name: "Combo Meal", price: "$50", discount: "$25", rating: "5k" },
    { id: 8, image: chickenImage, name: "Roast Chicken", price: "$50", discount: "$25", rating: "5k" },
  ];

  return (
    <div className="product-menu">
      <h2 className="menu-title">PRODUCT MENU</h2>
      <h3 className="menu-subtitle">EXPLORE LATEST FOOD ITEMS</h3>
      <div className="filter-menu">
        <button className="filter-btn">Show All</button>
        <button className="filter-btn">Fresh Juices</button>
        <button className="filter-btn">Chicken Items</button>
        <button className="filter-btn">Coffee</button>
        <button className="filter-btn">Pizza</button>
      </div>
      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h4 className="product-name">{item.name}</h4>
              <div className="product-rating">⭐️⭐️⭐️⭐️⭐️ ({item.rating})</div>
              <div className="product-pricing">
                <span className="original-price">{item.price}</span>
                <span className="discount-price">{item.discount}</span>
              </div>
              <div className="discount-tag"></div>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">VIEW ALL</button>
    </div>
  );
}

export default ProductMenu;
