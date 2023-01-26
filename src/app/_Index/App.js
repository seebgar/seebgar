import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Hobbies from "../Hobbies/Hobbies";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

import "./index.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />

        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />

        <Route exact path="/" element={<Home />} />
        <Route path="*" element={() => <div>Not found</div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
