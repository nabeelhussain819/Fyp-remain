import React, { useState } from "react";
import SearchProgram from "../Search/Program";

const ProgramSidebar = () => {
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value;
    setName(data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="filter-wrap margin-bottom-30px">
            <div className="filter-bar shadow-lg d-flex align-items-center justify-content-between margin-top-30px">
              <div className="filter-bar-filter d-flex flex-wrap align-items-center">
                <div className="filter-option">
                  <h3 className="title font-size-16">Search by Name:</h3>
                </div>
                <div>
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    placeholder="Search..."
                    onChange={searchData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchProgram searchData={name} />
    </div>
  );
};

export default ProgramSidebar;
