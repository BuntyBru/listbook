import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthenticationContextProvider } from "./Context/AuthenticationContext";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//const AppComponent = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthenticationContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
