import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import SearchSemester from "../../Components/Search/Semester";

function Semester() {
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
                  Semester    </h3>
                {localStorage.getItem("isAdmin") ? <a href="departmentCreate" style={{ float: "right" }}>
                  Add Semester
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
                    <a href="dashboard">Home</a> / <small> Semesters</small>
                  </small>
                </p>
              </div>
            </div>
            <SearchSemester searchData={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Semester;
