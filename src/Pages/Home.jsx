import React, { useRef } from 'react';
import  { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import { FaRegUser } from "react-icons/fa";
import Odometer from 'odometer';
import '../assests/css/odometer-theme-default.css';
import courseImage from "../assests/image/course-image1.jpg";
import avatar from "../assests/image/avatar.jpg";
import agenda from "../assests/image/agenda.png"
import group from "../assests/image/group.png"
import bannerShape1 from "../assests/image/banner-shape1.png";
import bannerShape2 from "../assests/image/banner-shape2.png";
import bannerShape3 from "../assests/image/banner-shape3.png";
import logo1 from "../assests/image/logo-1.png";
import logo2 from "../assests/image/logo-2.png";
import logo3 from "../assests/image/logo-3.png";
import logo4 from "../assests/image/logo-4.png";
import logo5 from "../assests/image/logo-5.png";
import logo6 from "../assests/image/logo-6.png";
import brainstorm from "../assests/image/brainstorm.png";
import computer from "../assests/image/computer.png";
import checked from "../assests/image/checked.png";
import globe from "../assests/image/globe.png";
import aboutImg1 from "../assests/image/about-img1.png";
import aboutImg2 from "../assests/image/about-img2.png";
import aboutImg3 from "../assests/image/about-img3.png";
import aboutImg4 from "../assests/image/about-img4.png";
import experience from "../assests/image/experience.png";
import timeLeft from "../assests/image/time-left.png";
import tutorials from "../assests/image/tutorials.png";
import selfGrowth from "../assests/image/self-growth.png";
import shape1 from "../assests/image/shape1.png";
import shape2 from "../assests/image/shape2.png";
import shape3 from "../assests/image/shape3.png";
import shape4 from "../assests/image/shape4.png";
import shape5 from "../assests/image/shape5.png";
import shape6 from "../assests/image/shape6.png";
import shape7 from "../assests/image/shape7.png";
import shape8 from "../assests/image/shape8.png";
import shape9 from "../assests/image/shape9.png";
import { FaPlay } from "react-icons/fa6";

import OwlCarousel from 'react-owl-carousel';
import man from "../assests/image/man.jpg"
import quotation from "../assests/image/quotation.png"
import courseImage1 from "../assests/image/course-image1.jpg";
import videoImg1 from "../assests/image/video-img1.jpg";
// import user from "../assests/image/user.png"
import user1 from "../assests/image/user1.jpg"
// import user2 from "../assests/image/user2.jpg"
// import user3 from "../assests/image/user3.jpg"
import blogPostImg2 from "../assests/image/blog-post-img2-750x500.jpg";
import calendar from "../assests/image/calendar.png";
import secondBlog from "../assests/image/second-blog.jpg";
import blog3 from "../assests/image/blog-3.jpg";
import footerUser from "../assests/image/footerUser.png";
import agenda1 from "../assests/image/agenda-1.png";
import manWithLaptop from "../assests/image/man-with-laptop.png";

const Home = () => {

  const number1Ref = useRef(null);
  const number2Ref = useRef(null);
  const number3Ref = useRef(null);
  const number4Ref = useRef(null);



  useEffect(() => {
 
    // Initialize odometers
  const odometers = [
    new Odometer({ el: number1Ref.current, value: 0 }),
    new Odometer({ el: number2Ref.current, value: 0 }),
    new Odometer({ el: number3Ref.current, value: 0 }),
    new Odometer({ el: number4Ref.current, value: 0 }),
  ];

  // Inject values using jQuery
  $('#number1').text(250);
  $('#number2').text(1200);
  $('#number3').text(75);
  $('#number4').text(98);

  // Trigger the odometer animation with a delay
  setTimeout(() => {
    $('#number1').text(500);
    $('#number2').text(1500);
    $('#number3').text(100);
    $('#number4').text(99);
  }, 1000);
  return () => {
    odometers.forEach((odometer) => {
      odometer.el.innerHTML = 0;
    });
  };
   
  }, []);
    return (
       <>
  <div className="bodyWrapper">
    <div className="main-banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="manner-banner-content">
              <h1>The World's Leading Distance Learning Provider</h1>
              <p>
                Flexible easy to access learning opportunities can bring a
                significant change in how individuals prefer to learn! The eCademy
                can offer you to enjoy the beauty of eLearning!
              </p>
              <a href="#" className="default-btn">
                <FaRegUser fill='#fff'/> Join For Free{" "}
                <span
                  className="effect"
                  style={{ top: "46.5px", left: "101.172px" }}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="main-banner-courses-list">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-course-box">
                    <div className="courses-image">
                      <a href="#" className="d-block image">
                        <img
                          src={courseImage}
                          alt="course image"
                        />
                      </a>
                      <div className="course-price">
                        <span className="free">Free</span>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="course-author d-flex align-items-center">
                        <img src={avatar} alt="avatar" />
                        <span>
                          <a href="#">Jone Smit </a>
                        </span>
                      </div>
                      <h3>
                        <a href="#">
                          Node.js for Beginners: Go From Zero to Hero with
                          Node.js | eCademy
                        </a>
                      </h3>
                      <p />
                      <p>
                        Learning Node.js is always exciting and it pushes
                        students to achieve a great career within a very short
                        time!{" "}
                      </p>
                      <p />
                      <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                          <img src={agenda} alt="" /> 9
                          Lessons
                        </li>
                        <li>
                          <img src={group} alt="" /> 104
                          Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-course-box">
                    <div className="courses-image">
                      <a href="#" className="d-block image">
                        <img
                          src={courseImage1}
                          alt="course image"
                        />
                      </a>
                      <div className="course-price">
                        <span className="free">$49</span>
                      </div>
                    </div>
                    <div className="course-content">
                      <div className="course-author d-flex align-items-center">
                        <img src={avatar} alt="avatar" />
                        <span>
                          <a href="#">Jone Smit </a>
                        </span>
                      </div>
                      <h3>
                        <a href="#">
                          Node.js for Beginners: Go From Zero to Hero with
                          Node.js | eCademy
                        </a>
                      </h3>
                      <p />
                      <p>
                        Learning Node.js is always exciting and it pushes
                        students to achieve a great career within a very short
                        time!{" "}
                      </p>
                      <p />
                      <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                        <li>
                          <img src={agenda} alt="" /> 9
                          Lessons
                        </li>
                        <li>
                          <img src={group} alt="" /> 104
                          Students
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="banner-shape1"
                data-speed="0.06"
                data-revert="true"
              >
                <img src={bannerShape1} alt="shape image" />
              </div>
              <div
                className="banner-shape2"
                data-speed="0.06"
                data-revert="true"
              >
                <img src={bannerShape2} alt="shape image" />
              </div>
              <div
                className="banner-shape3"
                data-speed="0.06"
                data-revert="true"
              >
                <img src={bannerShape3} alt="shape image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="partner-area pt-100 pb-70 border-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2  col-sm-3 col-md-3">
            <div className="single-partner-item">
              <img src={logo1} alt="" />
            </div>
          </div>
          <div className="col-lg-2  col-sm-3 col-md-3">
            <div className="single-partner-item">
              <img src={logo2} alt="" />
            </div>
          </div>
          <div className="col-lg-2  col-sm-3 col-md-3">
            <div className="single-partner-item">
              <img src={logo3} alt="" />
            </div>
          </div>
          <div className="col-lg-2  col-sm-3 col-md-3">
            <div className="single-partner-item">
              <img src={logo4} alt="" />
            </div>
          </div>
          <div className="col-lg-2  col-sm-3 col-md-3">
            <div className="single-partner-item">
              <img src={logo5} alt="" />
            </div>
          </div>
          <div className="col-lg-2  col-sm-3 col-md-3">
            <div className="single-partner-item">
              <img src={logo6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="partner-area pt-100">
        <div className="section-title">
          <span className="sub-title">Education for everyone</span>
          <h2>Affordable Online Courses and Learning Opportunities </h2>
          <p>
            Finding your own space and utilize better learning options can
            result in faster than the traditional ways. Enjoy the beauty of
            eLearning!
          </p>
        </div>
      </div>
      <div className="featureBox pb-70">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-feature-box">
              <div className="icon">
                <img src={brainstorm} alt="" />
              </div>
              <h3>Learn the Latest Top Skills</h3>
              <p>
                Learning top skills can bring an extra-ordinary outcome in a
                career.
              </p>
              <a href="#" target="__self" className="link-btn">
                Start Now!
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-feature-box">
              <div className="icon">
                <img src={computer} alt="" />
              </div>
              <h3>Learn in Your Own Pace</h3>
              <p>
                Everyone prefers to enjoy learning at their own pace &amp; that
                gives a great result.
              </p>
              <a href="#" target="__self" className="link-btn">
                Start Now!
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-feature-box">
              <div className="icon">
                <img src={checked} alt="" />
              </div>
              <h3>Learn From Industry Experts</h3>
              <p>
                Experienced teachers can assist in learning faster with their
                best approaches!
              </p>
              <a href="#" target="__self" className="link-btn">
                Start Now!
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="single-feature-box">
              <div className="icon">
                <img src={globe} alt="" />
              </div>
              <h3>Enjoy Learning From Anywhere </h3>
              <p>
                We are delighted to give you options to enjoy learning from
                anywhere in the world.
              </p>
              <a href="#" target="__self" className="link-btn">
                Start Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6 ">
                  <div className="image wow fadeInLeft">
                    <img src={aboutImg1} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 ">
                  <div className="image wow fadeInDown">
                    <img src={aboutImg2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 ">
                  <div className="image wow fadeInUp">
                    <img src={aboutImg3} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 ">
                  <div className="image wow fadeInRight">
                    <img src={aboutImg4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <span className="sub-title">Online Learning</span>
              <h2>
                Develop Your Skills, Learn Something New, and Grow Your Skills
                From Anywhere in the World!
              </h2>
              <p>
                We understand better that online-based learning can make a
                significant change to reach students from all over the world!
                Giving options to learn better always can offer the best
                outcomes!
              </p>
              <ul className="features-list">
                <li>
                  <span>
                    <img src={experience} alt="" /> Expert
                    Trainers
                  </span>
                </li>
                <li>
                  <span>
                    <img src={timeLeft} alt="" /> Lifetime
                    Access
                  </span>
                </li>
                <li>
                  <span>
                    <img src={tutorials} alt="" /> Remote
                    Learning
                  </span>
                </li>
                <li>
                  <span>
                    <img src={selfGrowth} alt="" /> Self
                    Development
                  </span>
                </li>
              </ul>
              <a href="#" className="default-btn">
                <FaRegUser fill='#fff'/> View All Courses
                <span
                  className="effect"
                  style={{ top: "46.5px", left: "101.172px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shape1" data-speed="0.06" data-revert="true">
        <img src={shape1} alt="About Us" />
      </div>
      <div className="shape2" data-speed="0.06" data-revert="true">
        <img src={shape2} alt="About Us" />
      </div>
      <div className="shape3" data-speed="0.06" data-revert="true">
        <img src={shape3} alt="About Us" />
      </div>
      <div className="shape4" data-speed="0.06" data-revert="true">
        <img src={shape4} alt="About Us" />
      </div>
    </div>
    <div className="container">
      <div className="partner-area pt-100">
        <div className="section-title">
          <span className="sub-title">Learn At Your Own Pace</span>
          <h2>Learniphi Popular Courses </h2>
          <p>
            Explore all of our courses and pick your suitable ones to enroll and
            start learning with us! We ensure that you will never regret it!
          </p>
        </div>
      </div>
      <div className="featureBox pb-70">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-course-box">
              <div className="courses-image">
                <a href="#" className="d-block image">
                  <img
                    src={courseImage1}
                    alt="course image"
                  />
                </a>
                <div className="course-price">
                  <span className="free">$59</span>
                </div>
              </div>
              <div className="course-content">
                <div className="course-author d-flex align-items-center">
                  <img src={avatar} alt="avatar" />
                  <span>
                    <a href="#">Jone Smit </a>
                  </span>
                </div>
                <h3>
                  <a href="#">
                    Deep Learning a-z™: Hands-on Artificial Neural Networks
                  </a>
                </h3>
                <p />
                <p>
                  This master level course is for you if you are looking to
                  learn the DL &amp; ANN topics in and out within a short time!
                </p>
                <p />
                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                  <li>
                    <img src={agenda} alt="" /> 0 Lessons
                  </li>
                  <li>
                    <img src={group} alt="" /> 19 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-course-box">
              <div className="courses-image">
                <a href="#" className="d-block image">
                  <img
                    src={courseImage1}
                    alt="course image"
                  />
                </a>
                <div className="course-price">
                  <span className="free">$49</span>
                </div>
              </div>
              <div className="course-content">
                <div className="course-author d-flex align-items-center">
                  <img src={avatar} alt="avatar" />
                  <span>
                    <a href="#">Jone Smit </a>
                  </span>
                </div>
                <h3>
                  <a href="#">
                    Java Programming Masterclass for Software Developers
                  </a>
                </h3>
                <p />
                <p>
                  Java is the most stable and vastly uses a top programming
                  language for mobile, web, and desktop environments.{" "}
                </p>
                <p />
                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                  <li>
                    <img src={agenda} alt="" /> 0 Lessons
                  </li>
                  <li>
                    <img src={group} alt="" /> 10 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-course-box">
              <div className="courses-image">
                <a href="#" className="d-block image">
                  <img
                    src={courseImage1}
                    alt="course image"
                  />
                </a>
                <div className="course-price">
                  <span className="free">$39</span>
                </div>
              </div>
              <div className="course-content">
                <div className="course-author d-flex align-items-center">
                  <img src={avatar} alt="avatar" />
                  <span>
                    <a href="#">Jone Smit </a>
                  </span>
                </div>
                <h3>
                  <a href="#">
                    Node.js for Beginners: Go From Zero to Hero with Node.js |
                    eCademy
                  </a>
                </h3>
                <p />
                <p>
                  Learning Node.js is always exciting and it pushes students to
                  achieve a great career within a very short time!{" "}
                </p>
                <p />
                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                  <li>
                    <img src={agenda} alt="" /> 9 Lessons
                  </li>
                  <li>
                    <img src={group} alt="" /> 104 Students
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="courses-info">
              <p>
                Enjoy the top notch learning methods and achieve next level
                skills! You are the creator of your own career &amp; we will
                guide you through that.{" "}
                <a href="#">
                  <strong>Register Free Now!</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="funfacts-and-feedback-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="w-100">
              <div className="widgetWrap">
                <div className="feedback-content">
                  <span className="sub-title">Distance learning</span>
                  <h2>
                    Flexible Study at Your Own Pace, According to Your Own Needs
                  </h2>
                  <p>
                    With the eCademy, you can study whenever and wherever you
                    choose. We have students in over 175 countries and a global
                    reputation as a pioneer in the field of flexible learning.
                    Our teaching also means, if you travel often or need to
                    relocate, you can continue to study wherever you go.
                  </p>
                  <OwlCarousel
      className="feedback-slides"
      loop
      items={1}
      autoplay
      nav={false}
      dots
      animateOut="fadeOut"
    >
      <div className="single-feedback-item">
                          <p>
                            Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            Risus commodo viverra maecenas accumsan lacus vel
                            facilisis. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.
                          </p>
                          <div className="client-info d-flex align-items-center">
                            <img
                              className="shadow rounded-circle"
                              src={user1}
                              alt="David Warner"
                            />
                            <div className="title">
                              <h3>David Warner</h3>
                              <span>QA Developer</span>
                            </div>
                          </div>
                          <img
                            className="quotes"
                            src={quotation}
                            alt=""
                          />
      </div>
     <div className="single-feedback-item">
                      <p>
                        Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore.
                      </p>
                      <div className="client-info d-flex align-items-center">
                        <img
                          className="shadow rounded-circle"
                          src={user1}
                          alt="David Warner"
                        />
                        <div className="title">
                          <h3>David Warner</h3>
                          <span>QA Developer</span>
                        </div>
                      </div>
                      <img
                        className="quotes"
                        src={quotation}
                        alt=""
                      />
      </div>
     <div className="single-feedback-item">
                      <p>
                        Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore.
                      </p>
                      <div className="client-info d-flex align-items-center">
                        <img
                          className="shadow rounded-circle"
                          src={user1}
                          alt="David Warner"
                        />
                        <div className="title">
                          <h3>David Warner</h3>
                          <span>QA Developer</span>
                        </div>
                      </div>
                      <img
                        className="quotes"
                        src={quotation}
                        alt=""
                      />
      </div>
                   
    </OwlCarousel>
                  <div className="feedback-slides">
                  
                    
                  </div>
                  <div className="feedback-info">
                    <p>
                      Not a member yet? <a href="#">Register now</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="w-100">
              <div className="widgetWrap">
                <div className="funfacts-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <div className="single-funfacts-box">
                        <h3 className="odometer" id="number1" ref={number1Ref}></h3>
                        <p>Finished Sessions</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <div className="single-funfacts-box">
                        <h3 className="odometer" id="number2" ref={number2Ref}></h3>
                        <p>Enrolled Learners</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <div className="single-funfacts-box">
                        <h3 className="odometer" id="number3" ref={number3Ref}></h3>
                        <p>Online Instructors</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <div className="single-funfacts-box">
                        <h3 className="odometer" id="number4" ref={number4Ref}></h3>
                        <p>Satisfaction Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="video-box">
              <div className="image">
                <img src={videoImg1} alt="" />
              </div>
              <a href="#" className="video-btn">
              <FaPlay fill='#fff' color='#fff' className='video-play-icon' />
              </a>
              <div className="shape1">
                <img src={shape9} alt="" />
              </div>
              <div className="shape2">
                <img src={shape2} alt="" />
              </div>
              <div className="shape3">
                <img src={shape3} alt="" />
              </div>
              <div className="shape4">
                <img src={shape4} alt="" />
              </div>
              <div className="shape9">
                <img src={shape8} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="get-instant-courses-area">
      <div className="container">
        <div className="get-instant-courses-inner-area">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="get-instant-courses-content">
                <span className="sub-title">
                  Get Instant Access to the Free
                </span>
                <h2>Self Development Course</h2>
                <p>
                  eCademy Self Development Course can assist you in bringing the
                  significant changes in personal understanding and reshaping
                  the confidence to achieve the best from your career! We trust
                  that learning should be enjoyable, and only that can make
                  substantial changes to someone!
                </p>
                <a href="#" className="link default-btn">
                <FaRegUser fill='#fff'/> 
                   Start For Free
                  <span
                    className="effect"
                    style={{ top: "46.5px", left: "101.172px" }}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="get-instant-courses-image">
                <img
                  src={man}
                  className="mx-100 h-auto"
                  alt=""
                />
                <div className="shape7">
                  <img src={shape4} alt="" />
                </div>
                <div className="shape6">
                  <img src={shape6} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="shape5">
            <img src={shape5} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="partner-area pt-100">
        <div className="section-title">
          <span className="sub-title">News and Blogs</span>
          <h2>Our Latest Publications</h2>
          <p>
            We always give extra care to our student's skills improvements and
            feel excited to share our latest research and learnings!
          </p>
        </div>
      </div>
      <div className="featureBox pb-70 blog-area">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <a href="#">
                  <img src={blogPostImg2} alt="" />
                </a>
              </div>
              <div className="post-content">
                <a href="#" className="category">
                  Online
                </a>
                <h3>
                  <a href="#">What is the Mlb Summer Slugger Program?</a>
                </h3>
                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                  <li>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src={footerUser}
                        className="rounded-circle"
                        alt=""
                      />
                      <span>Jone Smit</span>
                    </div>
                  </li>
                  <li>
                    <img
                      src={calendar}
                      className="calendar"
                      alt=""
                    />{" "}
                    2020-05-06
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <a href="#">
                  <img src={secondBlog} alt="" />
                </a>
              </div>
              <div className="post-content">
                <a href="#" className="category">
                  Education
                </a>
                <h3>
                  <a href="#">28 Student-Centered Instructional Strategies</a>
                </h3>
                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                  <li>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src={footerUser}
                        className="rounded-circle"
                        alt=""
                      />
                      <span>Jone Smit</span>
                    </div>
                  </li>
                  <li>
                    <img
                      src={calendar}
                      className="calendar"
                      alt=""
                    />{" "}
                    2020-05-06
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <a href="#">
                  <img src={blog3} alt="" />
                </a>
              </div>
              <div className="post-content">
                <a href="#" className="category">
                  Learning
                </a>
                <h3>
                  <a href="#">100 Blended Learning Resources for Teachers</a>
                </h3>
                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                  <li>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src={footerUser}
                        className="rounded-circle"
                        alt=""
                      />
                      <span>Jone Smit</span>
                    </div>
                  </li>
                  <li>
                    <img
                      src={calendar}
                      className="calendar"
                      alt=""
                    />{" "}
                    2020-05-06
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="view-all-courses-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="view-all-courses-content">
              <span className="sub-title">Distant Learning</span>
              <h2>Feel Like You Are Attending Your Classes Physically!</h2>
              <p>
                Learniphi training programs can bring you a super exciting experience
                of learning through online! You never face any negative
                experience while enjoying your classes virtually by sitting in
                your comfort zone. Our flexible learning initiatives will help
                you to learn better and quicker than the traditional ways of
                learning skills.
              </p>
              <a href="#" className="link default-btn">
                <img
                  src={agenda1}
                  alt=""
                  className="defaultImg"
                />{" "}
                View Courses
                <span
                  className="effect"
                  style={{ top: "46.5px", left: "101.172px" }}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="view-all-courses-image">
              <img src={manWithLaptop} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="shape1">
        <img src={shape1} alt="" />
      </div>
      <div className="shape9">
        <img src={shape8} alt="" />
      </div>
    </div>
    <div className="premium-access-area">
      <div className="container">
        <div className="premium-access-content">
          <span className="sub-title">Affordable Certification</span>
          <h2>Get Your Quality Skills Certificate Through Online Exam</h2>
          <p>
            Students friendly pricing for the certificate programs helps
            individuals to get their skill certificate easier than ever!
          </p>
          <a href="#" className="link default-btn">
            <img
              src={agenda1}
              alt=""
              className="defaultImg"
            />{" "}
            Get Started Now
            <span
              className="effect"
              style={{ top: "46.5px", left: "101.172px" }}
            />
          </a>
        </div>
      </div>
      <div className="shape3">
        <img src={shape3} alt="" />
      </div>
      <div className="shape4">
        <img src={shape4} alt="" />
      </div>
      <div className="shape8">
        <img src={shape7} alt="" />
      </div>
    </div>
  </div>
  <div className="footerWrapper" />

</>

    );
};

export default Home;
