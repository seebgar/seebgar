import React from "react";
import ReactDOM from "react-dom";
import "./app/_Index/index.css";
import App from "./app/_Index/App";
import * as serviceWorker from "./serviceWorker";

import "./style.css";

import { BrowserRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <App />
  </Router>
);

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
