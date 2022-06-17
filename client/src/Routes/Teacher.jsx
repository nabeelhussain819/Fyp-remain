import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import SideBar from "../Components/Header/Sidebar";
import Dashboard from "../Pages/AdminTeacher/Dashboard/Teacher";
import Course from "../Pages/AdminTeacher/Index/Course";
import Department from "../Pages/AdminTeacher/Index/Department";
import Program from "../Pages/AdminTeacher/Index/Program";
import AvailableQec from "../Pages/AdminTeacher/Index/AvailableQec";
import Semester from "../Pages/AdminTeacher/Index/Semester";
import Students from "../Pages/AdminTeacher/Index/Students";
import Teachers from "../Pages/AdminTeacher/Index/Teacher";
import { Profile } from "../Pages/AdminTeacher/Profile/Profile";
import Home from "../Pages/Home";
function Teacher() {
  return (
    <>
      <section class="dashboard-area">
        <Navbar />
        <SideBar />
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/department" element={<Department />} />
            <Route path="/program" element={<Program />} />
            <Route path="/semester" element={<Semester />} />
            <Route path="/students" element={<Students />} />
            <Route path="/course" element={<Course />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="/profile" element={<Profile />} />
            <Route exact path="/avaliable-qec" element={<AvailableQec />} />
          </Routes>
        </Fragment>
      </section>
    </>
  );
}

export default Teacher;
