import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fullMenuItems, menuItems } from "../../_constants/index";
import "./Menu.scss";

export const Menu = () => {
  const [state, setState] = useState({ scroll: 0 });
  const activeClass = "ItemSelected";
  const inactiveClass = "";

  const setClassActive = ({ isActive }) =>
    isActive ? activeClass : inactiveClass;

  useEffect(() => {
    window.scrollTo(0, 0);
    const { innerWidth } = window;

    if (innerWidth > 600) {
      window.onscroll = function () {
        setState((oldState) => {
          const newState = { ...oldState };
          if (window.pageYOffset > 400) {
            newState.scroll = window.pageYOffset / 1000;
          } else {
            newState.scroll = 0;
          }
          return newState;
        });
      };
    } else {
      setState({ ...state, scroll: 1 });
    }

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div
      className="
    uk-flex uk-flex-center
    MenuBar
    "
    >
      {menuItems.map((item) => (
        <NavLink
          key={"shortmenu-" + item.label}
          to={item.link}
          className={setClassActive}
          style={{ textDecorationColor: "white" }}
        >
          <p className="MenuItem MenuItem-TopBar">{item.label}</p>
        </NavLink>
      ))}

      <button
        id="MiniMenuOpener"
        data-uk-toggle="target: #offcanvas-nav-primary"
        style={{ opacity: state.scroll }}
      >
        <ion-icon name="menu" />
      </button>

      <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
        <div
          className="
          uk-offcanvas-bar uk-flex uk-flex-column
          "
          id="MenuOffCanvas"
        >
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            {fullMenuItems.map((item) => (
              <NavLink
                key={"fullmenu-" + item.label}
                to={item.link}
                className={setClassActive}
              >
                <p className="MenuItem">{item.label}</p>
              </NavLink>
            ))}

            <button
              className="uk-offcanvas-close uk-close-large close-btn"
              type="button"
              data-uk-close
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
