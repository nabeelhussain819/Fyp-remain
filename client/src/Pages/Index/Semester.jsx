import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchSemester from "../../Components/Search/Semester";

function Semester() {
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value.toLowerCase();
    setName(data);
  }
  return (
    <>
      <section class=" cta-area subscriber-area section-bg-2  ">
        <div className="hero-box ">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <div class="container">
                      <h2 className="sec__title font-size-30 text-white">
                        Semester
                      </h2>

                      <div class="form-group">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Search..."
                          onChange={searchData}
                          required
                        />
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="index.html" className="text-white">
                        Home
                      </a>
                    </li>
                    {localStorage.getItem("isAdmin") ? (
                      <li>
                        <Link to="../semesterCreate">Add Semester</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="../dashboard">Dashboard </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <svg
            class="hero-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <polygon points="100 10 100 0 0 10"></polygon>
          </svg>
        </div>
      </section>
      <div className="container ">
        <div className="main-panel">
          <div className="content">
            <SearchSemester searchData={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Semester;
