import { ProjectsInfo } from "../../_constants/index";

export const ProjectsContent = () => (
  <>
    {ProjectsInfo.map((item) => (
      <div key={item.id + "-divhead"}>
        <div
          className="
            uk-flex uk-flex-center uk-flex-middle 
            Content
            "
        >
          {item.bg && (
            <div className="BaseCard uk-cover-container">
              <video
                controls
                src={item.bg}
                autoPlay
                loop
                muted
                playsInline
                data-uk-cover
              />
            </div>
          )}
          {item.im && (
            <div
              className="BaseCard"
              style={{ backgroundImage: "url(" + item.im + ")" }}
              data-uk-parallax="bgy: 150"
            ></div>
          )}
        </div>

        <div
          key={item.id + "-body"}
          className="uk-container uk-container-small uk-margin-large-bottom"
        >
          <div>
            <h3 className="SectionTitle">{item.name}</h3>
          </div>
          {item.subtitleDesc && (
            <p className="SectionText">{item.subtitleDesc}</p>
          )}
          {item.link && (
            <div className="uk-child-width-1-4" data-uk-grid>
              <p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="SectionText"
                >
                  view video
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    ))}
  </>
);
