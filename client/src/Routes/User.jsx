import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import UserNavbar from "../Components/Header/UserNavbar";
import Footer from "../Components/UserUtilis/Footer";
import Dashboard from "../Pages/User/Dashboard/User";
import AvailableQec from "../Pages/AdminTeacher/Index/AvailableQec";
import { Profile } from "../Pages/AdminTeacher/Profile/Profile";
import Department from "../Pages/User/Details/Department";
import Program from "../Pages/User/Details/Program";
import Semester from "../Pages/User/Details/Semester";
import Course from "../Pages/User/Details/Course";
import Teachers from "../Pages/User/Details/Teacher";
import { Courses } from "../Pages/User/Index/Courses";
import Departments from "../Pages/User/Index/Department";
import Programs from "../Pages/User/Index/Program";
import Semesters from "../Pages/User/Index/Semester";
import Teacher from "../Pages/User/Index/Teacher";
import CourseQec from "../Pages/User/Qec/CourseQec";
import TeacherQec from "../Pages/User/Qec/TeacherQec";
import StudentQec from "../Pages/User/Qec/StudentQec";
import Qec from "../Pages/User/Details/Qec";
import Home from "../Pages/Home";
import OwnCourse from "../Pages/User/OwnThings/Course";
import OwnDepartment from "../Pages/User/OwnThings/Department";
import OwnProgram from "../Pages/User/OwnThings/Program";
import OwnSemester from "../Pages/User/OwnThings/Semester";
import { Comments } from "../Pages/User/Index/Comment";
import { Complain } from "../Pages/User/Index/Complain";
import OwnComments from "../Pages/User/OwnThings/Comments";
import OwnComplains from "../Pages/User/OwnThings/Complains";

function User() {
  return (
    <>
      <UserNavbar />
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/department" element={<Departments />} />
          <Route path="/department-details/:id" element={<Department />} />
          <Route path="/program-details/:id" element={<Program />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/semester-detials/:id" element={<Semester />} />
          <Route path="/semester" element={<Semesters />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/course-details/:id" element={<Course />} />
          <Route path="/teacher-details/:id" element={<Teachers />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/own-course" element={<OwnCourse />} />
          <Route path="/own-department" element={<OwnDepartment />} />
          <Route path="/own-program" element={<OwnProgram />} />
          <Route path="/own-semester" element={<OwnSemester />} />
          <Route exact path="/available-qec/:id" element={<AvailableQec />} />
          <Route exact path="/qec-course" element={<CourseQec />} />
          <Route exact path="/qec-teacher" element={<TeacherQec />} />
          <Route exact path="/qec-student" element={<StudentQec />} />
          <Route exact path="/qec" element={<Qec />} />
          <Route exact path="/comments" element={<Comments />} />
          <Route exact path="/own-comments" element={<OwnComments />} />
          <Route exact path="/complains" element={<Complain />} />
          <Route exact path="/own-complains" element={<OwnComplains />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Fragment>
      <Footer />
    </>
  );
}

export default User;
