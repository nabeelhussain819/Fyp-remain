import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

function SearchSemester({ searchData }) {
  const [semester, setSemester] = useState([]);
  console.log(semester);
  const filterData = semester;
  console.log(filterData);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("http://localhost:5000/semesters")
      ).json();
      setSemester(response);
    };
    getData();
  }, []);
  return (
    <>
      <div className="row">
        {semester.slice(0, 3).map((data) => {
          return (
            <>
              <div className="col-md-4">
                <div className="card card-chart" data-count="0">
                  <div className="card-body">
                    <h4 className="card-title">{data.name}</h4>
                    <p className="card-category">
                      <span className="text-success">Program</span>{" "}
                      {data.program}
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <p>
                        Total Teachers in {data.name} is {data.teacherId.length}
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
              {semester.map((data) => {
                return (
                  <>
                    <tr>
                      <td>
                        <div className="flag"></div>
                      </td>
                      <td>{data.name}</td>
                      <td className="text-right">{data.teacherId.length}</td>
                      <td className="text-right">{data.userId.length}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SearchSemester;
