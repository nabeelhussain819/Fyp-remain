import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchProgram from "../../Components/Search/Program";

function Program() {
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
                        Program{" "}
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
                        <Link to="../programCreate">Add Program</Link>
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
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
        </div>
      </section>
      <div className="wrapper ">
        <div className="main-panel">
          <div className="content">
            <SearchProgram searchData={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Program;
