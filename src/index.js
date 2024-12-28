import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { LangProvider } from "./context/Context";
import { BrowserRouter } from "react-router-dom";  // Change here

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter> {/* Use BrowserRouter instead of HashRouter */}
    <LangProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LangProvider>
  </BrowserRouter>
);


