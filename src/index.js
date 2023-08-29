import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ChatWidget from "./components/ChatWidget";
// import "./index.css";

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

/* eslint-disable no-undef */
ReactDOM.render(<ChatWidget />);

export { App, ChatWidget };
