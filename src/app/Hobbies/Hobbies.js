import React from "react";

import NIGHT from "../../assets/BOG1.jpg";
import GUITAR from "../../assets/Guitar.png"
import XBOX from "../../assets/XBOX.png"
import NES from "../../assets/NES.png"
import PLANE from "../../assets/PLANE.png"

import './Hobbies.css'
import Menu from "../Menu/Menu";

export default class Hobbies extends React.Component {
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
            style={{ backgroundImage: "url(https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)" }}
            data-uk-parallax="bgy: 150"
          >
            <h1
              data-uk-parallax="y: -1; easing: 1"
              id="CardName"
              style={{ left: "-5%" }}
            >
              01
            </h1>
            <img src={GUITAR} alt="Electric Guitar" width="600px" className="FloatingImg" data-uk-parallax="y: -200; easing: 0.5"/>
          </div>
        </div>

        {/* ---------- */}
        {/* P02 */}
        {/* ---------- */}

        <div style={{ height: "15vh" }}>&nbsp;</div>
        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard HobbieCard"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80)"}}
            data-uk-parallax="bgy: 50; easing: 1"
          >
            <h1
              data-uk-parallax="y: -1; easing: 1"
              id="CardName"
              style={{ left: "-5%" }}
            >
              02
            </h1>
            <img src={XBOX} alt="Xbox One Controller" width="600px" className="FloatingImg" data-uk-parallax="y: -400; easing: 0.7"/>
          </div>
        </div>

        {/* ---------- */}
        {/* P03 */}
        {/* ---------- */}

        <div style={{ height: "15vh" }}>&nbsp;</div>
        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard HobbieCard"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)" }}
            data-uk-parallax="bgy: 150; easing: 1"
          >
            <h1
              data-uk-parallax="y: -1; easing: 1"
              id="CardName"
              style={{ left: "-5%" }}
            >
              03
            </h1>
            <img src={NES} alt="Game Dev Nes Controller" width="600px" className="FloatingImg" data-uk-parallax="y: -200; easing: 1.5"/>
          </div>
        </div>

        {/* ---------- */}
        {/* P04 */}
        {/* ---------- */}

        <div style={{ height: "15vh" }}>&nbsp;</div>
        <div className="uk-flex uk-flex-center uk-flex-middle Content">
          <div
            className="BaseCard HobbieCard"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1494435658045-a657e4a01bcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1272&q=80)" }}
            data-uk-parallax="bgy: -150; easing: 2"
          >
            <h1
              data-uk-parallax="y: -1; easing: 1"
              id="CardName"
              style={{ left: "-5%" }}
            >
              04
            </h1>
            <img src={PLANE} alt="Airplane" width="600px" className="FloatingImg" data-uk-parallax="y: -50; easing: 2"/>
          </div>
        </div>

      </div>
    );
  }
}
