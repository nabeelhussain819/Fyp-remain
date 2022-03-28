import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

function Teachers() {
  const [teacher, setTeacher] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:5000/techer");
    setTeacher(await response.json());
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
              <div className="col-md-6 ">
                <h3> Teachers</h3>
                <p>
                  <small>
                    <a href="">Home</a> / <small> Teachers</small>
                  </small>
                </p>
              </div>
            </div>
            <div className="row">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div className="col-md-4">
                  <div className="card card-chart" data-count="0">
                    <div className="card-body">
                      <h4 className="card-title">Daily Sales</h4>
                      <p className="card-category">
                        <span className="text-success">
                          <i className="fa fa-long-arrow-up"></i> 55%{" "}
                        </span>{" "}
                        increase in today sales.
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> updated 4
                        minutes ago
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="table-responsive table-sales">
                <table className="table">
                  <tbody>
                    {Object.entries(teacher).map((data) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <div className="flag"></div>
                            </td>
                            <td>USA</td>
                            <td className="text-right">2.920</td>
                            <td className="text-right">53.23%</td>
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

export default Teachers;
