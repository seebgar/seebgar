import React from "react";
//import logo from "./logo.svg";

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

import { Route, Routes, Switch } from "react-router-dom";
import Home from "./Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Hobbies from "../Hobbies/Hobbies";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />

        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />

        <Route exact path="/" element={<Home />} />
      </Routes>

      {/* ----------------- */}
      {/* FOOTER */}
      {/* ----------------- */}

      <Footer />
    </div>
  );
}

export default App;
