import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import GlobalStyleReset from "./styles/reset/globalStyleReset.js";
import GlobalStyle from "./styles/globalStyle.js";
import Providers from "./contexts/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <GlobalStyleReset />
      <GlobalStyle />
      <App />
    </Providers>
  </React.StrictMode>
);
