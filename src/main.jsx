import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppdeyApp from "./AppdeyApp";
import "./index.css";
import { IconProvider } from "./services/OnIconContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <IconProvider>
        <AppdeyApp />
      </IconProvider>
    </Router>
  </React.StrictMode>
);
