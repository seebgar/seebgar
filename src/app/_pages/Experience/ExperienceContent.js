import { useState } from "react";
import { ExperienceInfo } from "../../_constants/index";

export const ExperienceContent = () => (
  <>
    {ExperienceInfo.map((item) => (
      <ExperienceInfoItem key={item.id + "-compo"} item={item} />
    ))}
  </>
);

const ExperienceInfoItem = ({ item }) => {
  const [state, setState] = useState(false);

  return (
    <div key={item.id + "-divhead"}>
      <div
        key={item.id + "head"}
        className="
          uk-flex uk-flex-center uk-flex-middle 
          Content Content-Experience
          "
      >
        <div
          className="BaseCard BaseCard-Experience"
          style={{
            background: item.color,
          }}
          data-uk-parallax="bgy: 150"
        >
          <h1
            data-uk-parallax="y: -150; easing: 0.5"
            className="CardName CardName-Number CardName-Number-Experience"
          >
            {item.number}
          </h1>
        </div>
      </div>

      <div key={item.id + "body"} className="uk-container  uk-container-small">
        <div>
          <h3 className="SectionTitle">{item.title}</h3>
        </div>
        <div>
          <div>
            <p className="SectionText">
              <strong>{item.sub}</strong>
            </p>
          </div>

          <div>
            {state && (
              <div>
                <p className="SectionText SectionText-LongText">{item.text}</p>
              </div>
            )}
            <button
              onClick={() => setState(!state)}
              className="uk-button uk-button-default uk-align-right SectionText SectionText-Btn"
            >
              see {state ? "less" : "more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
