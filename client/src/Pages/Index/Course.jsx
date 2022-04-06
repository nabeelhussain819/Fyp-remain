import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchCourse from "../../Components/Search/Course";

function Course() {
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value.toLowerCase();
    setName(data);
  }
  return (
    <>
      <section class=" cta-area section-bg-2 subscriber-area ">
        <div className="hero-box ">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <div class="container">
                      <h2 className="sec__title font-size-30 text-white">
                        Courses{" "}
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
                      <a href="" aria-disabled className="text-white">
                        Home
                      </a>
                    </li>
                    {localStorage.getItem("isAdmin") ? (
                      <li>
                        <Link to="../courseCreate">Add Course</Link>
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
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
          </svg>{" "}
        </div>
      </section>
      <div className="container ">
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <div className="col-md-12 "></div>
            </div>
            <SearchCourse searchData={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
