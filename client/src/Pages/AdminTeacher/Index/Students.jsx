import React, { useState } from "react";
import SearchStudent from "../../../Components/Search/Student";
import { Link } from "react-router-dom";
function Students() {
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value.toLowerCase();
    setName(data);
  }
  return (
    <>
      <section className=" cta-area subscriber-area section-bg-2  ">
        <div className="hero-box ">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <div className="container">
                      <h2 className="sec__title font-size-30 text-white">
                        Students
                      </h2>

                      <div className="form-group">
                        <input
                          className="form-control"
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
                      <Link to="../" className="text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="../dashboard">Dashboard </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container ">
        <div className="main-panel">
          <div className="content">
            <SearchStudent searchData={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;
