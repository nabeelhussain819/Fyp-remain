import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import SearchProgram from "../../Components/Search/Program";
export default function ProgramCreate() {
  const [name, setName] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [depart, setDepart] = useState([]);
  const [sessionId, setSessionId] = useState("");
  console.log(sessionId);
  const registerProgram = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/createProgram", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        departmentId,
        sessionId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Program Created Successfully");
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("http://localhost:5000/departments")
      ).json();
      setDepart(response);
    };

    getData();
  }, []);

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
                        Program
                      </h2>
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
      <div class="col-lg-12">
        <div class="form-box">
          <div class="form-title-wrap">
            <h3 class="title">Add Program</h3>
          </div>
          <div class="form-content">
            <div class="user-profile-action d-flex align-items-center pb-4">
              <div class="upload-btn-box"></div>
            </div>
            <div class="contact-form-action">
              <form action="#" class="MultiFile-intercepted">
                <div class="row">
                  <div class="col-lg-6 responsive-column">
                    <div class="input-box">
                      <label class="label-text">Program Name</label>
                      <div class="form-group">
                        <span class="la la-user form-icon"></span>
                        <input
                          class="form-control"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 responsive-column">
                    <div class="input-box">
                      <label class="label-text">Select Department</label>
                      <div class="form-group">
                        <span class="la la-map form-icon"></span>
                        <select
                          class="form-control p-3"
                          value={departmentId}
                          onChange={(e) => setDepartmentId(e.target.value)}
                        >
                          <option>----select-one----</option>
                          {depart.map((data) => {
                            return (
                              <>
                                <option className="option" value={data._id}>
                                  {console.log(data.sessionId)}
                                  {data.name}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 responsive-column">
                    <div class="input-box">
                      <label class="label-text">Select Session</label>
                      <div class="form-group">
                        <span class="la la-map form-icon"></span>
                        <select
                          className="form-control p-3"
                          value={sessionId}
                          onChange={(e) => setSessionId(e.target.value)}
                        >
                          <option>----select-one----</option>
                          {depart.map((data) => {
                            return (
                              <>
                                {Object.entries(data.sessionId).map(
                                  ([i, index]) => {
                                    return (
                                      <option
                                        className="option"
                                        value={index._id}
                                      >
                                        {index.name}
                                      </option>
                                    );
                                  }
                                )}
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 responsive-column">
                    <div class="input-box">
                      <div class="form-group">
                        <button
                          type="submit"
                          class="theme-btn"
                          onClick={registerProgram}
                        >
                          Add!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <SearchProgram searchData={name} />
      </div>
    </>
  );
}
