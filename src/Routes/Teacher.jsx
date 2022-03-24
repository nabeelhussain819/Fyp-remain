import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import SideBar from "../Components/Header/Sidebar";
import Dashboard from "../Pages/Dashboard/Teacher";
import Course from "../Pages/Index/Course";
import Department from "../Pages/Index/Department";
import Program from "../Pages/Index/Program";
import Semester from "../Pages/Index/Semester";
import Teachers from "../Pages/Index/Teacher";
function Teacher() {
    return (
        <>
            <Navbar />
            <SideBar />
            <Fragment>
                <Routes>
                    <Route path="/teacher-panel" element={<Dashboard />} />
                    <Route path="/department" element={<Department />} />
                    <Route path="/program" element={<Program />} />
                    <Route path="/semester" element={<Semester />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/teacher" element={<Teachers />} />
                </Routes>
            </Fragment>
        </>
    );
}

export default Teacher;