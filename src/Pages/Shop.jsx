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

      <h1>Shop</h1>
    </div>
  );
};
export default Shop;
