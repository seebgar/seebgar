import React, { useEffect, useState } from "react";

import { Bubbles } from "../../_constants/index";
import HomeSections from "./HomeSections";
import HomeTitle from "./HomeTitle";
import "./Home.scss";

export const Home = () => {
  const [state, setState] = useState({ scroll: 0 });

  useEffect(() => {
    const isFirefox = typeof InstallTrigger !== "undefined";
    const isIE = false || !!document.documentMode;
    const isEdge = !isIE && !!window.StyleMedia;
    setState({
      ...state,
      ...{ browser: isFirefox && isEdge && isIE },
    });

    window.scrollTo(0, 0);
    window.onscroll = function () {
      if (window.pageYOffset >= 150 && window.pageYOffset <= 940) {
        if (state.scroll <= 0.94) {
          setState({
            ...state,
            scroll: window.pageYOffset / 1000,
          });
        }
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <Bubbles />
      <HomeTitle />
      <HomeSections state={state} />
      <div id="HomeMobileBottomMargin">&nbsp;</div>
    </>
  );
};
