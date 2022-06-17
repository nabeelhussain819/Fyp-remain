import React from "react";
import { Link } from "react-router-dom";
import CommentSidebar from "../../../Components/Sidebar/CommentsSidebar";

export default function Comments() {
  return (
    <div>
      <div className="dashboard-bread cta-area new-area pt-4">
        <div className="container-fluid">
          <div className="arrow-separator"></div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">
                    Comments
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-list text-right">
                <ul className="list-items">
                  <li>
                    <Link to="../dashboard">Dashboard</Link>{" "}
                  </li>
                  <li>Comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section-bg4">
        <div className="main-panel">
          <CommentSidebar />
        </div>
      </div>
    </div>
  );
}
