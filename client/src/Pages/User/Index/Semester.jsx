import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Semesters() {
  let navigate = useNavigate();
  const [semester, setSemester] = useState([]);
  const [user, setUser] = useState([]);
  const [grid, setGrid] = useState(true);
  const filterData = semester;
  console.log(user);
  const handleSent = (data) => {
    let path = "../semester-detials/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/sections")
      ).json();
      response.map((data) => data._id == user && setSemester(data.semesterId));
    };
    const getUser = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/students")
      ).json();
      response.map(
        (data) =>
          data._id == localStorage.getItem("id") && setUser(data.sectionId)
      );
    };
    getUser();
    getData();
  }, []);
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
                    Semesters
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
                  <li>Semesters</li>
                  {localStorage.getItem("isAdmin") && (
                    <li>
                      <Link to="../create-semester">Create Semester</Link>{" "}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="form-group col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="container pt-4">
        <div className="filter-top d-flex align-items-center justify-content-between pb-4">
          <div>
            <h3 className="title font-size-24">
              {semester.length} Semester found
            </h3>
            <p className="font-size-14 line-height-20 pt-1">
              Select your best view
            </p>
          </div>
          <div className="">
            <button className="theme-btn" onClick={() => setGrid(true)}>
              Grid
            </button>
            <button className="theme-btn ml-2" onClick={() => setGrid(false)}>
              Table
            </button>
          </div>
        </div>
        {grid === true ? (
          <>
            {filterData.map((data) => {
              return (
                <>
                  <div className="card-item card-item-list card-item--list shadow-lg">
                    <div className="card-img"></div>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <h3 className="card-title"></h3>
                        <span className="badge badge-warning text-white ml-2"></span>
                      </div>
                      <ul className="list-items list-items-2 pt-2 pb-3">
                        <li>
                          <span>Semester Name:</span>
                          {data.name}
                        </li>
                        <li>
                          <span>Total Tacher:</span> {data.teacherId.length}
                        </li>
                        <li>
                          <span>Total User:</span> {data.studentId.length}
                        </li>
                      </ul>
                      <div className="btn-box">
                        <a
                          href="#"
                          className="theme-btn theme-btn-small theme-btn-transparent"
                          data-toggle="modal"
                          data-target="#modalPopup"
                        >
                          <i className="la la-envelope mr-1"></i>Send Message
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-box">
                  <div className="form-title-wrap">
                    <h3 className="title">Available program Lists</h3>
                  </div>
                  <div className="form-content">
                    <div className="table-form table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Program Name</th>
                            <th scope="col" className="text-right">
                              Teacher
                            </th>
                            <th scope="col" className="text-right">
                              userId
                            </th>
                            <th scope="col" className="text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterData.map((data) => {
                            return (
                              <>
                                <tr>
                                  {" "}
                                  <td>{data.name}</td>
                                  <td className="text-right">
                                    {data.teacherId.length}
                                  </td>
                                  <td className="text-right">
                                    {data.studentId.length}
                                  </td>
                                  <td className="text-right">
                                    <button
                                      onClick={() => handleSent(data)}
                                      className="theme-btn theme-btn-sm mr-2"
                                    >
                                      more
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
