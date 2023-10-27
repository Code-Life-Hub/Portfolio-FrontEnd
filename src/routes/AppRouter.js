import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="navLinks">
          <Link to="/"> About </Link>|<Link to="/projects"> Projects </Link>|
          <Link to="/contact"> Contact Me </Link>
        </nav>

        <Routes>
          <Route path="/" element={<About />} exact />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
