import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import instructoricon from "../assests/image/user1.jpg";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const CourseAbout = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [commentText, setCommentText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ commentText, name, email, website, saveInfo });
  };
  return (
    <section className="course-about-page-container">
      <div className="course-about-page-navigation">
      <Link to="/"> Home </Link><MdArrowForwardIos /> <Link to="/courses">Courses</Link> <MdArrowForwardIos /> Course Category{" "}
        <MdArrowForwardIos /> Course Name
      </div>

      <div className="course-about-section">
        <div className="course-details">
          <div className="first-row">
            <div className="instructor-sec">
              <img
                src={instructoricon}
                alt="instructor-image"
                className="instructor-image"
              />
              <span className="instructor-info">
                <p className="instructor-title">Instructor</p>
                <p className="instructor-name">Jone Smit</p>
              </span>
            </div>
            <div className="category-sec">
              <CiBookmark fill="#f1b516" className="bookmark-icon" />
              <span className="category-info">
                <p className="category-title">Category</p>
                <p className="category-name">UI UX | Development</p>
              </span>
            </div>
            <div className="review-sec">
              <span>
                <FaStar fill="#f1b516" />
                <FaStar fill="#f1b516" />
                <FaStar fill="#f1b516" />
                <FaStarHalfAlt fill="#f1b516" />
                <FaRegStar fill="#f1b516" />
              </span>
              <p className="review-title">Review</p>
            </div>
          </div>
          <Link to="course-about">
          <h2 className="course-display-title">
            Deep Learning a-z™: Hands-on Artificial Neural Networks
          </h2>
          </Link>
          <div className="course-display-features">
            <div className="feature-div">
              <MdOutlineAccessTimeFilled fill="#f1b516" />1 Week
            </div>
            <div className="feature-div">
              <GiNetworkBars fill="#f1b516" />
              All LEvels
            </div>
            <div className="feature-div">
              <FaCopy fill="#f1b516" />0 Lesson
            </div>
            <div className="feature-div">
              <FaPuzzlePiece fill="#f1b516" />0 Quiz
            </div>
            <div className="feature-div">
              <PiStudentFill fill="#f1b516" />9 Students
            </div>
          </div>
        </div>

        <div className="course-display-card-section">
          <div className="display-course-card">
            <img
              src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="course-image-banner"
              className="course-image-banner"
            />
            <div className="display-course-info">
              <span className="course-display-price">$69</span>
              <button className="display-buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="course-overview-section">
        <div className="course-overview">
          <div className="nav-tabs">
            <button
              className={`tabs ${activeTab === "Overview" ? "active" : ""}`}
              onClick={() => setActiveTab("Overview")}
            >
              Overview
            </button>
            <button
              className={`tabs ${activeTab === "Curriculum" ? "active" : ""}`}
              onClick={() => setActiveTab("Curriculum")}
            >
              Curriculum
            </button>
            <button
              className={`tabs ${activeTab === "Instructor" ? "active" : ""}`}
              onClick={() => setActiveTab("Instructor")}
            >
              Instructor
            </button>
            <button
              className={`tabs ${activeTab === "Reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("Reviews")}
            >
              Reviews
            </button>
          </div>
          <div className="course-content">
            {activeTab === "Overview" && (
              <div>
                <h2>Course Description</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <h2>Certification</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <h2>Who This Course is for</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            )}
            {activeTab === "Curriculum" && (
              <div>
                <h2>Curriculum</h2>
                <p>Content for Curriculum tab.</p>
              </div>
            )}
            {activeTab === "Instructor" && (
              <div>
                <h2>Instructor</h2>
                <p>Content for Instructor tab.</p>
              </div>
            )}
            {activeTab === "Reviews" && (
              <div>
                <h2>Reviews</h2>
                <p>Content for Reviews tab.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="comment-section">
      <h2>1 Comment</h2>
      <div className="comment">
        <div className="comment-avatar">
          <img src={instructoricon} alt="User Avatar" />
        </div>
        <div className="comment-body">
          <div className="comment-header">
            <span className="comment-author">Jone Smit</span>
            <span className="comment-date">May 8, 2020 at 5:18 PM</span>
          </div>
          <div className="comment-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </div>
          <button className="comment-reply">Reply</button>
        </div>
      </div>
    </div>
      <div className="comment-form-container">
        <h2 className="comment-form-title">Leave a Reply</h2>

        <form className="comment-form" onSubmit={handleSubmit}>
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            className="cmt-text-area"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
          <div className="name-email">
            <span>
              <label htmlFor="name">
                Name <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </span>
            <span>
              <label htmlFor="email">
                Email  <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </span>
          </div>
          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            className="website-input"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="save-info"
              name="save-info"
              className="save-check-mark"
              checked={saveInfo}
              onChange={() => setSaveInfo(!saveInfo)}
            />
            <label htmlFor="save-info">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          <button type="submit">Post A Comment</button>
        </form>
      </div>
    </section>
  );
};
export default CourseAbout;
