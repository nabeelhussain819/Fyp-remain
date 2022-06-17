import React, { useState } from "react";
import SearchComments from "../Search/Comments";
import SearchCourse from "../Search/Course";

const CommentSidebar = () => {
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value;
    setName(data);
  }

  return (
    <div className="container ">
      <div class="row ">
        <div class="col-lg-12 ">
          <div class="filter-wrap margin-bottom-30px ">
            <div class="filter-bar shadow-lg d-flex align-items-center justify-content-between margin-top-30px bg-pro">
              <div class="filter-bar-filter d-flex flex-wrap align-items-center">
                <div class="filter-option">
                  <h3 class="title font-size-16">Search by Name:</h3>
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
      <SearchComments searchData={name} />
    </div>
  );
};

export default CommentSidebar;
