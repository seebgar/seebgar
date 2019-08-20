import React from "react";

import { Link } from "react-router-dom";

import "./index.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    const isFirefox = typeof InstallTrigger !== "undefined";
    const isIE = false || !!document.documentMode;
    const isEdge = !isIE && !!window.StyleMedia;

    this.state = { scroll: 0, browser = (isFirefox && isEdge && isIE) };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.onscroll = function() {
      //console.log(window.pageYOffset);
      if (window.pageYOffset >= 150 && window.pageYOffset <= 940) {
        if (this.state.scroll <= 0.94) {
          this.setState({ scroll: window.pageYOffset / 1000 });
          //console.log(this.state.scroll);
        }
      }
    }.bind(this);
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <div>
        {/* ----------------- */}
        {/* BUBBLES ANIMATION */}
        {/* ----------------- */}
        {/* https://codepen.io/matchboxhero/pen/LzdgOv?editors=1100 */}
        <div className="container">
          <div className="bubbles-container">
            <svg
              className="bubbles"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 701 1024"
              style={{ overflow: "visible" }}
            >
              <g className="bubbles-large" strokeWidth="7">
                <g>
                  <g transform="translate(10 940)">
                    <circle cx="35" cy="35" r="35" />
                  </g>
                </g>
                <g>
                  <g transform="translate(373 940)">
                    <circle cx="35" cy="35" r="35" />
                  </g>
                </g>
                <g>
                  <g transform="translate(408 940)">
                    <circle cx="35" cy="35" r="35" />
                  </g>
                </g>
                <g>
                  <g transform="translate(621 940)">
                    <circle cx="35" cy="35" r="35" />
                  </g>
                </g>
                <g>
                  <g transform="translate(179 940)">
                    <circle cx="35" cy="35" r="35" />
                  </g>
                </g>
              </g>

              <g className="bubbles-small" strokeWidth="4">
                <g>
                  <g transform="translate(147 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
                <g>
                  <g transform="translate(255 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
                <g>
                  <g transform="translate(573 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
                <g>
                  <g transform="translate(429 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
                <g>
                  <g transform="translate(91 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
                <g>
                  <g transform="translate(640 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
                <g>
                  <g transform="translate(321 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
                <g>
                  <g transform="translate(376 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
                <g>
                  <g transform="translate(376 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
                <g>
                  <g transform="translate(497 984)">
                    <circle cx="15" cy="15" r="15" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* ----------------- */}
        {/* TITLE */}
        {/* ----------------- */}
        <div
          className="uk-flex uk-flex-center uk-flex-middle uk-flex uk-flex-column"
          style={{ height: "100vh" }}
        >
          <div>
            <h1 className="MainTitle">sebastian garcia</h1>
          </div>

          <br />
          <br />

          <div className="DownArrow" style={{ display: "block" }}>
            <div style={{ height: "10vh" }}>&nbsp;</div>
            <ion-icon
              style={{ fontSize: "36px", color: "rgba(50, 50, 50,0)" }}
              name="arrow-down"
            />
            {!this.state.browser ? (
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

        {/* ----------------- */}
        {/* SECTIONS */}
        {/* ----------------- */}
        <div>
          <div
            className="MainContainer"
            style={{
              height: "95vh",
              transform: "scale(" + this.state.scroll + ")"
            }}
          >
            <div style={{ padding: "4em", paddingTop: "6em" }}>
              <div
                className="uk-child-width-expand@s uk-text-center"
                uk-grid="parallax: 350"
              >
                <div>
                  <div className="uk-flex uk-flex-center uk-flex-middle uk-card uk-card-default uk-card-hover uk-card-body uk-grid-margin MainCard">
                    <Link to="/about">
                      <div className="CardBody">
                        <h1 className="CardTitle">about</h1>
                      </div>
                    </Link>
                  </div>

                  <div className="uk-flex uk-flex-center uk-flex-middle uk-card uk-card-default uk-card-hover uk-card-body uk-grid-margin MainCard">
                    <Link to="/projects">
                      <div className="CardBody">
                        <h1 className="CardTitle">projects</h1>
                      </div>
                    </Link>
                  </div>

                  <div className="uk-flex uk-flex-center uk-flex-middle uk-card uk-card-default uk-card-hover uk-card-body uk-grid-margin MainCard">
                    <Link to="/hobbies">
                      <div className="CardBody">
                        <h1 className="CardTitle">hobbies</h1>
                      </div>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="uk-flex uk-flex-center uk-flex-middle uk-card uk-card-default uk-card-hover uk-card-body uk-grid-margin MainCard">
                    <Link to="/education">
                      <div className="CardBody">
                        <h1 className="CardTitle">education</h1>
                      </div>
                    </Link>
                  </div>

                  <div className="uk-flex uk-flex-center uk-flex-middle uk-card uk-card-default uk-card-hover uk-card-body uk-grid-margin MainCard">
                    <Link to="/experience">
                      <div className="CardBody">
                        <h1 className="CardTitle">experience</h1>
                      </div>
                    </Link>
                  </div>

                  <div className="uk-flex uk-flex-center uk-flex-middle uk-card uk-card-default uk-card-hover uk-card-body uk-grid-margin MainCard">
                    <Link to="/skills">
                      <div className="CardBody">
                        <h1 className="CardTitle">skills</h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="HomeMobileBottomMargin">&nbsp;</div>
      </div>
    );
  }
}

export default Home;
