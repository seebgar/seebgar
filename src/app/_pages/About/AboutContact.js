import { CopyToClipboard } from "react-copy-to-clipboard";
import NIGHT from "../../assets/images/NIGHT.JPG";
import { AboutEnum } from "../../_enums/index";

const AboutContact = () => (
  <>
    <div
      className="
    uk-flex uk-flex-center uk-flex-middle 
    Content
    "
    >
      <div
        className="BaseCard"
        style={{ backgroundImage: "url(" + NIGHT + ")" }}
        data-uk-parallax="bgy: 150"
      >
        <h1 data-uk-parallax="y: -100; easing: 2" className="CardName">
          {AboutEnum.CONTACT_TITLE}
        </h1>
      </div>
    </div>

    <div className="uk-flex uk-flex-center">
      <div className="uk-child-width-1-1 CardInformation">
        <div className="uk-with-1-1 uk-flex uk-flex-center uk-flex-column uk-text-center">
          <div>
            <CopyToClipboard text="sebastian.garcialopez@outlook.com">
              <p className="ContactItem" style={{ cursor: "pointer" }}>
                <strong>{AboutEnum.EMAIL_LBL}</strong>
                <br />
                <span
                  className="uk-badge"
                  id="CopyEmail"
                  style={{ cursor: "pointer" }}
                >
                  {AboutEnum.COPY_LBL}
                </span>
              </p>
            </CopyToClipboard>
          </div>
          <div>
            <a
              href="https://wa.me/573044229118"
              target="_blank"
              rel="noopener noreferrer"
              className="ContactItem"
            >
              {AboutEnum.PHONE_NUMBER}
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/seebgar/"
              target="_blank"
              rel="noopener noreferrer"
              className="ContactItem"
            >
              {AboutEnum.LINKEDIN_LBL}
            </a>
          </div>

          <div>
            <a
              href="https://github.com/seebgar"
              target="_blank"
              rel="noopener noreferrer"
              className="ContactItem"
            >
              {AboutEnum.GITHUB_LBL}
            </a>
          </div>
          <div>
            <a
              href="https://vsco.co/seebgar/images"
              target="_blank"
              rel="noopener noreferrer"
              className="ContactItem"
            >
              {AboutEnum.VSCO_LBL}
            </a>
          </div>
          <br />
          <br />
          <br />
          <div>
            <a
              className="ContactItem"
              id="Location"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Universidad+de+los+Andes/@4.6027848,-74.067091,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f99bccab5697d:0x1da99c6575ca804b!8m2!3d4.6027795!4d-74.0649023"
            >
              {AboutEnum.LOCATION_LBL}
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutContact;
