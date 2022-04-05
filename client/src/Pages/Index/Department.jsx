import React, { useEffect, useState } from "react";
import SearchDepartment from "../../Components/Search/Department";

function Department() {
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
                  Departments    </h3>
                {localStorage.getItem("isAdmin") ? <a href="departmentCreate" style={{ float: "right" }}>
                  Add Departments
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
                    <a href="dashboard">Home</a> / <small> Departments</small>
                  </small>
                </p>
              </div>
            </div>
            <SearchDepartment searchData={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Department;
