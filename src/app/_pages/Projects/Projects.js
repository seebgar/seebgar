import React from "react";

import { Menu } from "../../_shared/index";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectsContent } from "./ProjectsContent";

export function Projects() {
  return (
    <div className="ContextContainer">
      <Menu />
      <ProjectsHeader />
      <ProjectsContent />
    </div>
  );
}
