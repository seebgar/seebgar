import React from "react";

import { Menu } from "../../_shared/index";
import { ExperienceContent } from "./ExperienceContent";
import { ExperienceHeader } from "./ExperienceHeader";

export function Experience() {
  return (
    <div className="ContextContainer">
      <Menu />
      <ExperienceHeader />
      <ExperienceContent />
    </div>
  );
}
