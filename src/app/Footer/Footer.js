import React from "react";

import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ padding: "4em" }}>
      <div className="uk-grid-divider uk-text-center" data-uk-grid>
        <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l">
          <NavLink to="/home" activeClassName="ItemSelected">
            <p className="FooterMenuItem">Home</p>
          </NavLink>
          <NavLink to="/about" activeClassName="ItemSelected">
            <p className="FooterMenuItem">About</p>
          </NavLink>
          <NavLink to="/projects" activeClassName="ItemSelected">
            <p className="FooterMenuItem">Projects</p>
          </NavLink>
          <NavLink to="/hobbies" activeClassName="ItemSelected">
            <p className="FooterMenuItem">Hobbies</p>
          </NavLink>
          <NavLink to="/education" activeClassName="ItemSelected">
            <p className="FooterMenuItem">Education</p>
          </NavLink>
          <NavLink to="/experience" activeClassName="ItemSelected">
            <p className="FooterMenuItem">Experience</p>
          </NavLink>
          <NavLink to="/skills" activeClassName="ItemSelected">
            <p className="FooterMenuItem">Skills</p>
          </NavLink>
        </div>
        <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l">
          <p className="FooterMenuItem">js.garcial1@uniandes.edu.co</p>
          <p className="FooterMenuItem">+57 (320) 805 1317</p>
          <p className="FooterMenuItem">Github @ seebgar</p>
          <p className="FooterMenuItem">Instagram @ seebgar</p>
          <br />
          <br />
          <p className="FooterMenuItem">
            Born &amp; Raised in Bogotá, Colombia
          </p>
        </div>
        <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l">
          <p className="FooterMenuItem">Credits:</p>
          <a
            href="https://codepen.io/bh"
            id="Location"
            target="_blank"
            rel="noopener noreferrer"
          >
          <p className="FooterMenuItem">Bubbles Animation</p>
          </a>
          <a
            href="https://www.pexels.com/"
            id="Location"
            target="_blank"
            rel="noopener noreferrer"
          >
          <p className="FooterMenuItem">Pexels</p>
          </a>
          <a
            href="https://unsplash.com/"
            id="Location"
            target="_blank"
            rel="noopener noreferrer"
          >
          <p className="FooterMenuItem">Unsplash</p>
          </a>
          <a
            href="https://github.com/facebook/create-react-app"
            id="Location"
            target="_blank"
            rel="noopener noreferrer"
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
          >
          <p className="FooterMenuItem">
          &lt;&gt; source code &lt;&frasl;&gt;
          </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
