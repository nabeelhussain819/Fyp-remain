import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchTeacher({ searchData }) {
  let navigate = useNavigate();
  const [teacher, setTeacher] = useState([]);
  const [grid, setGrid] = useState(true);
  const filterData = teacher.filter((data) => data.name.includes(searchData));
  const handleSent = (data) => {
    console.log(data._id);
    let path = "../teacher-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/teachers")
      ).json();
      setTeacher(response);
    };
    getData();
  }, []);
  return (
    <>
      <div className="">
        <div className="filter-top d-flex align-items-center justify-content-between pb-4">
          <div>
            <h3 className=" font-size-24">
              {teacher.length} Teachers Available
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
                          <span>Program Name:</span>
                          {data.name}
                        </li>
                        <li>
                          <span>Department : </span> {data.departmentId}
                        </li>
                        <li>
                          <span>Total Tacher:</span> {data.courseId.name}
                        </li>
                        <li>
                          <span>Total User:</span> {data.programId.name}
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
                    <h3 className="">Available program Lists</h3>
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
                              studentId
                            </th>
                            <th scope="col" className="text-right"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterData.map((data) => {
                            return (
                              <>
                                <tr>
                                  <td>{data.name}</td>
                                  <td className="text-right">
                                    {data.courseId.name}
                                  </td>
                                  <td className="text-right">
                                    {data.departmentId}
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

export default SearchTeacher;
