import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BreadCrumbArea from "../../../Components/UserUtilis/BreadCrumbArea";
const Qec = () => {
  const [course, setCourse] = useState([]);
  const [student, setStudent] = useState([]);
  function sendData() {}
  useEffect(() => {
    const getUser = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/data")
      ).json();
      response.map((data) => {
        return data._id == localStorage.getItem("id")
          ? setCourse(data.programId)
          : null;
      });
    };
    getUser();
  }, []);
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
                    QEC Form
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
                  <li>Course</li>
                  {localStorage.getItem("isAdmin") && (
                    <li>
                      <Link to="../create-course">Create Course</Link>{" "}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="package-area text-center pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="sec__title line-height-50">
                  Select QEC form To Submit
                </h2>
              </div>
            </div>
          </div>
          <div className="row padding-top-80px">
            <div className="col-lg-4 p-0">
              <div className="package-card package-card-active">
                <div className="package-title">
                  <h2 className="package__title">QEC form </h2>
                  <h3 className="package__price">For Teacher</h3>
                  <h5 className="package__month">Mid Term</h5>
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
                    to="/qec-teacher"
                    className="theme-btn theme-btn-transparent"
                  >
                    Evaluate Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="package-card"></div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="package-card package-card-active">
                <div className="package-title">
                  <h2 className="package__title">QEC Form</h2>
                  <h3 className="package__price">For Courses</h3>
                  <h5 className="package__month">Mid Term</h5>
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
                    to="/qec-course"
                    className="theme-btn theme-btn-transparent"
                  >
                    Evaluate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qec;
