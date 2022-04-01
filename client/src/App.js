import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Admin from "./Routes/Admin";
import Teacher from "./Routes/Teacher";
import User from "./Routes/User";
import Qec from "./Pages/Index/Qec";
import ExtendedRegisterForm from "./Pages/Authentication/ExtendedRegisterForm";
let token = localStorage.getItem("list");
let isAdmin = localStorage.getItem("isAdmin");
let isTeacher = localStorage.getItem("isTeacher");
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!token ? (
            <>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/signup" element={<Register />} />
              <Route
                exact
                path="/extendedForm"
                element={<ExtendedRegisterForm />}
              />
            </>
          ) : isAdmin ? (
            <>
              <Route exact path="/admin-panel/*" element={<Admin />} />
            </>
          ) : isTeacher ? (
            <>
              <Route exact path="/teacher/*" element={<Teacher />} />
              <Route exact path="/qe" element={<Qec />} />
            </>
          ) : (
            <>
              <Route exact path="/qe" element={<Qec />} />
              <Route exact path="/user/*" element={<User />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
