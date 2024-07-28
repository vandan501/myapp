import React from "react";
import "../assests/css/custom.css";
import { Link } from "react-router-dom";
import crosImg from "../assests/image/shape8.svg";

const Shop = () => {
  return (
    <div className="shop-page-container">
      <div className="custom-page-title-section">
        <img src={crosImg} alt="X" className="cross-icon" />
        <h1>Shop</h1>
        <div className="back-to-page">
          <Link to="/">Home</Link> / <strong>Shop</strong>
        </div>
      </div>
      <div className="shop-container">
        <div className="results-info">
          <p>Showing 1–6 of 7 results</p>
          <select className="sorting-dropdown">
            <option value="default">Default sorting</option>
          </select>
        </div>
        <div className="shop-cards-container">
          <div className="shop-card">
            <img
              src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Book Cover Softcover"
            />
            <span className="sale">Sale!</span>
            <h2>Book Cover Softcover</h2>
            <p className="price">
              <span className="original-price">$210</span> $200
            </p>
            <button className="shop-button">ADD TO CART</button>
          </div>
          <div className="shop-card">
            <img
              src="https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Motivational Book Cover"
            />
            <h2>Motivational Book Cover</h2>
            <p className="price">
              <span className="original-price">$99</span> $89
            </p>
            <button className="shop-button">READ MORE</button>
          </div>
          <div className="shop-card">
            <img
              src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Note Book Mockup"
            />
            <h2>Note Book Mockup</h2>
            <p className="price">$200</p>
            <button className="shop-button">ADD TO CART</button>
          </div>
        </div>
        <div className="pagination-container">
          <button className="pagination-button active">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">»</button>
        </div>
      </div>
    </div>
  );
};
export default Shop;
