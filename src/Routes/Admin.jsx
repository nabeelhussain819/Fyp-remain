import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "../Pages/Dashboard/Admin";
import Navbar from "../Components/Header/Navbar";
import SideBar from "../Components/Header/Sidebar";

// import CreateProgram from "./components/program/Create";
// import CreateDept from "./components/department/Create";
// import CreateSemes from "./components/semester/Create";
// import CreateCourse from "./components/course/Create";
// import Dashboard from "./admin/Dashboard";
// import ReadProgram from "./components/program/Index";
// import ReadDept from "./components/department/Index";
// import ReadSemes from "./components/semester/Index";
// import ReadCourse from "./components/course/Index";
// import Index from "./components/Qec/Index";
function Admin() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Fragment>
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          {/* <Route path="/createProgram" element={<CreateProgram />} />
          <Route path="/createDepartment" element={<CreateDept />} />
          <Route path="/createSemester" element={<CreateSemes />} />
          <Route path="/createCourse" element={<CreateCourse />} />
          <Route path="/ReadProgram" element={<ReadProgram />} />
          <Route path="/ReadDept" element={<ReadDept />} />
          <Route path="/ReadSemes" element={<ReadSemes />} />
          <Route path="/ReadCourse" element={<ReadCourse />} />
          <Route path="/Qec" element={<Index />} /> */}
        </Routes>
      </Fragment>

    </>
  );
}

export default Admin;