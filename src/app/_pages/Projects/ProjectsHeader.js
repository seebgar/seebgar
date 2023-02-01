import COLORS from "../../assets/images/COLORS.JPG";
import { ProjectsEnum } from "../../_enums/index";

export const ProjectsHeader = () => (
  <>
    <div
      className="
    uk-flex uk-flex-center uk-flex-middle 
    Content
    "
    >
      <div
        className="BaseCard"
        style={{ backgroundImage: "url(" + COLORS + ")" }}
        data-uk-parallax="bgy: 150"
      >
        <h1 data-uk-parallax="y: -200; easing: 0.5" className="CardName">
          {ProjectsEnum.TITLE}
        </h1>
      </div>
    </div>
  </>
);
