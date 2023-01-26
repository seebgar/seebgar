import React from "react";

import "./Menu.css";

import { NavLink } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scroll: 0 };
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    window.onscroll = function () {
      if (window.pageYOffset > 400) {
        this.setState({ scroll: window.pageYOffset / 1000 });
      } else {
        this.setState({ scroll: 0 });
      }
    }.bind(this);
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <div className="uk-flex uk-flex-center MenuBar ">
        <NavLink to="/home" activeclassname="ItemSelected">
          <p className="MenuItem">Home</p>
        </NavLink>
        <NavLink to="/about" activeclassname="ItemSelected">
          <p className="MenuItem">About</p>
        </NavLink>
        <NavLink to="/experience" activeclassname="ItemSelected">
          <p className="MenuItem">Experience</p>
        </NavLink>
        <NavLink to="/projects" activeclassname="ItemSelected">
          <p className="MenuItem">Projects</p>
        </NavLink>

        <button
          id="MiniMenuOpener"
          data-uk-toggle="target: #offcanvas-nav-primary"
          style={{ opacity: this.state.scroll }}
        >
          <ion-icon name="menu" />
        </button>

        <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
          <div
            className="uk-offcanvas-bar uk-flex uk-flex-column"
            id="MenuOffCanvas"
          >
            <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
              <NavLink to="/home" activeclassname="ItemSelected">
                <p className="MenuItem">Home</p>
              </NavLink>
              <NavLink to="/about" activeclassname="ItemSelected">
                <p className="MenuItem">About</p>
              </NavLink>
              <NavLink to="/projects" activeclassname="ItemSelected">
                <p className="MenuItem">Projects</p>
              </NavLink>
              <NavLink to="/hobbies" activeclassname="ItemSelected">
                <p className="MenuItem">Hobbies</p>
              </NavLink>
              <NavLink to="/education" activeclassname="ItemSelected">
                <p className="MenuItem">Education</p>
              </NavLink>
              <NavLink to="/experience" activeclassname="ItemSelected">
                <p className="MenuItem">Experience</p>
              </NavLink>
              <NavLink to="/skills" activeclassname="ItemSelected">
                <p className="MenuItem">Skills</p>
              </NavLink>
              <button
                className="uk-offcanvas-close uk-close-large"
                type="button"
                style={{ color: "white" }}
                data-uk-close
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
