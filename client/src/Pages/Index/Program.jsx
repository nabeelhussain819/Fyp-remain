import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

function Program() {
  const [program, setProgram] = useState([]);
  const getData = async () => {
    const response = await (
      await fetch("http://localhost:5000/readProgram")
    ).json();
    setProgram(await response);
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
                  Programs
                  <a href="programCreate" style={{ float: "right" }}>
                    Add Program
                  </a>
                </h3>
                <p>
                  <small>
                    <a href="">Home</a> / <small> Programs</small>
                  </small>
                </p>
              </div>
            </div>
            <div className="row">
              {program.map((item) => {
                return (
                  <div className="col-md-4">
                    <div className="card card-chart" data-count="0">
                      <div className="card-body">
                        <h4 className="card-title">
                          Program Name : {item.prog}
                        </h4>
                        <p className="card-category">
                          <span className="text-success">Department </span>
                          {item.departmentId.department}
                        </p>
                      </div>
                      <div className="card-footer">
                        <div className="stats">
                          <p>
                            Total Students in {item.prog} is{" "}
                            {item.userId.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="table-responsive table-sales">
                <table className="table">
                  <thead>
                    <tr>
                      <td></td>
                      <td>Program</td>
                      <td className="text-right">Total Semester</td>
                      <td className="text-right">Total Students</td>
                      <td className="text-right">Total Teacher</td>
                    </tr>
                  </thead>
                  <tbody>
                    {program.map((item) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <div className="flag"></div>
                            </td>
                            <td>{item.prog}</td>
                            <td className="text-right">
                              {item.semesterId.length}
                            </td>
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

export default Program;
