import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyleReset from "./styles/reset/globalStyleReset.js";
import GlobalStyle from "./styles/globalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyleReset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
