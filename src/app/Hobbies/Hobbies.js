import React from "react";

import NIGHT from "../../assets/BOG1.jpg";
import GUITAR from "../../assets/Guitar.png";
import XBOX from "../../assets/XBOX.png";
import NES from "../../assets/NES.png";
import PLANE from "../../assets/PLANE.png";
import HP from "../../assets/HP.png";

import EVEREST from "../../assets/AUDIO/EVEREST.mp3";
import MEX from "../../assets/AUDIO/MEX.mp3";
import INTRO from "../../assets/AUDIO/INTRO.mp3";


import "./Hobbies.css";
import Menu from "../Menu/Menu";

export default function Hobbies() {
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
            hobbies
          </h1>
        </div>
      </div>

      {/* ---------- */}
      {/* P01 */}
      {/* ---------- */}

      <div style={{ height: "15vh" }}>&nbsp;</div>
      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard HobbieCard"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          }}
          data-uk-parallax="bgy: 150"
        >
          <h1
            data-uk-parallax="y: -1; easing: 1"
            id="CardName"
            style={{ left: "-5%" }}
          >
            01
          </h1>
          <img
            src={GUITAR}
            alt="Electric Guitar"
            width="600px"
            className="FloatingImg"
            data-uk-parallax="y: -200; easing: 0.5"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              Guitar
            </h3>
          </div>
        </div>
      </div>

      {/* ---------- */}
      {/* P02 */}
      {/* ---------- */}

      <div style={{ height: "20vh" }}>&nbsp;</div>
      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard HobbieCard"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80)"
          }}
          data-uk-parallax="bgy: 50; easing: 1"
        >
          <h1
            data-uk-parallax="y: -1; easing: 1"
            id="CardName"
            style={{ left: "-5%" }}
          >
            02
          </h1>
          <img
            src={XBOX}
            alt="Xbox One Controller"
            width="600px"
            className="FloatingImg"
            data-uk-parallax="y: -400; easing: 0.7"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              Gaming
            </h3>
          </div>
        </div>
      </div>

      {/* ---------- */}
      {/* P03 */}
      {/* ---------- */}

      <div style={{ height: "20vh" }}>&nbsp;</div>
      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard HobbieCard"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          }}
          data-uk-parallax="bgy: 150; easing: 1"
        >
          <h1
            data-uk-parallax="y: -1; easing: 1"
            id="CardName"
            style={{ left: "-5%" }}
          >
            03
          </h1>
          <img
            src={NES}
            alt="Game Dev Nes Controller"
            width="600px"
            className="FloatingImg"
            data-uk-parallax="y: -200; easing: 1.5"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              Game Development
            </h3>
          </div>
        </div>
      </div>

      {/* ---------- */}
      {/* P04 */}
      {/* ---------- */}

      <div style={{ height: "20vh" }}>&nbsp;</div>
      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard HobbieCard"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2105785/pexels-photo-2105785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          }}
          data-uk-parallax="bgy: 150; easing: 1.6"
        >
          <h1
            data-uk-parallax="y: -1; easing: 1"
            id="CardName"
            style={{ left: "-5%" }}
          >
            04
          </h1>
          <img
            src={PLANE}
            alt="Airplane"
            width="500px"
            className="FloatingImg ExtraLg"
            data-uk-parallax="y: -150; easing: 1.6"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              Travel
            </h3>
          </div>
        </div>
      </div>

      {/* ---------- */}
      {/* P05 */}
      {/* ---------- */}

      <div style={{ height: "20vh" }}>&nbsp;</div>
      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard HobbieCard"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          }}
          data-uk-parallax="bgy: 150; easing: 1.6"
        >
          <h1
            data-uk-parallax="y: -1; easing: 1"
            id="CardName"
            style={{ left: "-5%" }}
          >
            05
          </h1>
          <img
            src={HP}
            alt="Airplane"
            width="400px"
            className="FloatingImg ExtraLg"
            data-uk-parallax="y: -150; easing: 1.8"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              Music
              <p
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "gray"
                }}
              >
                playlist
              </p>
            </h3>
          </div>
          <div>
            <table class="uk-table">
              <tbody>
                <tr>
                  <td>Mount Everest - Labrinth</td>
                  <td>
                    <audio controls src={EVEREST} />
                  </td>
                </tr>
                <tr>
                  <td>Mexican Jackpot - Flagship</td>
                  <td>
                  <audio controls src={MEX} />
                  </td>
                </tr>
                <tr>
                  <td>Intro - The xx</td>
                  <td>
                  <audio controls src={INTRO} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
