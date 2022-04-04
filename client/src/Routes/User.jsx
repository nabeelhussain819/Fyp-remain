import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import SideBar from "../Components/Header/Sidebar";
import Dashboard from "../Pages/Dashboard/User";
import Course from "../Pages/Index/Course";
import Department from "../Pages/Index/Department";
import Program from "../Pages/Index/Program";
import Qec from "../Pages/Index/Qec";
import Semester from "../Pages/Index/Semester";
import Teachers from "../Pages/Index/Teacher";
import { Profile } from "../Pages/Profile/Profile";

function User() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Fragment>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/department" element={<Department />} />
          <Route path="/program" element={<Program />} />
          <Route path="/semester" element={<Semester />} />
          <Route path="/course" element={<Course />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route exact path="/qec" element={<Qec />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default User;
