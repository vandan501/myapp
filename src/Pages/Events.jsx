import React, { useState } from "react";
import "../assests/css/custom.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import crosImg from "../assests/image/shape8.svg";
import image1 from '../assests/image/shape4.png';
import image2 from '../assests/image/circle-border.png';
// import image3 from './path_to_image3';

const Events = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  return (
    <div className="event-page-container">
      <div className="custom-page-title-section">
        <img src={crosImg} alt="X" className="cross-icon" />
        <h1>Events</h1>
        <div className="back-to-page">
          <Link to="/">Home</Link> / <strong>Events</strong>
        </div>
      </div>

      <div className="tab-container">
        <div
          className={`tab ${activeTab === "ALL" ? "active" : ""}`}
          onClick={() => setActiveTab("ALL")}
        >
          ALL
        </div>
        <div
          className={`tab ${activeTab === "Happening" ? "active" : ""}`}
          onClick={() => setActiveTab("Happening")}
        >
          Happening
        </div>
        <div
          className={`tab ${activeTab === "Upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("Upcoming")}
        >
          Upcoming
        </div>
        <div
          className={`tab ${activeTab === "Expired" ? "active" : ""}`}
          onClick={() => setActiveTab("Expired")}
        >
          Expired
        </div>
      </div>
      <div className="event-container">
        <div className="event-card">
          <img
            src="https://images.pexels.com/photos/5905706/pexels-photo-5905706.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Event"
            className="event-image"
          />
          <div className="event-date">June 24, 2020</div>
          <div className="event-details">
            <div className="event-title">
              International Conference on Special Needs Education
            </div>
            <div className="event-location">
              <SlLocationPin className="loc-icon" /> Istanbul, Turkey
            </div>
          </div>
        </div>
        <div className="event-card">
          <img
            src="https://images.pexels.com/photos/5905706/pexels-photo-5905706.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Event"
            className="event-image"
          />
          <div className="event-date">June 24, 2020</div>
          <div className="event-details">
            <div className="event-title">
              International Conference on Special Needs Education
            </div>
            <div className="event-location">
              <SlLocationPin className="loc-icon" /> Istanbul, Turkey
            </div>
          </div>
        </div>
        <div className="event-card">
          <img
            src="https://images.pexels.com/photos/5905706/pexels-photo-5905706.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Event"
            className="event-image"
          />
          <div className="event-date">June 24, 2020</div>
          <div className="event-details">
            <div className="event-title">
              International Conference on Special Needs Education
            </div>
            <div className="event-location">
              {" "}
              <SlLocationPin className="loc-icon" /> Istanbul, Turkey
            </div>
          </div>
        </div>
        <div className="event-card">
          <img
            src="https://images.pexels.com/photos/5905706/pexels-photo-5905706.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Event"
            className="event-image"
          />
          <div className="event-date">June 24, 2020</div>
          <div className="event-details">
            <div className="event-title">
              International Conference on Special Needs Education
            </div>
            <div className="event-location">
              <SlLocationPin className="loc-icon" /> Istanbul, Turkey
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe-container">
      <div className="text-container">
        <p className="subtitle">GO AT YOUR OWN PACE</p>
        <h1 className="title">Subscribe to Our Newsletter</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="form-container">
        <input type="email" placeholder="Enter your email address" className="email-input" />
        <button className="subscribe-button">Subscribe Now</button>
      </div>
      <div className="images-container">
        <img src={image1} alt="Decoration" className="decor-image decor-image-1" />
        <img src={image2} alt="Decoration" className="decor-image decor-image-2" />
        <img src="" alt="Decoration" className="decor-image decor-image-3" />
      </div>
    </div>
    </div>
  );
};
export default Events;
