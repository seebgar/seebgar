import React from "react";

import { Route, Routes } from "react-router-dom";

import {
  Home,
  About,
  Projects,
  Hobbies,
  Education,
  Experience,
  Skills,
} from "../index";

import { Footer } from "../../_shared/index";

import "./index.scss";
import { AppConstants } from "../../_constants/index";

function App() {
  return (
    <>
      <Routes>
        <Route path={AppConstants.HOME_NAV} element={<Home />} />

        <Route path={AppConstants.ABOUT_NAV} element={<About />} />
        <Route path={AppConstants.PROJECTS_NAV} element={<Projects />} />
        <Route path={AppConstants.HOBBIES_NAV} element={<Hobbies />} />

        <Route path={AppConstants.EDUCATION_NAV} element={<Education />} />
        <Route path={AppConstants.EXPERIENCE_NAV} element={<Experience />} />
        <Route path={AppConstants.SKILLS_NAV} element={<Skills />} />

        <Route exact path={AppConstants.HOME_EMPTY_NAV} element={<Home />} />
        <Route
          path={AppConstants.NOT_FOUND_NAV}
          element={() => <div>Not found</div>}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
