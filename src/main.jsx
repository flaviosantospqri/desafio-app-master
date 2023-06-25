import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import GlobalStyleReset from "./styles/reset/globalStyleReset.js";
import GlobalStyle from "./styles/globalStyle.js";
import { SearchProvider } from "./contexts/searchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <GlobalStyleReset />
      <GlobalStyle />
      <App />
    </SearchProvider>
  </React.StrictMode>
);
