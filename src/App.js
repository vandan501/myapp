import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import "./assests/css/bootstrap.min.css";
import "./assests/css/HomePage.css";
import "./assests/css/owl.carousel.min.css";
import "./assests/css/owl.theme.default.min.css";
import "./assests/css/cursor.css";
import "./assests/css/footer.css";
import "./assests/css/header.css";
import "./assests/css/owl.theme.default.min.css";
import "./assests/css/footer.css";
import "./assests/css/owl.carousel.min.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Courses from "./Pages/Courses";
import Events from "./Pages/Events";
import Shop from "./Pages/Shop";
import CourseAbout from "./Pages/CourseAbout";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about-course" element={<CourseAbout />} />
            <Route path="#" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
