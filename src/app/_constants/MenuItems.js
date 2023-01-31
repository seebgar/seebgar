import { AppEnum } from "../_enums/index";
import { capitalized } from "../_utils/index";

export const menuItems = [
  {
    link: AppEnum.HOME_NAV,
    label: capitalized(AppEnum.HOME_LBL),
  },
  {
    link: AppEnum.ABOUT_NAV,
    label: capitalized(AppEnum.ABOUT_LBL),
  },
  {
    link: AppEnum.EXPERIENCE_NAV,
    label: capitalized(AppEnum.EXPERIENCE_LBL),
  },
  {
    link: AppEnum.PROJECTS_NAV,
    label: capitalized(AppEnum.PROJECTS_LBL),
  },
];

export const fullMenuItems = [
  {
    link: AppEnum.HOME_NAV,
    label: capitalized(AppEnum.HOME_LBL),
  },
  {
    link: AppEnum.ABOUT_NAV,
    label: capitalized(AppEnum.ABOUT_LBL),
  },
  {
    link: AppEnum.HOBBIES_NAV,
    label: capitalized(AppEnum.HOBBIES_LBL),
  },
  {
    link: AppEnum.EDUCATION_NAV,
    label: capitalized(AppEnum.EDUCATION_LBL),
  },
  {
    link: AppEnum.EXPERIENCE_NAV,
    label: capitalized(AppEnum.EXPERIENCE_LBL),
  },
  {
    link: AppEnum.PROJECTS_NAV,
    label: capitalized(AppEnum.PROJECTS_LBL),
  },
  {
    link: AppEnum.SKILLS_NAV,
    label: capitalized(AppEnum.SKILLS_LBL),
  },
];
