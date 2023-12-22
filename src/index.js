import React from "react";
import * as ReactDOM from "react-dom/client";
import  Todolist from "../src/components/Todolist.js";
import {Provider} from "../src/contexts/Reducers.js";
import App from "./App";
// import { Provider  } from 'react-redux';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import DisplayToDo from "./components/DisplayToDo.js";
// const store = createStore(tasksReducer)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider >
        <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="add-todo" element={<Todolist />} />
        <Route path="display-list" element={<DisplayToDo />} />
      </Routes>
    </Router>
   
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();