import React from 'react';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { BiSolidInbox } from "react-icons/bi";
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
             <h2>Learniphi</h2>
            </Link>
            <p>
              Working to bring significant changes in online-based learning by doing extensive research for course curriculum prepration,student engagements,and looking forward to the flexible education!
            </p>
            <ul className="social-link">
              <li>
                <Link  to="#" className="logo d-block">
                  {" "}
              <FaTwitter/>

                </Link>
              </li>
              <li>
                <Link  to="#" className="logo d-block">
                    <FaFacebookF/>
                </Link>
              </li>
              <li>
                <Link  to="#" className="logo d-block">
                  {" "}
                  <FaInstagram/>
                </Link>
              </li>
              <li>
                <Link  to="#" className="logo d-block">
                  {" "}
                  <GrLinkedinOption />
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
                <Link  to="#">Become A Teacher</Link>
              </li>
              <li>
                <Link  to="#">Instructor/Student Profile</Link>
              </li>
              <li>
                <Link  to="/courses">Courses</Link>
              </li>
              <li>
                <Link  to="#">LP Checkout</Link>
              </li>
              <li>
                <Link  to="#">Terms &amp; Conditions</Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="single-footer-widget col-lg-4 col-md-4 col-sm-12 widget_nav_menu">

          <h3>Explore</h3>
          <div className="menu-footer-resources-container">
            <ul id="menu-footer-resources" className="menu">
              <li>
                <Link  to="/">Home</Link>
              </li>
              <li>
                <Link  to="#">Blog</Link>
              </li>
              <li>
                <Link  to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link  to="#">Become A Teacher</Link>
              </li>

              <li>
                <Link  to="/courses">Courses</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-none single-footer-widget col-lg-3 col-md-3 widget_ecademy_contact_info">
          <h3>Address</h3>
          <ul className="footer-contact-info">
            <li>
            <CiLocationOn  fill='#fff'  className='add-icons'/>
              <Link  to="#" target="_blank">
               B-810-811,Empire Business Hub,Science City Road,Ahmedabad -380060,Gujarat,India 
              </Link>
            </li>
            <li>
            <MdOutlineWifiCalling3 fill='#fff' className='add-icons' />
              <Link  to="tel:+91-79-4849-6969">+91-79-4849-6969</Link>
            </li>
            <li>
            <CiMail fill='#fff' className='add-icons'/>
              <Link  to="mailto:hello@ecademy.com">hello@learniphi.com</Link>
            </li>
            <li>
              <BiSolidInbox fill='#fff' className='add-icons'/>
              <Link  to="tel:+91-79-4849-6969">+91-79-4849-6969</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="row align-items-center" id='footer-last-row'>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center" >
            <p>©️2021 Learniphi is Proudly Crafted by <strong><span className='learniphi-footer-name'>Learniphi</span></strong></p>
          </div>
          <div className="col-lg-6 col-md-6">
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
