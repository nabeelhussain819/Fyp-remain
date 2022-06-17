import React, { useState } from "react";
import SearchDepartment from "../Search/Department";

const Sidebar = () => {
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value;
    setName(data);
  }

  return (
    <div className="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="filter-wrap margin-bottom-30px">
            <div class="filter-bar shadow-lg d-flex align-items-center justify-content-between margin-top-30px">
              <div class="filter-bar-filter d-flex flex-wrap align-items-center">
                <div class="filter-option">
                  <h3 class="title font-size-16 ">Search by Name:</h3>
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
      <SearchDepartment searchData={name} />
    </div>
  );
};

export default Sidebar;
