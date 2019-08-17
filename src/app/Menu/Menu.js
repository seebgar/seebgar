import React from "react";

import { NavLink } from "react-router-dom";

export default class Menu extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
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
          <NavLink to="/projects" activeClassName="ItemSelected">
            <p className="MenuItem">Projects</p>
          </NavLink>
        </div>
    );
  }
}
