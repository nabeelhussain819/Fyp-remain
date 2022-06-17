import React, { useEffect, useState } from "react";
import BreadCrumbArea from "../../../Components/UserUtilis/BreadCrumbArea";
import { useNavigate } from "react-router-dom";
import myData from "../../../Components/Qec/question.json";
import { Link, useParams } from "react-router-dom";
import CourseComplain from "../../../Components/ComplainBox/Course";

const OwnSemester = () => {
  let navigate = useNavigate();
  const params = useParams();
  const [courses, setCourses] = useState([]);
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [name1, setName] = useState("");

  console.log(courses);
  const handleSent = (data) => {
    console.log(data._id);
    let path = "../semester-detials/" + data._id;
    navigate(path);
  };
  const handleChange = (data) => {
    let path = "../qec-course/" + data._id;
    navigate(path);
  };
  const filterData = courses.filter(
    (data) => data.name.includes(name1) || data.code.includes(name1)
  );
  function searchData(e) {
    let data = e.target.value;
    setName(data);
  }
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/semesters")
      ).json();
      setCourses(response);
    };
    getData();
  }, []);
  return (
    <>
      <div className="dashboard-bread cta-area new-area pt-4">
        <div className="container-fluid">
          <div className="arrow-separator"></div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">
                    Courses
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
                  <li>Your Courses</li>
                  {localStorage.getItem("isAdmin") && (
                    <li>
                      <Link to="../create-course">Create Course</Link>{" "}
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
          <div className="row pt-4">
            <div className="col-lg-4">
              <div className="sidebar mt-0">
                <div className="sidebar-widget">
                  <h3 className="title stroke-shape">Search Now</h3>
                  <div className="sidebar-price-range">
                    <div className="slider-range-wrap">
                      <div className="price-slider-amount padding-bottom-20px">
                        <label for="amount2" className="filter__label">
                          Name :
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={name1}
                          placeholder="Search..."
                          onChange={searchData}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="filter-top d-flex align-items-center justify-content-between pb-4">
                <div>
                  <h3 className="title font-size-24">
                    {courses.length} Courses found
                  </h3>
                  <p className="font-size-14 line-height-20 pt-1">
                    Select your best view
                  </p>
                </div>
                <div className="">
                  <button className="theme-btn" onClick={() => setGrid(false)}>
                    Table
                  </button>
                  <button
                    className="theme-btn ml-2"
                    onClick={() => setGrid(true)}
                  >
                    Grid
                  </button>
                </div>
              </div>
              {grid === true ? (
                <>
                  {filterData.map((data) => {
                    return (
                      <>
                        {console.log(filterData)}
                        <div className="card-item card-item-list card-item--list shadow-lg">
                          <div className="card-img"></div>
                          <div className="card-body">
                            <div className="d-flex align-items-center">
                              <h3 className="card-title"></h3>
                              <span className="badge badge-warning text-white ml-2">
                                {data.semesterId}
                              </span>
                            </div>
                            <ul className="list-items list-items-2 pt-2 pb-3">
                              <li>
                                <span>Course Name:</span>
                                {data.name}
                              </li>
                              <li>
                                <span>Semester : </span> {data.semesterId}
                              </li>
                              <li>
                                <span>Code :</span> {data.code}
                              </li>
                              <li>
                                <span>Client:</span> David Martin
                              </li>
                            </ul>
                            <div className="btn-box">
                              <a
                                href="#"
                                className="theme-btn theme-btn-small theme-btn-transparent"
                                data-toggle="modal"
                                data-target="#modalPopup"
                              >
                                Add Qec
                              </a>
                            </div>
                          </div>
                          <div className="action-btns">
                            <button
                              onClick={() => handleSent(data)}
                              className="theme-btn theme-btn-small mr-2"
                            >
                              See More
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className="row">
                    <div className="table-responsive table-sales">
                      <table className="table">
                        <thead>
                          <tr>
                            <td></td>
                            <td>Course Name</td>
                            <td className="text-right">Code</td>
                            <td className="text-right">Teacher</td>
                            <td className="text-right"></td>
                          </tr>
                        </thead>
                        <tbody>
                          {filterData.map((data) => {
                            return (
                              <>
                                <tr>
                                  <td>
                                    <div className="flag"></div>
                                  </td>
                                  <td>{data.subjects}</td>
                                  <td className="text-right">{data.code}</td>
                                  <td className="text-right">
                                    {data.teacherId.name}
                                  </td>
                                  <td className="text-right">
                                    <button
                                      onClick={() => handleSent(data)}
                                      className="theme-btn theme-btn-sm mr-2"
                                    >
                                      more
                                    </button>
                                  </td>
                                  <td className="text-right">
                                    <button
                                      onClick={() => handleSent(data)}
                                      className="theme-btn theme-btn-sm mr-2"
                                    >
                                      Add Qec
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnSemester;
