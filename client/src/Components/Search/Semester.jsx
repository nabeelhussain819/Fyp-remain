import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaThList, FaBorderNone } from "react-icons/fa";

function SearchSemester({ searchData }) {
  let navigate = useNavigate();
  const [semester, setSemester] = useState([]);
  const [grid, setGrid] = useState(true);
  const filterData = semester.filter((item) => item.name.includes(searchData));

  const handleSent = (data) => {
    let path = "../semester-detials/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/semesters")
      ).json();
      setSemester(response);
    };
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="filter-top d-flex align-items-center justify-content-between pb-4">
          <div>
            <h3 className=" font-size-24">{semester.length} Semester found</h3>
            <p className="font-size-14 line-height-20 pt-1">
              Select your best view
            </p>
          </div>
          <div className="">
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
                        {/* <img src={image} alt="Destination-img" /> */}
                      </a>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="cruise-details.html">{data.name}</a>
                      </h3>
                      <p className="card-meta">
                        Department Of {data.departmentId}
                      </p>
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-box">
                  <div className="form-title-wrap">
                    <h3 className="">Available Semesters Lists</h3>
                  </div>
                  <div className="form-content">
                    <div className="table-form table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Semesters Name</th>
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
                                  <td>
                                    {data.name} {data.sectionId._id}
                                  </td>
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

export default SearchSemester;
