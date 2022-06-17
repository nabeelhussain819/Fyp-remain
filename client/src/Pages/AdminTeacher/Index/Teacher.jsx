import React from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "../../../Components/Sidebar/TeacherSidebar";
function Teachers() {
  return (
    <>
      <div className="dashboard-bread dashboard-bread-2 section-bg-2 cta-area subscriber-area pt-4">
        <div className="container-fluid">
          <div className="arrow-separator"></div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">
                    Teachers
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-list text-right">
                <ul className="list-items">
                  <li>
                    <Link to="../Home">Home</Link>{" "}
                  </li>
                  <li>Teachers</li>
                </ul>
              </div>
            </div>
            <div className="form-group col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="main-panel">
          <div className="content">
            <TeacherSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachers;
