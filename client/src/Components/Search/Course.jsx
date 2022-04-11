import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchCourse({ searchData }) {
  let navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [grid, setGrid] = useState(false);
  const filterData = courses.filter(
    (data) =>
      data.subjects.includes(searchData) || data.code.includes(searchData)
  );
  const handleSent = (data) => {
    console.log(data._id);
    let path = "../course-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("http://localhost:5000/courses")
      ).json();
      setCourses(response);
    };
    getData();
  }, []);
  return (
    <>
      <div class="filter-top d-flex align-items-center justify-content-between pb-4">
        <div>
          <h3 class="title font-size-24">{courses.length} Courses found</h3>
          <p class="font-size-14 line-height-20 pt-1">Select your best view</p>
        </div>
        <div class="">
          <button className="theme-btn" onClick={() => setGrid(true)}>
            Table
          </button>
          <button className="theme-btn ml-2" onClick={() => setGrid(false)}>
            grid
          </button>
        </div>
      </div>
      {grid === true ? (
        <>
          {" "}
          {filterData.map((data) => {
            return (
              <>
                <div class="card-item card-item-list card-item--list">
                  <div class="card-img"></div>
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <h3 class="card-title"></h3>
                      <span class="badge badge-warning text-white ml-2">
                        {data.semesterId}
                      </span>
                    </div>
                    <ul class="list-items list-items-2 pt-2 pb-3">
                      <li>
                        <span>Course Name:</span>
                        {data.subjects}
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
                    <div class="btn-box">
                      <a
                        href="#"
                        class="theme-btn theme-btn-small theme-btn-transparent"
                        data-toggle="modal"
                        data-target="#modalPopup"
                      >
                        <i class="la la-envelope mr-1"></i>Send Message
                      </a>
                    </div>
                  </div>
                  <div class="action-btns">
                    <a href="#" class="theme-btn theme-btn-small mr-2">
                      <i class="la la-check-circle mr-1"></i>Approve
                    </a>
                    <a href="#" class="theme-btn theme-btn-small">
                      <i class="la la-times mr-1"></i>Cancel
                    </a>
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
                          <td className="text-right">{data.teacherId.name}</td>
                          <td className="text-right">
                            <button onClick={() => handleSent(data)}>
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
        </>
      )}
    </>
  );
}

export default SearchCourse;
