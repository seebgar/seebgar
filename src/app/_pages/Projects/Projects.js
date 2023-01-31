import React from "react";

import COLORS from "../../assets/images/COLORS.JPG";
import PMC from "../../assets/videos/PMC.mp4";
import ARQ from "../../assets/videos/ARQUISOFT.mp4";
import PIC from "../../assets/videos/PIC.mp4";

import TURYLATINA from "../../assets/images/TURYLATINA.jpg";
import GL from "../../assets/images/GL.jpg";

import { Menu } from "../../_shared/index";

export function Projects() {
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
          <video
            controls
            src={PMC}
            autoPlay
            loop
            muted
            playsInline
            data-uk-cover
          />
        </div>
      </div>

      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              Mid-Undergraduate Project
              <br />
              <a
                href="https://youtu.be/r3LGmdqpiCE"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                view video
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div style={{ height: "20vh" }}>&nbsp;</div>

      {/* ---------- */}
      {/* P02 */}
      {/* ---------- */}

      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div className="BaseCard uk-cover-container">
          <video
            controls
            src={ARQ}
            autoPlay
            loop
            muted
            playsInline
            data-uk-cover
          />
        </div>
      </div>

      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              Software Architecture Course Project
              <br />
              <a
                href="https://youtu.be/XGjCAh689gc"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                view video
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div style={{ height: "20vh" }}>&nbsp;</div>

      {/* ---------- */}
      {/* P04 */}
      {/* ---------- */}

      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard uk-cover-container"
          style={{ backgroundImage: "url(" + GL + ")" }}
        />
      </div>

      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              G &amp; L Consulting Group
              <br />
              <a
                href="https://youtu.be/XGjCAh689gc"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                visit website
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div style={{ height: "20vh" }}>&nbsp;</div>

      {/* ---------- */}
      {/* P04 */}
      {/* ---------- */}

      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard uk-cover-container"
          style={{ backgroundImage: "url(" + TURYLATINA + ")" }}
        />
      </div>

      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              Turylatina Project
              <br />
            </h3>
          </div>
        </div>
      </div>
      <div style={{ height: "20vh" }}>&nbsp;</div>

      {/* ---------- */}
      {/* P03 */}
      {/* ---------- */}

      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div className="BaseCard uk-cover-container">
          <video src={PIC} autoPlay loop muted playsInline data-uk-cover />
        </div>
      </div>

      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName" style={{ textAlign: "right" }}>
              Piccolo Branding
              <br />
            </h3>
          </div>
        </div>
      </div>
      <div style={{ height: "20vh" }}>&nbsp;</div>
    </div>
  );
}
