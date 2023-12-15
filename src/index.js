import React from "react";
import * as ReactDOM from "react-dom/client";
import { HomePage } from "../src/components/HomePage.js";
import { Todolist } from "../src/components/Todolist.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="Todolist" element={<Todolist />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();