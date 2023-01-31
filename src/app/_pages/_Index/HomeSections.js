import { Link } from "react-router-dom";
import { HomeNavigationCards } from "../../_constants/index";

const HomeSections = ({ state }) => {
  return (
    <div
      className="MainContainer"
      style={{
        transform: "scale(" + state.scroll + ")",
      }}
    >
      <div
        className="uk-child-width-expand@s uk-text-center MainContainerCardsSpace"
        uk-grid="parallax: 350"
      >
        <div>
          {HomeNavigationCards[0].map((item) => (
            <div
              key={"carditem-" + item.label}
              className="uk-flex uk-flex-center uk-flex-middle uk-card uk-card-default uk-card-hover uk-card-body uk-grid-margin MainCard"
            >
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <div className="CardBody">
                  <h1 className="CardTitle">{item.label}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          {HomeNavigationCards[1].map((item) => (
            <div
              key={"carditem-" + item.label}
              className="uk-flex uk-flex-center uk-flex-middle uk-card uk-card-default uk-card-hover uk-card-body uk-grid-margin MainCard"
            >
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <div className="CardBody">
                  <h1 className="CardTitle">{item.label}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSections;
