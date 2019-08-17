import React from "react";

import COLORS from "../../assets/COLORS.JPG";
import PMC from "../../assets/VIDEOS/PMC.mp4";
import ARQ from "../../assets/VIDEOS/ARQUISOFT.mp4";
import PIC from "../../assets/VIDEOS/PIC.mp4";

import TURYLATINA from "../../assets/TURYLATINA.jpg";
import GL from "../../assets/GL.jpg";

import Menu from "../Menu/Menu";

export default class Projects extends React.Component {
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
            style={{ backgroundImage: "url(" + COLORS + ")" }}
            data-uk-parallax="bgy: -200"
          >
            <h1 data-uk-parallax="y: -200; easing: 0.5" id="CardName">
              projects
            </h1>
          </div>
        </div>

        {/* ---------- */}
        {/* P01 */}
        {/* ---------- */}

        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div className="BaseCard uk-cover-container">
            <video src={PMC} autoPlay loop muted playsInline data-uk-cover />
          </div>
        </div>

        {/* ---------- */}
        {/* P02 */}
        {/* ---------- */}

        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div className="BaseCard uk-cover-container">
            <video src={ARQ} autoPlay loop muted playsInline data-uk-cover />
          </div>
        </div>

        {/* ---------- */}
        {/* P04 */}
        {/* ---------- */}

        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard uk-cover-container"
            style={{ backgroundImage: "url(" + TURYLATINA + ")" }}
          />
        </div>

        {/* ---------- */}
        {/* P04 */}
        {/* ---------- */}

        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard uk-cover-container"
            style={{ backgroundImage: "url(" + GL + ")" }}
          />
        </div>

        {/* ---------- */}
        {/* P03 */}
        {/* ---------- */}

        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div className="BaseCard uk-cover-container">
            <video src={PIC} autoPlay loop muted playsInline data-uk-cover />
          </div>
        </div>
      </div>
    );
  }
}
