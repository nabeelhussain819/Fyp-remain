import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import UserNavbar from "../Components/Header/UserNavbar";
import Footer from "../Components/UserUtilis/Footer";
import Department from "../Pages/User/Details/Department";
import Program from "../Pages/User/Details/Program";
import Course from "../Pages/User/Details/Course";
import Teachers from "../Pages/User/Details/Teacher";
import { Courses } from "../Pages/User/Index/Courses";
import Departments from "../Pages/User/Index/Department";
import Programs from "../Pages/User/Index/Program";
import Teacher from "../Pages/User/Index/Teacher";
import Home from "../Pages/Home";
import { Faq } from "../Components/Qec/faq";
import { Gallery } from "../Components/Gallery";

function Guest() {
  return (
    <>
      <UserNavbar />
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department" element={<Departments />} />
          <Route path="/department-details/:id" element={<Department />} />
          <Route path="/program-details/:id" element={<Program />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/course-details/:id" element={<Course />} />
          <Route path="/teacher-details/:id" element={<Teachers />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Fragment>
      <Footer />
    </>
  );
}

export default Guest;
