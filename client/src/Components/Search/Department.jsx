import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

function SearchDepartment({ searchData }) {
  const [dept, setDept] = useState([]);
  const [grid, setGrid] = useState(false);
  const filterData = dept.filter((data) => data.name.includes(searchData));
  console.log(filterData);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("http://localhost:5000/departments")
      ).json();
      setDept(response);
    };
    getData();
  }, []);
  return (
    <>
      <div class="filter-top d-flex align-items-center justify-content-between pb-4">
        <div>
          <h3 class="title font-size-24">{dept.length} Department found</h3>
          <p class="font-size-14 line-height-20 pt-1">Select your best view</p>
        </div>
        <div class="">
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
          {dept.map((data) => {
            return (
              <>
                <div class="card-item card-item-list card-item--list">
                  <div class="card-img"></div>
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <h3 class="card-title"></h3>
                      <span class="badge badge-warning text-white ml-2"></span>
                    </div>
                    <ul class="list-items list-items-2 pt-2 pb-3">
                      <li>
                        <span>Department Name:</span>
                        {data.name}
                      </li>
                      <li>
                        <span>Total Teacher : </span> {data.teacherId.length}
                      </li>
                      <li>
                        <span>Total User :</span> {data.userId.length}
                      </li>
                      <li>
                        <span>Total Program :</span> {data.programId.length}
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
          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-box">
                    <div class="form-title-wrap"
                    ><h3 class="title">Available department Lists</h3></div>
                    <div class="form-content"><div class="table-form table-responsive">
                      <table class="table">
                      <tr>
                    <td></td>
                    <td>Department Name</td>
                    <td className="text-right">Total Teacher</td>
                    <td className="text-right">Total Students</td>
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
                          <td className="text-right">{data.userId.length}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                       </table></div></div></div></div></div></div></div>
        </>
      )}
    </>
  );
}

export default SearchDepartment;
