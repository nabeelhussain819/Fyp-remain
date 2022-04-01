import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

function Department() {
  const [depart, setDepart] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:5000/departments");
    setDepart(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="wrapper ">
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="col-md-12 ">
                <h3>
                  Departments
                  <a href="departmentCreate" style={{ float: "right" }}>
                    Add Department
                  </a>
                </h3>
                <p>
                  <small>
                    <a href="dashboard">Home</a> / <small> Departments</small>
                  </small>
                </p>
              </div>
            </div>
            <div className="row">
              {depart.map((data) => (
                <div className="col-md-4">
                  <div className="card card-chart" data-count="0">
                    <div className="card-body">
                      <h4 className="card-title ">
                        Department : {data.name}
                      </h4>
                      <p className="card-category">
                        <span className="text-success">Total Programs</span>{" "}
                        {data.programId.length}
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <p>Total Students {data.userId.length}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="table-responsive table-sales">
                <table className="table">
                  <thead>
                    <tr>
                      <td></td>
                      <td>Department</td>
                      <td className="text-right">Total Student</td>
                      <td className="text-right">Total Teacher</td>
                    </tr>
                  </thead>
                  <tbody>
                    {depart.map((item) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <div className="flag"></div>
                            </td>
                            <td>{item.name}</td>
                            <td className="text-right">{item.userId.length}</td>
                            <td className="text-right">
                              {item.teacherId.length}
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
    </>
  );
}

export default Department;
