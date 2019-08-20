import React from "react";

import USAQ from "../../assets/ANDES1.jpg";
import BLUEGRADIENT from "../../assets/BLUE.png";
import ORANGEGRADIENT from "../../assets/ORANGE.png";
import MAC from "../../assets/MACBOOK_GL.png";
import KEYBOARD from "../../assets/KEYBOARD.png";
import MOUSE from "../../assets/MacMouse.png";

import Menu from "../Menu/Menu";

export default function Experience() {
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
      {/* P01 */}
      {/* ---------- */}

      <div className="uk-flex uk-flex-center uk-flex-middle Content">
        <div
          className="BaseCard"
          style={{ backgroundImage: "url(" + BLUEGRADIENT + ")" }}
        >
          <h1
            data-uk-parallax="y: -1; easing: 1"
            id="CardName"
            style={{ left: "-5%" }}
          >
            01
          </h1>
          <img
            src={MAC}
            id="MAC"
            alt="Mockup G-L"
            width="600px"
            className="FloatingImg"
            data-uk-parallax="y: -200; easing: 0.5"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
          <div>
            <h3 className="ProjectName">
              G &amp; L
              <br />
              <a
                href="http://www.gylconsultoria.com/#/home"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", fontSize: "18px",  color: 'gray' }}
              >
                visit website
              </a>
            </h3>
          </div>
          <div>
            <p className="ProjectText">
              G&amp;L is a consultancy business whose main goal is to train and
              help their clients in legal defense. My job was brand design and
              to develop their main web site which helped to gain recognition
              over 10+ cities nationwide (Colombia) and established a clear
              communication between G&amp;L and their 1000+ new clients and
              students.
            </p>
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
          style={{ backgroundImage: "url(" + ORANGEGRADIENT + ")" }}
        >
          <h1
            data-uk-parallax="y: -100; easing: 1"
            id="CardName"
            style={{ left: "-5%" }}
          >
            02
          </h1>
          <img
            src={KEYBOARD}
            alt="Keyboard and Mouse"
            width="600px"
            className="FloatingImg PERIS"
            data-uk-parallax="y: -200; easing: 0.5"
          />
          <img
            src={MOUSE}
            alt="Keyboard and Mouse"
            width="600px"
            className="FloatingImg PERIS2"
            data-uk-parallax="y: 100; easing: 0.5"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="uk-container  uk-container-small">
        <div className="uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
          <div>
            <h3 className="ProjectName">Teaching Asistant</h3>
          </div>
          <div>
            <p className="ProjectText">
              <strong>Software Development</strong>
              <br />
              The course projects consisted of web applications (front and
              backend) developed in Angular 7 and Java EE, deployed through
              local servers (Payara). Full stack applications with APIs
              and RESTful services was the main hub. Every single project was
              tracked through Jenkins, SonarQube and Teamwork.
            </p>
          </div>
          <div>&nbsp;</div>
          <div>
            <p className="ProjectText">
              <strong>Data Structures</strong>
              <br />I helped by keeping track of the projects that introduced
              the students to different data structures (Lists, Heaps, Trees,
              Queues, Stacks, etc). These projects consisted on sorting and
              iterating over a vast amount of data using the most efficient
              algorithms.
            </p>
          </div>
          <div>&nbsp;</div>
          <div>
            <p className="ProjectText">
              <strong>Object Oriented Programming</strong>
              <br />I tested (JUnit) and kept track of the 30+ projects that
              were developed during the course, which taught students the
              fundamental concepts in algorithms and object-oriented programing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
