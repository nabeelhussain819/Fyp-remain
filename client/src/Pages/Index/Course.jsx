import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import SearchCourse from "../../Components/Search/Course";

function Course() {
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value.toLowerCase();
    setName(data);
  }
  return (
    <>
      <div className="wrapper ">
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="col-md-12 ">
                <h3>
                  Courses    </h3>
                {localStorage.getItem("isAdmin") ? <a href="courseCreate" style={{ float: "right" }}>
                  Add Course
                </a> : <>
                  <div className="input-group ">
                    <input
                      type="text"
                      onChange={searchData}
                      className="form-control"
                      placeholder="Search..."
                      name="search"
                    />

                  </div>
                </>}
                <p>
                  <small>
                    <a href="">Home</a> / <small> Courses</small>
                  </small>
                </p>
              </div>
            </div>
            <SearchCourse searchData={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
