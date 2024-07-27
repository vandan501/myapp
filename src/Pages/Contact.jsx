import React from "react";
import "../assests/css/custom.css";
import crosImg from "../assests/image/shape8.svg"
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="custom-page-title-section">
      <img src={crosImg} alt="X" className="cross-icon"/>
        <h1>Contact</h1>
        <div className="back-to-page">
          <Link to="/">Home</Link> / <strong>Contact</strong>
        </div>
      </div>
      <div className="contact-page-section">
        <div className="left-side">
          <div className="heading-section">
            <h3>CONTACT DETAILS</h3>
            <h1>Get in Touch</h1>
            <p>
              We are always here to help you. In case of any queries, do not
              hesitate to reach out to us.
            </p>
          </div>
          <div className="our-address">
            <div className="icon-section">
              <CiLocationOn fill="#c4122f" className="myicon" />
            </div>

            <div className="info">
              <h1>Our Address</h1>
              <p>
                Ashoka University, NH 44, Rajiv Gandhi Education City, Sonipat,
                Haryana 131029
              </p>
            </div>
          </div>
          <div className="uni">
            <div className="icon-section">
              <FaUniversity fill="#c4122f" className="myicon" />
            </div>
            <div className="info">
              <h1>Ashoka University</h1>
              <p>www.ashoka.edu.in</p>
            </div>
          </div>
          <div className="email">
            <div className="icon-section">
              <AiOutlineMail className="myicon" fill="#c4122f" />
            </div>
            <div className="info">
              <h1>E-mail</h1>
              <p>
                {" "}
                Mail:<span>systems.support@ashoka.edu.in</span>
              </p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="contact-us-form">
            <div className="contact-form">
              <h2>Ready to Get Started?</h2>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" className="gdpr-term" />
                  Accept{" "}
                  <Link to="https://learn.ashoka.edu.in/terms-conditions/">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link to="https://learn.ashoka.edu.in/privacy-policy/">
                    privacy policy
                  </Link>
                  .
                </label>
              </div>
              <button type="submit" className="default-btn">
                Send Message
              </button>
            </div>
            <div />
          </div>
        </div>
      </div>

      <div className="google-map-section">
        <iframe
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=Ashoka%20University%2C%20NH%2044%2C%20Rajiv%20Gandhi%20Education%20City%2C%20Sonipat%2C%20Haryana%20131029&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
          title="Ashoka University, NH 44, Rajiv Gandhi Education City, Sonipat, Haryana 131029"
          aria-label="Ashoka University, NH 44, Rajiv Gandhi Education City, Sonipat, Haryana 131029"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </div>
  );
};
export default Contact;
