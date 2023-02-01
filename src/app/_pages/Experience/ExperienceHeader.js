import USAQ from "../../assets/images/ANDES1.jpg";
import { ExperienceEnum } from "../../_enums/index";

export const ExperienceHeader = () => (
  <>
    <div
      className="
    uk-flex uk-flex-center uk-flex-middle 
    Content
    "
    >
      <div
        className="BaseCard"
        style={{ backgroundImage: "url(" + USAQ + ")" }}
        data-uk-parallax="bgy: 150"
      >
        <h1 data-uk-parallax="y: -200; easing: 0.5" className="CardName">
          {ExperienceEnum.TITLE}
        </h1>
      </div>
    </div>
  </>
);
