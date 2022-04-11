import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import UserNavbar from "../Components/Header/UserNavbar";
import Footer from "../Components/UserUtilis/Footer";
import Dashboard from "../Pages/User/Dashboard/User";
import Qec from "../Pages/AdminTeacher/Index/Qec";
import { Profile } from "../Pages/AdminTeacher/Profile/Profile";
import Department from "../Pages/User/Details/Department";
import Program from "../Pages/User/Details/Program";
import Semester from "../Pages/User/Details/Semester";
import Course from "../Pages/User/Details/Course";
import Teachers from "../Pages/User/Details/Teacher";
import { Courses } from "../Pages/User/Index/Courses";
import Departments from "../Pages/User/Index/Department";
import Programs from "../Pages/User/Index/Program";
import { Semesters } from "../Pages/User/Index/Semester";
import Teacher from "../Pages/User/Index/Teacher";

function User() {
  return (
    <>
      <UserNavbar />
      <Fragment>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/department" element={<Departments />} />
          <Route path="/department-details" element={<Department />} />
          <Route path="/program-details" element={<Program />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/semester-detials" element={<Semester />} />
          <Route path="/semester" element={<Semesters />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/course-details/:id" element={<Course />} />
          <Route path="/teacher-details" element={<Teachers />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route exact path="/qec" element={<Qec />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Fragment>
      <Footer />
    </>
  );
}

export default User;
