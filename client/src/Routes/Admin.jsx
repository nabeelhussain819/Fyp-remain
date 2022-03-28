import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "../Pages/Dashboard/Admin";
import Navbar from "../Components/Header/Navbar";
import SideBar from "../Components/Header/Sidebar";
import Course from "../Pages/Index/Course";
import Department from "../Pages/Index/Department";
import Program from "../Pages/Index/Program";
import Semester from "../Pages/Index/Semester";
import Teachers from "../Pages/Index/Teacher";
import AllCreate from "../Pages/Create/AllCreate";
import { Profile } from "../Pages/Profile/Profile";

function Admin() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Fragment>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/program" element={<Program />} />
          <Route path="/semester" element={<Semester />} />
          <Route path="/course" element={<Course />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/department" element={<Department />} />
          <Route path="/create" element={<AllCreate />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default Admin;
