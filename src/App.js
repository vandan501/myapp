import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import "./assests/css/bootstrap.min.css";
import "./assests/css/HomePage.css";
import "./assests/css/owl.carousel.min.css";
import "./assests/css/owl.theme.default.min.css";
import "./assests/css/cursor.css";
import "./assests/css/footer.css";
import "./assests/css/header.css";

import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Events from "./Pages/Events";
import Shop from "./Pages/Shop";
import CourseAbout from "./Pages/CourseAbout";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/login" && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-course" element={<CourseAbout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
