import React from "react";
import Chart from "../../../Components/Charts/Chart";
import LineChart from "../../../Components/Charts/LineChart";
import Navbar from "../../../Components/Header/Navbar";

function Dashboard() {
  return (
    <>
      <div className="dashboard-content-wrap">
        <div className="dashboard-bread dashboard-bread-2">
          <div className="container-fluid">
            <div class="arrow-separator"></div>
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

          <div className="row mt-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div className="col-lg-3 responsive-column-l">
                <div className="icon-box icon-layout-2 dashboard-icon-box pb-0">
                  <div className="d-flex pb-3 justify-content-between">
                    <div className="info-content">
                      <p className="info__desc">Total Booking!</p>
                      <h4 className="info__title">55</h4>
                    </div>
                    <div className="info-icon icon-element bg-4">
                      <i className="la la-shopping-cart"></i>
                    </div>
                  </div>
                  <div className="section-block"></div>
                  <a
                    href="admin-dashboard-booking.html"
                    className="d-flex align-items-center justify-content-between view-all"
                  >
                    View All <i className="la la-angle-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard-main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 responsive-column--m">
                <div className="form-box">
                  <div className="form-content">
                    <div className="chartjs-size-monitor">
                      <div className="chartjs-size-monitor-expand">
                        <div className=""></div>
                      </div>
                      <div className="chartjs-size-monitor-shrink">
                        <div className=""></div>
                      </div>
                    </div>
                    <Chart />
                  </div>
                </div>
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
