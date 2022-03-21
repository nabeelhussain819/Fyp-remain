import React from "react";
import "../components/css/material-dashboard.min.css";
import Navbar from "../headers/admin/Navbar";
import SideBar from "../headers/admin/SideBar";

function Dashboard() {
  return (
    <>
      <div className="wrapper ">
        <SideBar />
        <div className="main-panel">
          <Navbar />
          <div className="content">
            <div className="container-fluid">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header card-header-success card-header-icon">
                    <div className="card-icon">
                      <i className="material-icons"></i>
                    </div>
                    <h4 className="card-title">
                      Global Sales by Top Locations
                    </h4>
                  </div>
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="table-responsive table-sales"></div>
                      </div>
                      <div className="col-md-6 ml-auto mr-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div class="col-md-4">
                  <div class="card card-chart" data-count="0">
                    <div
                      class="card-header card-header-success"
                      data-header-animation="true"
                    ></div>
                    <div class="card-body">
                      <h4 class="card-title">Daily Sales</h4>
                      <p class="card-category">
                        <span class="text-success">
                          <i class="fa fa-long-arrow-up"></i> 55%{" "}
                        </span>{" "}
                        increase in today sales.
                      </p>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">access_time</i> updated 4
                        minutes ago
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
