import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Event from "./components/Event/Event";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Main/Registration/Login";
import Signin from "./pages/Main/Registration/Signin/Signin";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/event/:id" element={<Event/>}/>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
