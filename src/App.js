import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Authentication/Register";
import LoginPage from "./Authentication/Login";
import Admin from "./Admin";
import Teacher from "./Teacher";
import User from "./User";

let token = localStorage.getItem("list");
let isAdmin = localStorage.getItem("isAdmin");
let isTeacher = localStorage.getItem("isTeacher");
function App() {
  return (
    <div className="App">
      {!token ? (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/Signup" element={<Register />} />
              <Route exact path="/" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <>
          {isAdmin ? (
            <>
              <Fragment>
                <Admin />
              </Fragment>
            </>
          ) : (
            <>
              {isTeacher ? (
                <>
                  <Teacher />
                </>
              ) : (
                <>
                  <User />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
