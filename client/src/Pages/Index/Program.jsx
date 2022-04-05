import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import SearchProgram from "../../Components/Search/Program";

function Program() {
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
                  Program    </h3>
                {localStorage.getItem("isAdmin") ? <a href="programCreate" style={{ float: "right" }}>
                  Add Program
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
                    <a href="">Home</a> / <small> Programs</small>
                  </small>
                </p>
              </div>
            </div>
            <SearchProgram searchData={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Program;
