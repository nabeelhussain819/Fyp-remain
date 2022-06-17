import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const AvailableQec = () => {
  return (
    <>
      <section className=" cta-area section-bg-2 subscriber-area ">
        <div className="hero-box ">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <div className="container">
                      <h2 className="sec__title font-size-30 text-white">
                        QEC FORM
                      </h2>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <svg
            className="hero-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
          </svg>{" "}
        </div>
      </section>
      <section className="package-area  text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading"></div>
            </div>
          </div>
          <div className="row padding-top-80px">
            <div className="col-lg-4 p-0">
              <div className="package-card">
                <div className="package-title">
                  <h2 className="package__title">Evaluate Teacher</h2>
                  <h3 className="package__price">
                    <span>$</span>13.99
                  </h3>
                  <h5 className="package__month">Per month</h5>
                  <svg
                    className="hero-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path>
                  </svg>
                </div>
                <ul className="list-items">
                  <li>Disk space 250Gb</li>
                  <li>Bandwidth 25Gb</li>
                  <li>Databases 1</li>
                  <li className="text-disabled">Email accounts NO</li>
                  <li className="text-disabled">24h support NO</li>
                  <li className="text-disabled">Email support NO</li>
                </ul>
                <div className="btn-box">
                  <Link
                    className="theme-btn theme-btn-transparent"
                    to="/qec-teacher"
                  >
                    Start
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0"></div>
            <div className="col-lg-4 p-0">
              <div className="package-card">
                <div className="package-title">
                  <h2 className="package__title">Evaluate Courses</h2>
                  <h3 className="package__price">
                    <span>$</span>155.99
                  </h3>
                  <h5 className="package__month">Per month</h5>
                  <svg
                    className="hero-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path>
                  </svg>
                </div>
                <ul className="list-items">
                  <li>Disk space 500Gb</li>
                  <li>Bandwidth 125Gb</li>
                  <li>Databases 1</li>
                  <li>Email accounts YES</li>
                  <li>24h support YES</li>
                  <li>Email support YES</li>
                </ul>
                <div className="btn-box">
                  <Link
                    className="theme-btn theme-btn-transparent"
                    to="/qec-course"
                  >
                    Start
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvailableQec;
