import ANDES from "../../assets/images/ANDES.jpg";
import { EducationEnum } from "../../_enums/index";

export const EducationHeader = () => (
  <>
    <div
      className="
    uk-flex uk-flex-center uk-flex-middle 
    Content
    "
    >
      <div
        className="BaseCard"
        style={{ backgroundImage: "url(" + ANDES + ")" }}
        data-uk-parallax="bgy: 150"
      >
        <h1 data-uk-parallax="y: -200; easing: 0.5" className="CardName">
          {EducationEnum.TITLE}
        </h1>
      </div>
    </div>
  </>
);
