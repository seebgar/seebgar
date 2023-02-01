import NIGHT from "../../assets/images/NIGHT.JPG";
import { SkillsEnum } from "../../_enums/index";

export const SkillsHeader = () => (
  <>
    <div
      className="
    uk-flex uk-flex-center uk-flex-middle 
    Content
    "
    >
      <div
        className="BaseCard"
        style={{ backgroundImage: "url(" + NIGHT + ")" }}
        data-uk-parallax="bgy: 150"
      >
        <h1 data-uk-parallax="y: -200; easing: 0.5" className="CardName">
          {SkillsEnum.TITLE}
        </h1>
      </div>
    </div>
  </>
);
