import React from "react";

import { Menu } from "../../_shared/index";
import { EducationHeader } from "./EducationHeader";
import { EducationContent } from "./EducationContent";

export function Education() {
  return (
    <div className="ContextContainer">
      <Menu />
      <EducationHeader />
      <EducationContent />
    </div>
  );
}
