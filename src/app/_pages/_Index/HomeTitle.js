import { AppConstants } from "../../_constants/index";

const HomeTitle = ({ state }) => {
  const titleName = AppConstants.PORTFOLIO_NAME;

  return (
    <div className="uk-flex uk-flex-center uk-flex-middle uk-flex uk-flex-column HomeTitleContainer">
      <h1 className="MainTitle">{titleName}</h1>

      <div className="DownArrow">
        <div className="DownArrowInner">&nbsp;</div>
        <ion-icon
          style={{ fontSize: "36px", color: "rgba(50, 50, 50,0)" }}
          name="arrow-down"
        />
        {!state.browser ? (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 210.4 210.4"
            space="preserve"
          >
            <g>
              <path
                className="st0"
                d="M105.2,0C66.5,0,35.1,31.5,35.1,70.1v70.2c0,38.7,31.5,70.1,70.1,70.1s70.1-31.4,70.1-70.1V70.1
		C175.3,31.5,143.9,0,105.2,0z M167.6,140.3c0,34.4-28,62.3-62.3,62.3S43,174.7,43,140.3V70.1c0-34.4,28-62.3,62.3-62.3
		s62.3,28,62.3,62.3V140.3z"
              />
            </g>
            <g>
              <g>
                <g>
                  <path
                    className="st0"
                    id="st1"
                    d="M105.2,23.4c-2.2,0-3.9,1.4-3.9,3.2v28.9c0,1.8,1.7,3.2,3.9,3.2s3.9-1.4,3.9-3.2V26.6C109.1,24.8,107.4,23.4,105.2,23.4z
				"
                  />
                </g>
              </g>
            </g>
          </svg>
        ) : (
          <ion-icon
            style={{ fontSize: "36px", color: "white" }}
            name="arrow-down"
            id="ArrowAnim"
          />
        )}
      </div>
    </div>
  );
};

export default HomeTitle;
