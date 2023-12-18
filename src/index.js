import React from "react";
import * as ReactDOM from "react-dom/client";
import  Todolist from "../src/components/Todolist.js";
import Provider from "./contexts/Reducers.js";
import App from "./App";
import { createStore } from 'redux'
import reportWebVitals from "./reportWebVitals";
import tasksReducer from "./contexts/Reducers.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import

const store = createStore(tasksReducer)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Todolist" element={<Todolist />} />
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();