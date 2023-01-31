import { HobbiesInfo } from "../../_constants";

export const HobbiesContent = () => (
  <>
    {HobbiesInfo.map((item) => (
      <div key={item.id + "-divhead"}>
        <div
          key={item.id + "-head"}
          className="
            uk-flex uk-flex-center uk-flex-middle 
            Content
            "
        >
          <div
            className="BaseCard"
            style={{ backgroundImage: "url(" + item.bg + ")" }}
            data-uk-parallax="bgy: 150"
          >
            <h1
              data-uk-parallax="y: -200; easing: 0.5"
              className="CardName CardName-Number"
            >
              {item.title}
            </h1>
            <img
              src={item.image}
              alt={item.imgalt}
              width="600px"
              className="FloatingImg"
              data-uk-parallax="y: -200; easing: 0.5"
            />
          </div>
        </div>

        <div
          key={item.id + "-body"}
          className="uk-container  uk-container-small uk-margin-large-bottom"
        >
          <div>
            <h3 className="SectionTitle uk-align-right">{item.name}</h3>
          </div>
        </div>
      </div>
    ))}
  </>
);
