import React from "react";

import NIGHT from "../../assets/ANDES1.jpg";
import Menu from "../Menu/Menu";

export default class Skills extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="ContextContainer">
        <Menu />
        <div style={{ height: "2vh" }}>&nbsp;</div>

        {/* ---------- */}
        {/* CONTENT */}
        {/* ---------- */}

        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard"
            style={{ backgroundImage: "url(" + NIGHT + ")" }}
            data-uk-parallax="bgy: 150"
          >
            <h1 data-uk-parallax="y: -200; easing: 0.5" id="CardName">
              skills
            </h1>
          </div>
        </div>

        {/* ---------- */}
        {/* P01 */}
        {/* ---------- */}

        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)" }}
            data-uk-parallax="bgy: 150"
          >
            <h1
              data-uk-parallax="y: -100; easing: 1"
              id="CardName"
              style={{ left: "-5%" }}
            >
              01
            </h1>
          </div>
        </div>

        <br />
        <br />
        <div className="uk-container  uk-container-small">
          <div className="uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
            <div>
              <h3 className="ProjectName">Back-end</h3>
            </div>
            <div className="uk-child-width-1-3" data-uk-grid>
              <p className="ProjectText">Python</p>
              <p className="ProjectText">Java EE</p>
              <p className="ProjectText">C#</p>
              <p className="ProjectText">Node</p>
              <p className="ProjectText">.Net</p>
              <p className="ProjectText">&nbsp;</p>
              <p className="ProjectText" style={{lineHeight: '1em'}}>Oracle SQL Dev</p>
              <p className="ProjectText">MongoDB</p>
              <p className="ProjectText">Firebase</p>
              <p className="ProjectText uk-width-1-1" style={{lineHeight: '1em'}}>Software development with SCRUM Agile methodologies</p>
            </div>
          </div>
        </div>

        {/* ---------- */}
        {/* P02 */}
        {/* ---------- */}

        <div style={{ height: "20vh" }}>&nbsp;</div>
        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)" }}
            data-uk-parallax="bgy: 150"
          >
            <h1
              data-uk-parallax="y: -100; easing: 1"
              id="CardName"
              style={{ left: "-5%" }}
            >
              02
            </h1>
          </div>
        </div>

        <br />
        <br />
        <div className="uk-container  uk-container-small">
          <div className="uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
            <div>
              <h3 className="ProjectName">Front-end</h3>
            </div>
            <div className="uk-child-width-1-3" data-uk-grid>
              <p className="ProjectText">Django</p>
              <p className="ProjectText">React</p>
              <p className="ProjectText">Angular</p>
              <p className="ProjectText">Javascript</p>
              <p className="ProjectText">Typescript</p>
              <p className="ProjectText">HTML</p>
              <p className="ProjectText">CSS</p>
              <p className="ProjectText">SASS</p>
              <p className="ProjectText">LESS</p>
            </div>
          </div>
        </div>

        {/* ---------- */}
        {/* P03 */}
        {/* ---------- */}

        <div style={{ height: "20vh" }}>&nbsp;</div>
        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)" }}
            data-uk-parallax="bgy: 150"
          >
            <h1
              data-uk-parallax="y: -100; easing: 1"
              id="CardName"
              style={{ left: "-5%" }}
            >
              03
            </h1>
          </div>
        </div>

        <br />
        <br />
        <div className="uk-container  uk-container-small">
          <div className="uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
            <div>
              <h3 className="ProjectName">Mobile</h3>
            </div>
            <div className="uk-child-width-1-3" data-uk-grid>
              <p className="ProjectText" style={{lineHeight: '1em'}}>React Native</p>
              <p className="ProjectText">Swift</p>
              <p className="ProjectText">SwiftUI</p>
              {/* <p className="ProjectText">Kotlin</p> soon */}
            </div>
          </div>
        </div>



        {/* ---------- */}
        {/* P04 */}
        {/* ---------- */}

        <div style={{ height: "20vh" }}>&nbsp;</div>
        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2547&q=80)" }}
            data-uk-parallax="bgy: 150"
          >
            <h1
              data-uk-parallax="y: -50; easing: 2"
              id="CardName"
              style={{ left: "-5%" }}
            >
              04
            </h1>
          </div>
        </div>

        <br />
        <br />
        <div className="uk-container  uk-container-small">
          <div className="uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
            <div>
              <h3 className="ProjectName">Creative Suite</h3>
            </div>
            <div className="uk-child-width-1-3" data-uk-grid>
              <p className="ProjectText">Photoshop</p>
              <p className="ProjectText">Illustrator</p>
              <p className="ProjectText">InDesign</p>
              <p className="ProjectText" style={{lineHeight: '1em'}}>After Effects</p>
              <p className="ProjectText" style={{lineHeight: '1em'}}>Premiere Pro</p>
              <p className="ProjectText">Audition</p>
              <p className="ProjectText">Figma</p>
              <p className="ProjectText">Sketch</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
