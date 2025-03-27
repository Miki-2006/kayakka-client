import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Event from "./components/EventIdivid/Event";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Main/Registration/Login";
import Signin from "./pages/Main/Registration/Signin/Signin";
import AddEventForm from "./pages/AddEvent/AddEvent";
import Dashboard from "./pages/Dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/event/:id" element={<Event/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/add" element={<AddEventForm/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
