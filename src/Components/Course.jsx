import React from "react";
import { LiaBookSolid } from "react-icons/lia";
import { PiUsersThreeThin } from "react-icons/pi";

function Course() {
  return (
    <div className="course-card">
      <div className="course-card-image">
        <img
          src="https://images.pexels.com/photos/5905706/pexels-photo-5905706.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Course-Card"
        />
        <span className="course-card-price">Free</span>
      </div>
      <div className="course-card-info">
        <div className="course-card-profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"
            alt="instructor-profile-image"
          />
          <p className="instructor-name">Jone Smit</p>
        </div>
        <h1 className="course-title">
          Python Django Web Development : Todo App 2024 New
        </h1>
        <p className="course-description">
          Create a robust Todo application using Django, mastering essential web
          development skills like CRUD operations, user authentication, and
          responsive design. Perfect for beginners and intermediate developers
          aiming to build dynamic, database-driven web applications.
        </p>
        <div className="course-lessions-students">
          <div className="course-lessons">
            <LiaBookSolid fontSize={20} fill={"#e74752"} />
            <p>2 Students</p>
          </div>
          <div className="course-students">
            <PiUsersThreeThin fontSize={20} fill={"#e74752"} />
            <p>86 Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
