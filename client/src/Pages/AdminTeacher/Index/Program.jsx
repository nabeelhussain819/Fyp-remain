import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgramSidebar from "../../../Components/Sidebar/ProgramSidebar";

function Program() {
  return (
    <>
      <div className="dashboard-bread cta-area prog-area pt-4">
        <div className="container-fluid">
          <div className="arrow-separator"></div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">
                    Programs
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-list text-right">
                <ul className="list-items">
                  <li>
                    <Link to="../">Home</Link>{" "}
                  </li>
                  <li>Program</li>
                  {localStorage.getItem("isAdmin") && (
                    <li>
                      <Link to="../create-program">Create Program</Link>{" "}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="form-group col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid section-bg4">
        <div className="main-panel">
          <div className="content">
            <ProgramSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Program;
