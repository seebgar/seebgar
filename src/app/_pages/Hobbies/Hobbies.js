import React from "react";

import "./Hobbies.css";
import { Menu } from "../../_shared/index";
import { HobbiesHeader } from "./HobbiesHeader";
import { HobbiesContent } from "./HobbiesContent";

export function Hobbies() {
  return (
    <div className="ContextContainer">
      <Menu />
      <HobbiesHeader />
      <HobbiesContent />
    </div>
  );
}
