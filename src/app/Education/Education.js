import React from "react";

import ANDES from "../../assets/ANDES.jpg";
import UNIANDES from '../../assets/UNIANDES.jpg'
import ARQUI from '../../assets/ARQUI.jpg'


import Menu from "../Menu/Menu";

export default class Education extends React.Component {
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
            style={{ backgroundImage: "url(" + ANDES + ")" }}
            data-uk-parallax="bgy: 150"
          >
            <h1 data-uk-parallax="y: -200; easing: 0.5" id="CardName">
              education
            </h1>
          </div>
        </div>

        {/* ---------- */}
        {/* P01 */}
        {/* ---------- */}

        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard"
            style={{ backgroundImage: "url("+UNIANDES+")" }}
            data-uk-parallax="bgy: 50"
          >
            <h1 data-uk-parallax="y: -100; easing: 1" id="CardName">
              major
            </h1>
          </div>
        </div>

        <div className="uk-container  uk-container-small">
          <div className="uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
            <div>
              <h3 className="ProjectName">
                Universidad de
                <br />
                Los Andes
              </h3>
            </div>
            <br />
            <br />
            <div>
              <p className="ProjectText">
                <strong>Computer Science Engineering</strong>
                <br />
                Bogotá, Colombia
                <br />
                August 2016 - January 2021
              </p>
            </div>
          </div>
        </div>

        {/* ---------- */}
        {/* P02 */}
        {/* ---------- */}

        <div style={{ height: "15vh" }}>&nbsp;</div>
        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard"
            style={{ backgroundImage: "url("+ARQUI+")" }}
            data-uk-parallax="bgy: -50"
          >
            <h1 data-uk-parallax="y: -50; easing: 2" id="CardName">
              minor
            </h1>
          </div>
        </div>
        <br />
        <br />
        <div className="uk-container  uk-container-small">
          <div className="uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
            <div>
              <h3 className="ProjectName">
                Universidad de
                <br />
                Los Andes
              </h3>
            </div>
            <div>
              <p className="ProjectText">
                <strong>Design</strong>
                <br />
                Bogotá, Colombia
                <br />
                August 2016 - January 2021
              </p>
            </div>
          </div>
        </div>

        {/* ---------- */}
        {/* P03 */}
        {/* ---------- */}

        <div style={{ height: "15vh" }}>&nbsp;</div>
        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)" }}
          >
            <h1 data-uk-parallax="y: -50; easing: 2" id="CardName">
              diploma
            </h1>
          </div>
        </div>
        <br />
        <br />
        <div className="uk-container  uk-container-small">
          <div className="uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
            <div>
              <h3 className="ProjectName">Vermont School</h3>
            </div>
            <div>
              <p className="ProjectText">
                <strong>International Baccalaureate</strong>
                <br />
                Bogotá, Colombia
                <br />
                2016
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
