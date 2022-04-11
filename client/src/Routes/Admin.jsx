import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "../Pages/AdminTeacher/Dashboard/Admin";
import Navbar from "../Components/Header/Navbar";
import SideBar from "../Components/Header/Sidebar";
import Course from "../Pages/AdminTeacher/Index/Course";
import Department from "../Pages/AdminTeacher/Index/Department";
import Program from "../Pages/AdminTeacher/Index/Program";
import Semester from "../Pages/AdminTeacher/Index/Semester";
import Teachers from "../Pages/AdminTeacher/Index/Teacher";
import { Profile } from "../Pages/AdminTeacher/Profile/Profile";
import DepartmentCreate from "../Pages/AdminTeacher/Create/Department";
import CourseCreate from "../Pages/AdminTeacher/Create/Course";
import ProgramCreate from "../Pages/AdminTeacher/Create/Program";
import SemesterCreate from "../Pages/AdminTeacher/Create/Semester";
import SessionCreate from "../Pages/AdminTeacher/Create/Session";
import Qec from "../Pages/AdminTeacher/Index/Qec";
import Students from "../Pages/AdminTeacher/Index/Students";

function Admin() {
  return (
    <>
      <section class="dashboard-area">
        <SideBar />
        <Navbar />
        <Fragment>
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/program" element={<Program />} />
            <Route path="/semester" element={<Semester />} />
            <Route path="/course" element={<Course />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="/department" element={<Department />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/students" element={<Students />} />
            <Route path="/departmentCreate" element={<DepartmentCreate />} />
            <Route path="/programCreate" element={<ProgramCreate />} />
            <Route path="/courseCreate" element={<CourseCreate />} />
            <Route path="/sessionCreate" element={<SessionCreate />} />
            <Route path="/semesterCreate" element={<SemesterCreate />} />
            <Route exact path="/qec" element={<Qec />} />
          </Routes>
        </Fragment>
      </section>
    </>
  );
}

export default Admin;
