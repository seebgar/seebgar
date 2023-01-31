import React from "react";

import { Menu } from "../../_shared/index";
import AboutContact from "./AboutContact";
import AboutHeader from "./AboutHeader";

export function About() {
  return (
    <div className="ContextContainer">
      <Menu />
      <AboutHeader />
      <AboutContact />
    </div>
  );
}
