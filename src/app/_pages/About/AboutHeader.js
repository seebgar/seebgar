import BOG from "../../assets/images/BOG.jpg";
import FACE from "../../assets/images/FACE.png";
import { AboutEnum } from "../../_enums/index";

const AboutHeader = () => (
  <>
    <div
      className="
    uk-flex uk-flex-center uk-flex-middle 
    Content
    "
    >
      <div
        className="BaseCard"
        style={{ backgroundImage: "url(" + BOG + ")" }}
        data-uk-parallax="bgy: 150"
      >
        <h1 data-uk-parallax="y: -200; easing: 0.5" className="CardName">
          {AboutEnum.TITLE}
        </h1>
      </div>
    </div>

    <div className="uk-flex uk-flex-center">
      <div className="uk-child-width-1-1 CardInformation">
        <div
          id="AboutProfileIamge"
          style={{ backgroundImage: "url(" + FACE + ")" }}
          data-uk-parallax="bgy: -5"
        />
        <br />
        <br />
        <div>
          <h2 id="AboutProfileDescription">{AboutEnum.DESCRIPTION}</h2>
        </div>
      </div>
    </div>
  </>
);

export default AboutHeader;
