import React, { useEffect, useState } from "react";

import { FaThList, FaBorderNone } from "react-icons/fa";
function SearchStudent({ searchData }) {
  const [user, setUser] = useState([]);
  const [grid, setGrid] = useState(false);
  const filterData = user.filter((data) => data.name.includes(searchData));
  console.log(filterData);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/students")
      ).json();
      setUser(response);
    };
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="filter-top d-flex align-items-center justify-content-between pb-4">
          <div>
            <h3 className=" font-size-24">{user.length} program found</h3>
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
                        <span className="badge badge-warning text-white ml-2"></span>
                      </div>
                      <ul className="list-items list-items-2 pt-2 pb-3">
                        <li>
                          <span>Program Name:</span>
                          {data.name}
                        </li>
                        <li>
                          <span>Department : </span> {data.semesterId.name}
                        </li>
                        <li>
                          <span>Total Tacher:</span> {data.courseId.length}
                        </li>
                        <li>
                          <span>Total User:</span> {data.programId.length}
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
                      <a href="#" className="theme-btn theme-btn-small mr-2">
                        <i className="la la-check-circle mr-1"></i>Approve
                      </a>
                      <a href="#" className="theme-btn theme-btn-small">
                        <i className="la la-times mr-1"></i>Cancel
                      </a>
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
                            <th scope="col">Teacher</th>
                            <th scope="col">studentId</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterData.map((data) => {
                            return (
                              <>
                                <tr>
                                  <td>{data.name}</td>
                                  <td>{data.courseId.length}</td>
                                  <td>{data.semesterId.length}</td>
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

export default SearchStudent;
