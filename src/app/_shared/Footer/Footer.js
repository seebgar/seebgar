import React from "react";
import { NavLink } from "react-router-dom";
import { fullMenuItems } from "../../constants/MenuItems";

export const Footer = () => {
  const activeClass = "ItemSelected";
  const inactiveClass = "";

  const setClassActive = ({ isActive }) =>
    isActive ? activeClass : inactiveClass;

  return (
    <footer style={{ padding: "4em" }}>
      <div className="uk-grid-divider uk-text-center" data-uk-grid>
        <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l">
          {fullMenuItems.map((item) => (
            <NavLink
              key={"fullmenufot-" + item.label}
              to={item.link}
              className={setClassActive}
              style={{ textDecorationColor: "white" }}
            >
              <p className="FooterMenuItem">{item.label}</p>
            </NavLink>
          ))}
        </div>
        <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l">
          <p className="FooterMenuItem">sebastian.garcialopez@outlook.com</p>
          <p className="FooterMenuItem">+57 (304) 422 9118</p>
          <p className="FooterMenuItem">
            Github @&nbsp;
            <a
              href="https://github.com/seebgar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              seebgar
            </a>
          </p>
          <br />
          <br />
          <p className="FooterMenuItem">
            Born &amp; Raised
            <br />
            Bogotá
          </p>
        </div>
        <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l">
          <p className="FooterMenuItem">Credits:</p>
          <a
            href="https://codepen.io/bh"
            id="Location"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <p className="FooterMenuItem">Bubbles Animation</p>
          </a>
          <a
            href="https://github.com/facebook/create-react-app"
            id="Location"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <p className="FooterMenuItem">Create React App</p>
          </a>
        </div>

        <div className="uk-width-1-1">
          <a
            href="https://github.com/seebgar/seebgar.git"
            id="Location"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <p className="FooterMenuItem">
              &lt;&gt; source code &lt;&frasl;&gt;
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};
