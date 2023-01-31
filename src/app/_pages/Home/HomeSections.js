import { Link } from "react-router-dom";
import { HomeNavigationCards } from "../../_constants/index";

const HomeSections = ({ state }) => {
  const cardClasses =
    "uk-flex uk-flex-center uk-flex-middle uk-card uk-card-default uk-card-hover uk-card-body uk-grid-margin";

  return (
    <div
      className="HomeSectionsContainer"
      style={{
        transform: "scale(" + state.scroll * 0.9 + ")",
      }}
    >
      <div
        className="
        uk-child-width-expand@s uk-text-center 
        CardsSpacing
        "
        uk-grid="parallax: 350"
      >
        <div>
          {HomeNavigationCards[0].map((item) => (
            <div
              key={"carditem-" + item.label}
              className={cardClasses + " MainCard"}
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
              className={cardClasses + " MainCard"}
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
