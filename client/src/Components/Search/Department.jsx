import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/department.jpg";
import {
  FaThList,
  FaBorderNone,
  FaEye,
  FaTrashAlt,
  FaPen,
} from "react-icons/fa";

function SearchDepartment({ searchData }) {
  let navigate = useNavigate();
  const [dept, setDept] = useState([]);
  const [grid, setGrid] = useState(false);
  const filterData = dept.filter((data) => data.name.includes(searchData));

  const handleSent = (data) => {
    let path = "../department-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/departments")
      ).json();
      setDept(response);
    };
    getData();
  }, []);
  return (
    <section className="card-area ">
      <div className="container">
        <div className="filter-top d-flex align-items-center justify-content-between pb-4">
          <div>
            <h3 className="font-size-24">
              Total Departments Available {dept.length}
            </h3>
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
                    <div className="card-img">
                      <a href="tour-details.html" className="d-block">
                        <img src={image} alt="Destination-img" />
                      </a>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="cruise-details.html">{data.name}</a>
                      </h3>
                      <p className="card-meta">Department Of {data.name}</p>
                      <div className="card-rating">
                        <span className="badge text-white">
                          {data.rating}/5
                        </span>
                        <span className="review__text">Very good</span>
                        <span className="rating__text">
                          {data.studentId.length} Students
                        </span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">Created At </span>
                          <span className="price__num">
                            {new Date(data.createdAt).toLocaleDateString(
                              "en-US"
                            )}
                          </span>
                        </p>
                        <button
                          onClick={() => handleSent(data)}
                          className="btn-text bg-light border-0 p-2"
                        >
                          Read details
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            <div className="content ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-box shadow-lg">
                      <div className="form-title-wrap">
                        <h3 className="">Available department Lists</h3>
                      </div>
                      <div className="form-content">
                        <div className="table-form table-responsive ">
                          <table className="table">
                            <tr>
                              <td></td>
                              <td>Department Name</td>
                              <td className="text-right">Total Teacher</td>
                              <td className="text-right">Total Students</td>
                              <td className="text-center">Action</td>
                            </tr>
                            <tbody>
                              {filterData.map((data) => {
                                return (
                                  <>
                                    <tr>
                                      <td>
                                        <div className="flag"></div>
                                      </td>
                                      <td>{data.name}</td>
                                      <td className="text-right">
                                        {data.teacherId.length}
                                      </td>
                                      <td className="text-right">
                                        {data.studentId.length}
                                      </td>
                                      <td className="text-center">
                                        <button
                                          onClick={() => handleSent(data)}
                                          className="border-0 bg-transparent pr-4"
                                        >
                                          <FaEye
                                            size={22}
                                            className="text-dark"
                                          />
                                        </button>
                                        {localStorage.getItem("isAdmin") && (
                                          <>
                                            <button
                                              onClick={() => handleSent(data)}
                                              className="border-0 bg-transparent pr-4"
                                            >
                                              <FaPen
                                                size={22}
                                                className="text-dark"
                                              />
                                            </button>
                                            <button
                                              onClick={() => handleSent(data)}
                                              className="border-0 bg-transparent "
                                            >
                                              <FaTrashAlt
                                                size={22}
                                                className="text-dark"
                                              />
                                            </button>
                                          </>
                                        )}
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
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default SearchDepartment;
