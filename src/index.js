import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Analytics />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
