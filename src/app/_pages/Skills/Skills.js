import React from "react";

import { Menu } from "../../_shared/index";
import { SkillsContent } from "./SkillsContent";
import { SkillsHeader } from "./SkillsHeader";

export const Skills = () => (
  <div className="ContextContainer">
    <Menu />
    <SkillsHeader />
    <SkillsContent />
  </div>
);
