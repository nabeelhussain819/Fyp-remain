import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

function Course() {
  const [courses, setCourses] = useState([]);
  const getData = async () => {
    const response = await (
      await fetch("http://localhost:5000/courses")
    ).json();
    setCourses(response);
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
                  Courses
                  <a href="courseCreate" style={{ float: "right" }}>
                    Add Course
                  </a>
                </h3>
                <p>
                  <small>
                    <a href="">Home</a> / <small> Courses</small>
                  </small>
                </p>
              </div>
            </div>
            <div className="row">
              {courses.slice(0, 3).map((data) => {
                return (
                  <>
                    <div className="col-md-4">
                      <div className="card card-chart" data-count="0">
                        <div className="card-body">
                          <h4 className="card-title">{data.subjects}</h4>
                          <p className="card-category">
                            <span className="text-success">Program</span>{" "}
                            {data.semesterId}
                          </p>
                        </div>
                        <div className="card-footer">
                          <div className="stats">
                            <p>
                              Total Teachers in {data.subjects} is{" "}
                              {data.teacherId.length}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
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
                    {courses.map((data) => {
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

export default Course;
