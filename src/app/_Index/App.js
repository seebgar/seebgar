import React from "react";
//import logo from "./logo.svg";

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Hobbies from "../Hobbies/Hobbies";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer"

function App() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />

          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/hobbies" component={Hobbies} />

          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />

          <Route exact path="/" component={Home} />
        </Switch>

        {/* ----------------- */}
        {/* FOOTER */}
        {/* ----------------- */}
        
        <Footer />
      </div>
    );
}

export default App;
