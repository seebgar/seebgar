import React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

import BOG from "../../assets/BOG.jpg";
import FACE from "../../assets/FACE.png";
import NIGHT from "../../assets/NIGHT.JPG";
import Menu from "../Menu/Menu";

export default function About() {
  return (
    <div className="ContextContainer">
      {/* ---------- */}
      {/* MENU */}
      {/* ---------- */}
      <Menu />

      <div style={{ height: "2vh" }}>&nbsp;</div>

      {/* ---------- */}
      {/* CONTENT */}
      {/* ---------- */}

      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard"
          style={{ backgroundImage: "url(" + BOG + ")" }}
          data-uk-parallax="bgy: 150"
        >
          <h1 data-uk-parallax="y: -200; easing: 0.5" id="CardName">
            about
          </h1>
        </div>
      </div>

      <div className="uk-flex uk-flex-center">
        <div id="AnimojiCard" className="uk-child-width-1-1">
          <div
            id="IntroPic"
            style={{ backgroundImage: "url(" + FACE + ")" }}
            data-uk-parallax="bgy: -5"
          />
          <br />
          <br />
          <div>
            <h2 id="Intro">
              Hi, I'm Sebastian García. Most of the time, I develop and design
              user experiences. People often simply call them websites,
              applications, or platforms.
            </h2>
          </div>
        </div>
      </div>

      {/* ---------- */}
      {/* Contact */}
      {/* ---------- */}

      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard"
          style={{ backgroundImage: "url(" + NIGHT + ")" }}
          data-uk-parallax="bgy: 150"
        >
          <h1 data-uk-parallax="y: -100; easing: 2" id="CardNameContact">
            contact
          </h1>
        </div>
      </div>

      <div className="uk-flex uk-flex-center">
        <div id="ContactCard" className="uk-child-width-1-1">
          <div
            className="uk-with-1-1 uk-flex uk-flex-center uk-flex-column uk-text-center"
            id="iPadContent"
          >
            {/*  <!-- https://github.com/nkbt/react-copy-to-clipboard#usage --> */}
            <div>
              <CopyToClipboard text="sebastian.garcialopez@outlook.com">
                <p className="ContactItem" style={{ cursor: "pointer" }}>
                  <strong>sebastian.garcialopez@outlook.com</strong>
                  <br />
                  <span
                    className="uk-badge"
                    id="CopyEmail"
                    style={{ cursor: "pointer" }}
                  >
                    copy
                  </span>
                </p>
              </CopyToClipboard>
            </div>
            <div>
              <a
                href="https://wa.me/573208051317"
                target="_blank"
                rel="noopener noreferrer"
                className="ContactItem"
              >
                (+57) 304 422 9118
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/seebgar/"
                target="_blank"
                rel="noopener noreferrer"
                className="ContactItem"
              >
                LinkedIn
              </a>
            </div>

            <div>
              <a
                href="https://github.com/seebgar"
                target="_blank"
                rel="noopener noreferrer"
                className="ContactItem"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://vsco.co/seebgar/images"
                target="_blank"
                rel="noopener noreferrer"
                className="ContactItem"
              >
                VSCO
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
                Bogotá, Colombia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
