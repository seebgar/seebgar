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
} from "./index";
import { Footer } from "../_shared/index";

import { AppEnum } from "../_enums/index";

function App() {
  return (
    <>
      <Routes>
        <Route path={AppEnum.HOME_NAV} element={<Home />} />

        <Route path={AppEnum.ABOUT_NAV} element={<About />} />
        <Route path={AppEnum.PROJECTS_NAV} element={<Projects />} />
        <Route path={AppEnum.HOBBIES_NAV} element={<Hobbies />} />

        <Route path={AppEnum.EDUCATION_NAV} element={<Education />} />
        <Route path={AppEnum.EXPERIENCE_NAV} element={<Experience />} />
        <Route path={AppEnum.SKILLS_NAV} element={<Skills />} />

        <Route exact path={AppEnum.HOME_EMPTY_NAV} element={<Home />} />
        <Route path={AppEnum.NOT_FOUND_NAV} element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
