import { h, render } from "preact";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "./index.css";

const _App = () => (
  <Router>
    <App />
  </Router>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  render(<_App />, rootElement, rootElement.firstElementChild);
} else {
  render(<_App />, rootElement);
}

if (module.hot) {
  module.hot.accept('./App', function() {
    render(<_App />, rootElement);
  })
}