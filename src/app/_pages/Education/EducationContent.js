import { EducationInfo } from "../../_constants/index";

export const EducationContent = () => (
  <>
    {EducationInfo.map((item) => (
      <div key={item.id + "-divhead"}>
        <div
          key={item.id + "head"}
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
            <h1 data-uk-parallax="y: -200; easing: 0.5" className="CardName">
              {item.title}
            </h1>
          </div>
        </div>

        <div
          key={item.id + "body"}
          className="uk-container  uk-container-small"
        >
          <div>
            <h3 className="SectionTitle">{item.name}</h3>
          </div>
          <div>
            <p className="SectionText">
              <strong>{item.subtitle}</strong>

              {item.subtitleDesc && (
                <>
                  <br />
                  {item.subtitleDesc}
                </>
              )}
              {item.location && (
                <>
                  <br />
                  {item.location}
                </>
              )}
              <br />
              {item.dates}
            </p>
          </div>
        </div>
      </div>
    ))}
  </>
);
