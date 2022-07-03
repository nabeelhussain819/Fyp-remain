import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaThList, FaBorderNone } from "react-icons/fa";

function SearchComplain({ searchData }) {
  let navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [grid, setGrid] = useState(true);
  const filterData = courses.filter(
    (data) => data.name.includes(searchData) || data.code.includes(searchData)
  );
  const handleSent = (data) => {
    console.log(data._id);
    let path = "../course-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/courses")
      ).json();
      setCourses(response);
    };
    getData();
  }, []);
  return (
    <>
      <div className=" d-flex align-items-center justify-content-between pb-4">
        <div>
          <h3 className=" font-size-24">{courses.length} Courses found</h3>
          <p className="font-size-14 line-height-20 pt-1">
            Select your best view
          </p>
        </div>
        <div className="">
          {localStorage.getItem("isAdmin") ? null : (
            <>
              {" "}
              <button
                className="border-0 bg-light p-1"
                onClick={() => setGrid(true)}
              >
                <FaBorderNone size={22} />
              </button>
              <button
                className="border-0 bg-light p-1"
                onClick={() => setGrid(false)}
              >
                <FaThList size={22} />
              </button>
            </>
          )}
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
            <div className="col-lg-12">
              <div className="form-box shadow-lg">
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
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SearchComplain;
