import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Admin from "./Routes/Admin";
import Teacher from "./Routes/Teacher";
import User from "./Routes/User";
import ExtendedRegisterForm from "./Pages/Authentication/ExtendedRegisterForm";
import Home from "./Pages/Home";
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
              <Route exact path="/" element={<Home />} />
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
            </>
          ) : (
            <>
              <Route exact path="/user/*" element={<User />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
