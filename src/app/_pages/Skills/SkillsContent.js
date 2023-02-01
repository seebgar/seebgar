import { SkillsInfo } from "../../_constants/index";

export const SkillsContent = () => (
  <>
    {SkillsInfo.map((item) => (
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
          </div>
        </div>

        <div
          key={item.id + "-body"}
          className="uk-container uk-container-small uk-margin-large-bottom"
        >
          <div>
            <h3 className="SectionTitle">{item.name}</h3>
          </div>
          <div className="uk-child-width-1-4" data-uk-grid>
            {item.stack.map((txt) => (
              <p key={txt + "list-item-" + item.id} className="SectionText">
                {txt}
              </p>
            ))}
          </div>
        </div>
      </div>
    ))}
  </>
);
