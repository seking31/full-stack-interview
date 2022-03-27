import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Robots from "./components/Robots/Robots";
import Scoreboard from "./components/Scoreboard/Scorboard";
import Fight from "./components/Fight/Fight";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./Store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />} />
          <Route path="robots" element={<Robots />} />
          <Route path="scoreboard" element={<Scoreboard />} />
          <Route path="fight" element={<Fight />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById("root")
);
