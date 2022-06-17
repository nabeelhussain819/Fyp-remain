import React, { useState, useEffect } from "react";
import cardImagae from "../../../Assets/blog-img3.jpg";
import Section1 from "../../../Components/SvgSection/cta-area/Section_1";
import Section3 from "../../../Components/SvgSection/cta-area/Section_3";
import { useNavigate } from "react-router-dom";
import Chart from "../../../Components/Charts/Chart";

function Dashboard() {
  const [dept, setDept] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  function next(data) {
    let path = "../department-details/" + data;
    navigate(path);
  }
  useEffect(() => {
    const getData4 = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/students")
      ).json();
      setUsers(response);
    };
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/departments")
      ).json();
      setDept(response);
    };
    const getData2 = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/courses")
      ).json();
      setCourses(response);
    };
    const getData3 = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/teachers")
      ).json();
      setTeacher(response);
    };
    getData4();
    getData3();
    getData2();
    getData();
  }, []);

  return (
    <>
      <div className="dashboard-content-wrap ">
        <div className="dashboard-bread dashboard-bread-2 section-bg6">
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

          <div className="row mt-4">
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
          </div>
        </div>
        <div className="dashboard-main-content section-bg3">
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
