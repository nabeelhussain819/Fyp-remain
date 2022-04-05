import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import SearchTeacher from "../../Components/Search/Teacher";

function Teachers() {
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
                <h3> Teachers</h3>
                <div className="input-group ">
                  <input
                    type="text"
                    onChange={searchData}
                    className="form-control"
                    placeholder="Search..."
                    name="search"
                  />

                </div>
                <p>
                  <small>
                    <a href="">Home</a> / <small> Teachers</small>
                  </small>
                </p>
              </div>
            </div>
            <SearchTeacher searchData={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachers;
