import React from "react";

import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "../../../node_modules/uikit/dist/js/uikit-icons";


export default function Contact() {
  return (
    <div className="ContextContainer">
      <div className="uk-flex uk-flex-center MenuBar ">
        <NavLink to="/home" activeClassName="ItemSelected">
          <p className="MenuItem">Home</p>
        </NavLink>
        <NavLink to="/about" activeClassName="ItemSelected">
          <p className="MenuItem">About</p>
        </NavLink>
        <NavLink to="/experience" activeClassName="ItemSelected">
          <p className="MenuItem">Experience</p>
        </NavLink>
        <NavLink to="/contact" activeClassName="ItemSelected">
          <p className="MenuItem">Contact</p>
        </NavLink>
      </div>

      <div
        className="uk-flex uk-flex-center uk-flex-middle uk-text-center"
        style={{ height: "90vh" }}
      >
        <div className="ContactCard">
          <div>
            <div className="uk-child-width-1-1 InfoList" data-uk-grid>
              <div>
                <CopyToClipboard text="js.garcial1@uniandes.edu.co">
                  <p className="ContactItem">
                    <strong>js.garcial1@uniandes.edu.co</strong>
                  </p>
                </CopyToClipboard>
              </div>
              <div>
                <a
                  href="https://wa.me/573208051317"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (+57) 320 805 1317
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/seebgar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div>
              <a
                  href="https://www.instagram.com/seebgar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div>
                  &nbsp;
              </div>
              <div>
                <p style={{fontSize: '16px'}}>Bogotá, Co 111111</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
