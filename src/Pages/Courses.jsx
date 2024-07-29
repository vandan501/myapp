import React from "react";
import "../assests/css/courses.css";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom"
import { BsFillGrid3X3GapFill } from "react-icons/bs";

import { TfiMenuAlt } from "react-icons/tfi";
import Course from "../Components/Course";
const Courses = () => {
  return (
    <>
      <section className="courses-page-container">
        <div className="page-title">
          <h3 className="title">
            Home <IoIosArrowForward /> Courses
          </h3>
        </div>

        <div className="courses-page-header">
          <div className="course-page-header-left">
            <h1 className="courses-page-title">Courses</h1>
          </div>

          <div className="course-page-header-right">
            <div className="search-bar-div">
              <input placeholder="Search Courses..." className="search-bar" />
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>
            <div className="filter-options">
              <BsFillGrid3X3GapFill className="all-filter" />
              <TfiMenuAlt className="filter" fill="orange" />
            </div>
          </div>
        </div>

        <div className="course-cards-container">
        <Link to="/about-course">
           <Course/>
        </Link>
        <Link to="/about-course">
           <Course/>
        </Link>
        <Link to="/about-course">
           <Course/>
        </Link>
        <Link to="/about-course">
           <Course/>
        </Link>
        <Link to="/about-course">
           <Course/>
        </Link>
        <Link to="/about-course">
           <Course/>
        </Link>
        <Link to="/about-course">
           <Course/>
        </Link>
        </div>
        <div className="pagination-section">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <MdArrowForwardIos />
        </div>
      </section>
    </>
  );
};
export default Courses;
