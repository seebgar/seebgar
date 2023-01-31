import NIGHT from "../../assets/images/BOG1.jpg";
import { HobbiesEnum } from "../../_enums/index";

export const HobbiesHeader = () => (
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
          {HobbiesEnum.TITLE}
        </h1>
      </div>
    </div>
  </>
);
