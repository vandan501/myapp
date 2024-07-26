import React from 'react';
import whitelogo from "../assests/image/white_logo.png"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
  <div className="container">
    <div className="part" id="part4"></div>
    <div className="box" id="loading">
      <div className="hide p4" />
    </div>
    <div id="withDelay" />
  </div>
  <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="single-footer-widget">
            <Link  to="#" className="logo">
              <img
                src={whitelogo}
                style={{ maxWidth: "100%", height: "auto", width: 190 }}
              />
            </Link>
            <p>
              Plot No. 2, Rajiv Gandhi Education City, National Capital Region
              P.O. Rai, Sonepat Haryana-131029 (India)
            </p>
            <ul className="social-link">
              <li>
                <Link  to="#" className="logo d-block">
                  {" "}
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link  to="#" className="logo d-block">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link  to="#" className="logo d-block">
                  {" "}
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link  to="#" className="logo d-block">
                  {" "}
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link  to="#" className="logo d-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link  to="#" className="logo d-block">
                  <i className="fas fa-university" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="single-footer-widget col-lg-4 col-md-4 col-sm-12 widget_nav_menu">
          <h3>Resources</h3>
          <div className="menu-footer-resources-container">
            <ul id="menu-footer-resources" className="menu">
              <li>
                <Link  to="#">Log In</Link>
              </li>
              <li>
                <Link  to="#">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link  to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="single-footer-widget col-lg-4 col-md-4 col-sm-12 widget_nav_menu">
          <h3>Explore</h3>
          <div className="menu-footer-resources-container">
            <ul id="menu-footer-resources" className="menu">
              <li>
                <Link  to="#">Home</Link>
              </li>
              <li>
                <Link  to="#">Courses</Link>
              </li>
              <li>
                <Link  to="#">About Us</Link>
              </li>
              <li>
                <Link  to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-none single-footer-widget col-lg-3 col-md-3 widget_ecademy_contact_info">
          <h3>Address</h3>
          <ul className="footer-contact-info">
            <li>
              <i className="fas fa-map-marker-alt" />
              <Link  to="#" target="_blank">
                2750 Quadra Street Victoria Road, New York, Canada
              </Link>
            </li>
            <li>
              <i className="fas fa-phone-alt" />
              <Link  to="tel:+1-485-456-0102">+1-485-456-0102</Link>
            </li>
            <li>
              <i className="fas fa-envelope" />
              <Link  to="mailto:hello@ecademy.com">hello@ecademy.com</Link>
            </li>
            <li>
              <i className="fas fa-inbox" />
              <Link  to="tel:+1-485-456-0102">+1-485-456-0102</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
            <p>Copyright ©️ 2022 All Right Reserved by Ashoka university</p>
          </div>
          <div className="col-lg-6 col-md-6 d-none">
            <ul id="menu-footer-menu" className="menu">
              <li
                id="menu-item-26"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-26"
              >
                <Link  to="#">Privacy Policy</Link>
              </li>
              <li
                id="menu-item-25"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"
              >
                <Link  to="#">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="lines">
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  </footer>
</>


    );
};

export default Footer;
