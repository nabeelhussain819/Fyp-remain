import React from "react";
import CommentsColumn from "../../../Components/AdminUtilis/CommentsColumn";
import { ResponseStatus } from "../../../Components/AdminUtilis/ResponseStatus";
import TopBar from "../../../Components/AdminUtilis/TopBar";
import Chart from "../../../Components/Charts/Chart";

function Dashboard() {
  return (
    <>
      <div className="dashboard-content-wrap">
        <div className="dashboard-bread dashboard-bread-2">
          <div className="container-fluid">
            <div className="arrow-separator"></div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title font-size-30 text-white">
                      Dashboard
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="index.html" className="text-white">
                        Home
                      </a>
                    </li>
                    <li>Pages</li>
                    <li>Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <TopBar />
        </div>
        <div className="dashboard-main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 responsive-column--m ">
                <div className="form-box">
                  <div className="form-content shadow-lg">
                    <Chart />
                  </div>
                </div>
              </div>
              <div class="col-lg-5 responsive-column--m ">
                <CommentsColumn />
              </div>
              <div class="col-lg-12">
                <ResponseStatus />
              </div>
            </div>
            <div className="border-top mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
