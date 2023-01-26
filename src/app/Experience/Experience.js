import React from "react";

import USAQ from "../../assets/ANDES1.jpg";

import Menu from "../Menu/Menu";
import { experiences } from "./Experiences";

export default function Experience() {
  const exps = (item) => (
    <div style={{ marginBottom: "8vh" }} key={item.id}>
      <div
        key={item.title}
        className="uk-flex uk-flex-center uk-flex-middle Content"
        style={{ minHeight: "50vh" }}
      >
        <div
          className="BaseCardExp"
          style={{
            backgroundColor: "white",
            background: item.color,
          }}
        >
          <h1
            data-uk-parallax="y: -1; easing: 1"
            id="CardName"
            style={{ left: "-5%" }}
          >
            {item.number}
          </h1>
        </div>
      </div>

      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1" data-uk-grid>
          <div>
            <h3 className="ProjectName">{item.title}</h3>
            <h3 className="ProjectNameRole">{item.sub}</h3>
            <h3 className="ProjectNameRole" style={{ float: "right" }}>
              {item.date}
            </h3>
          </div>
          <div>
            <p className="ProjectText">{item.text}</p>
          </div>
        </div>
      </div>
    </div>
  );

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
          style={{ backgroundImage: "url(" + USAQ + ")" }}
          data-uk-parallax="bgy: 150"
        >
          <h1 data-uk-parallax="y: -200; easing: 0.5" id="CardName">
            experience
          </h1>
        </div>
      </div>

      {/* ---------- */}
      {/* Items */}
      {/* ---------- */}

      {experiences.map(exps)}
    </div>
  );
}
