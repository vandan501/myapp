import React from 'react';
import { Link } from 'react-router-dom';
import shoppingcart from "../assests/image/shopping-cart.png";
import magnifier from "../assests/image/magnifier.png";

const Header = () => {
    return (
        <>
        <div className="headerWrapper">
          <header className="header navbar-area global-header">
            <div className="resonsive-nav d-none">
              <div className="container">
                <div className="mean-container">
                  <div className="mean-bar">
                    <Link 
                      to="#"
                      className="meanmenu-reveal"
                      style={{ right: 0, left: "auto" }}
                    >
                      <span />
                      <span />
                      <span />
                    </Link>
                    <nav className="mean-nav">
                      <form className="search-box">
                        <input
                          type="text"
                          defaultValue=""
                          name="search"
                          className="input-search"
                          placeholder="Search for anything"
                        />
                        <button type="submit">
                          <img src={magnifier} alt="" />
                        </button>
                      </form>
                      <ul
                        className="list-unstyled navbar-nav ml-auto"
                        style={{ display: "none" }}
                      >
                        <li className="position-relative menu-item">
                          <Link  to="#" className="link menu-dropdown">
                            Home
                          </Link>
                          <Link 
                            className="mean-expand"
                            to="#"
                            style={{ fontSize: 18 }}
                          >
                            +
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link  to="#" className="active dropdown-item">
                                eLearning School
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Vendor Certification eTraining{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Online Training School{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Distance Learning{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Language School{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Modern Schooling{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Yoga Training{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Health Coaching{" "}
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="position-relative menu-item">
                          <Link  to="#" className="link menu-dropdown">
                            Pages{" "}
                          </Link>
                          <Link 
                            className="mean-expand"
                            to="#"
                            style={{ fontSize: 18 }}
                          >
                            +
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link  to="#" className="active dropdown-item">
                                eLearning School
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Vendor Certification eTraining{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Online Training School{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Distance Learning{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Language School{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Modern Schooling{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Yoga Training{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Health Coaching{" "}
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="position-relative menu-item">
                          <Link  to="#" className="link menu-dropdown">
                            Courses{" "}
                          </Link>
                          <Link 
                            className="mean-expand"
                            to="#"
                            style={{ fontSize: 18 }}
                          >
                            +
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link  to="#" className="active dropdown-item">
                                eLearning School
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Vendor Certification eTraining{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Online Training School{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Distance Learning{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Language School{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Modern Schooling{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Yoga Training{" "}
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item new">
                                Health Coaching{" "}
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="position-relative menu-item">
                          <Link  to="#" className="link menu-dropdown">
                            Events{" "}
                          </Link>
                          <Link 
                            className="mean-expand"
                            to="#"
                            style={{ fontSize: 18 }}
                          >
                            +
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Event Style One
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Events Style Two
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Single Event
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="position-relative menu-item">
                          <Link  to="#" className="link menu-dropdown">
                            Shop
                          </Link>
                          <Link 
                            className="mean-expand"
                            to="#"
                            style={{ fontSize: 18 }}
                          >
                            +
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Product
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Single Product
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Checkout
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="position-relative menu-item">
                          <Link  to="#" className="link menu-dropdown">
                            Blog
                          </Link>
                          <Link 
                            className="mean-expand"
                            to="#"
                            style={{ fontSize: 18 }}
                          >

                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Blog One Column
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Blog Two Column
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Blog Three Column
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Blog Four Column
                              </Link>
                            </li>
                            <li>
                              <Link  to="#" className="dropdown-item">
                                Single Blog
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="position-relative menu-item">
                          <Link  to="#" className="link menu-dropdown">
                            Contact
                          </Link>
                        </li>
                      </ul>
                      <div className="others-option d-flex align-items-center">
                        <div className="option-item">
                          <div className="cart-btn">
                            <Link  to="#" className="link">
                              <img
                                src={shoppingcart}
                                alt=""
                                height="22px"
                                width="22px"
                                style={{ maxWidth: "none" }}
                              />
                              <span className="mini-cart-count">0</span>
                            </Link>
                          </div>
                        </div>
                        <div className="option-item">
                          <Link  to="#" className="link default-btn">
                            <i className="fas fa-user" /> Login/Register
                            <span
                              className="effect"
                              style={{ top: "46.5px", left: "101.172px" }}
                            />
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="logo">
                    <Link  to="#">
                      <img
                        src="https://elearning.ashoka.edu.in/static/ashokauniversity-theme/images/logo.929dadcb5be9.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="navWrapper">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link  to="#" className="logo-wrapper">
                    <img
                      src="https://elearning.ashoka.edu.in/static/ashokauniversity-theme/images/logo.929dadcb5be9.png"
                      alt="logo"
                    />
                  </Link>
                  <div className="collapse navbar-collapse mean-menu">
                    <form className="search-box">
                      <input
                        type="text"
                        defaultValue=""
                        name="search"
                        className="input-search"
                        placeholder="Search for anything"
                      />
                      <button type="submit">
                        <img src={magnifier} alt="" />
                      </button>
                    </form>
                    <ul className="navbar-nav ml-auto list-unstyled">
      <li className="position-relative menu-item">
        <Link to="/" className="link menu-dropdown active">
          Home
        </Link>
      </li>
      <li className="position-relative menu-item">
        <Link to="#" className="link menu-dropdown">
          Pages
        </Link>
      </li>
      <li className="position-relative menu-item">
        <Link to="/courses" className="link menu-dropdown">
          Courses
        </Link>
      </li>
      <li className="position-relative menu-item">
        <Link to="/events" className="link menu-dropdown">
          Events
        </Link>
      </li>
      <li className="position-relative menu-item">
        <Link to="/shop" className="link menu-dropdown">
          Shop
        </Link>
      </li>
      <li className="position-relative menu-item">
        <Link to="/blog" className="link menu-dropdown">
          Blog
        </Link>
      </li>
      <li className="position-relative menu-item">
        <Link to="/contact" className="link menu-dropdown">
          Contact
        </Link>
      </li>
    </ul>
    <div className="others-option d-flex align-items-center">
                        <div className="option-item">
                          <div className="cart-btn">
                            <Link  to="#" className="link">
                              <img
                                src={shoppingcart}
                                alt=""
                                height="22px"
                                width="22px"
                                style={{ maxWidth: "none" }}
                              />
                              <span className="mini-cart-count">0</span>
                            </Link>
                          </div>
                        </div>
                        <div className="option-item">
                          <Link  to="#" className="link default-btn">
                            <i className="fas fa-user" /> Login/Register
                            <span
                              className="effect"
                              style={{ top: "46.5px", left: "101.172px" }}
                            />
                          </Link>
                        </div>
                      </div>
                    {/* <div className="others-option d-flex align-items-center">
                      <div className="option-item">
                        <div className="secondary">
                          <div className="mobile-nav-item hidden-mobile nav-item">
                            <Link 
                              className="help-link"
                              to="http://edx.readthedocs.io/projects/open-edx-learner-guide/en/open-release-ironwood.master/SFD_dashboard_profile_SectionHead.html"
                              target="_blank"
                            >
                              Help
                            </Link>
                          </div>
                          <div className="nav-item hidden-mobile">
                            <Link  to="/dashboard" className="menu-title">
                              <img
                                className="user-image-frame"
                                src="/static/images/profiles/default_50.3455a6581573.png"
                                alt=""
                              />
                              <span className="sr-only">Dashboard for:</span>
                              <span className="username">manan</span>
                            </Link>
                          </div>
                          <div
                            className="nav-item hidden-mobile nav-item-dropdown"
                            tabIndex={-1}
                          >
                            <div
                              className="toggle-user-dropdown"
                              role="button"
                              aria-label="Options"
                              menu=""
                              aria-expanded="false"
                              tabIndex={0}
                              aria-controls="user-menu"
                            >
                              <span className="fa fa-caret-down" aria-hidden="true" />
                            </div>
                            <div
                              className="dropdown-user-menu hidden"
                              aria-label="More"
                              options=""
                              role="menu"
                              id="user-menu"
                              tabIndex={-1}
                            >
                              <div className="mobile-nav-item dropdown-item dropdown-nav-item">
                                <Link  to="/dashboard" role="menuitem">
                                  Dashboard
                                </Link>
                              </div>
                              <div className="mobile-nav-item dropdown-item dropdown-nav-item">
                                <Link  to="/u/manan" role="menuitem">
                                  Profile
                                </Link>
                              </div>
                              <div className="mobile-nav-item dropdown-item dropdown-nav-item">
                                <Link  to="/account/settings" role="menuitem">
                                  Account
                                </Link>
                              </div>
                              <div className="mobile-nav-item dropdown-item dropdown-nav-item">
                                <Link  to="/logout" role="menuitem">
                                  Sign Out
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </nav>
              </div>
            </div>
            <div className="other-option-for-responsive">
              <div className="container">
                <div className="dot-menu">
                  <div className="inner">
                    <div className="circle circle-one" />
                    <div className="circle circle-two" />
                    <div className="circle circle-three" />
                  </div>
                </div>
                <div className="container">
                  <div className="option-inner">
                    <form className="search-box">
                      <input
                        type="text"
                        defaultValue=""
                        name="search"
                        className="input-search"
                        placeholder="Search for anything"
                      />
                      <button type="submit">
                        <img src={magnifier} alt="" />
                      </button>
                    </form>
                    <div className="others-option d-flex align-items-center">
                      <div className="option-item">
                        <div className="cart-btn">
                          <Link  to="#" className="link">
                            <img
                              src={shoppingcart}
                              alt=""
                              height="22px"
                              width="22px"
                              style={{ maxWidth: "none" }}
                            />
                            <span className="mini-cart-count">0</span>
                          </Link>
                        </div>
                      </div>
                      <div className="option-item">
                        <Link  to="#" className="link default-btn">
                          <i className="fas fa-user" /> Login/Register
                          <span
                            className="effect"
                            style={{ top: "46.5px", left: "101.172px" }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </>
      
    );
};

export default Header;
