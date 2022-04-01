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
import { Profile } from "../Pages/Profile/Profile";
import DepartmentCreate from "../Pages/Create/Department";
import CourseCreate from "../Pages/Create/Course";
import ProgramCreate from "../Pages/Create/Program";
import SemesterCreate from "../Pages/Create/Semester";
import SessionCreate from "../Pages/Create/Session";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/departmentCreate" element={<DepartmentCreate />} />
          <Route path="/programCreate" element={<ProgramCreate />} />
          <Route path="/courseCreate" element={<CourseCreate />} />
          <Route path="/sessionCreate" element={<SessionCreate />} />
          <Route path="/semesterCreate" element={<SemesterCreate />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default Admin;
