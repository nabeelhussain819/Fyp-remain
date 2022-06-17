import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "../Pages/AdminTeacher/Dashboard/Admin";
import Navbar from "../Components/Header/Navbar";
import SideBar from "../Components/Header/Sidebar";
import Course from "../Pages/AdminTeacher/Index/Course";
import Department from "../Pages/AdminTeacher/Index/Department";
import Department1 from "../Pages/User/Details/Department";
import Program from "../Pages/AdminTeacher/Index/Program";
import Semester from "../Pages/AdminTeacher/Index/Semester";
import Teachers from "../Pages/AdminTeacher/Index/Teacher";
import { Profile } from "../Pages/AdminTeacher/Profile/Profile";
import DepartmentCreate from "../Pages/AdminTeacher/Create/Department";
import CourseCreate from "../Pages/AdminTeacher/Create/Course";
import ProgramCreate from "../Pages/AdminTeacher/Create/Program";
import SemesterCreate from "../Pages/AdminTeacher/Create/Semester";
import SessionCreate from "../Pages/AdminTeacher/Create/Session";
import AvailableQec from "../Pages/AdminTeacher/Index/AvailableQec";
import Students from "../Pages/AdminTeacher/Index/Students";
import SectionCreate from "../Pages/AdminTeacher/Create/Section";
import Allcreate from "../Pages/AdminTeacher/Create/AllCreate";
import Home from "../Pages/Home";

function Admin() {
  return (
    <>
      <section class="dashboard-area">
        <SideBar />
        <Navbar />
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/program" element={<Program />} />
            <Route path="/semester" element={<Semester />} />
            <Route path="/course" element={<Course />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="/department" element={<Department />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/students" element={<Students />} />
            <Route path="/departmentCreate" element={<DepartmentCreate />} />
            <Route path="/create-program" element={<ProgramCreate />} />
            <Route path="/courseCreate" element={<CourseCreate />} />
            <Route path="/sessionCreate" element={<SessionCreate />} />
            <Route path="/sectionCreate" element={<SectionCreate />} />
            <Route path="/semesterCreate" element={<SemesterCreate />} />
            <Route exact path="/avaliable-qec" element={<AvailableQec />} />
            <Route exact path="/all-create" element={<Allcreate />} />
            <Route path="/department-details/:id" element={<Department1 />} />
          </Routes>
        </Fragment>
      </section>
    </>
  );
}

export default Admin;
