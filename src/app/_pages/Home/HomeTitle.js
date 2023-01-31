import { AppEnum } from "../../_enums/index";

const HomeTitle = () => (
  <div
    className="
    uk-flex uk-flex-center uk-flex-middle uk-flex uk-flex-column 
    HomeTitleContainer
    "
  >
    <h1 className="MainTitle">{AppEnum.PORTFOLIO_NAME}</h1>
    <div className="DownArrow">
      <ion-icon name="arrow-down" id="arrow-animation" />
    </div>
  </div>
);

export default HomeTitle;
