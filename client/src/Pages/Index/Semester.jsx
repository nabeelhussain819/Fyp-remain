import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

function Semester() {
  const [semester, setSemester] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:5000/semesters");
    setSemester(await response.json());
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
                  {" "}
                  Semesters
                  <a href="semesterCreate" style={{ float: "right" }}>
                    Add Semester
                  </a>
                </h3>
                <p>
                  <small>
                    <a href="dashboard">Home</a> / <small> Semesters</small>
                  </small>
                </p>
              </div>
            </div>
            <div className="row">
              {semester.map((data) => (
                <div className="col-md-4">
                  <div className="card card-chart" data-count="0">
                    <div className="card-body">
                      <h4 className="card-title">semester-{data.semester}</h4>
                      <p className="card-category">
                        <span className="text-success">Program Name :</span>
                        {data.programId.prog}
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <p>Total Number Of Courses {data.courseId.length}</p>
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
                      <td>Semester</td>
                      <td className="text-right">total Courses</td>
                      <td className="text-right">total Students</td>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.map((data) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <div className="flag"></div>
                            </td>
                            <td>semester-{data.semester}</td>
                            <td className="text-right">
                              {data.courseId.length}
                            </td>
                            <td className="text-right">{data.userId.length}</td>
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

export default Semester;
