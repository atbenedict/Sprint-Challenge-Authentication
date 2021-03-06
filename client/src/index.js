import React, { setGlobal } from "reactn";

import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
require("dotenv").config();

setGlobal({
  loggedIn: false,
  token: "",
  password: "",
  username: "",
  jokes: []
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
