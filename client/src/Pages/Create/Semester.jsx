import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import SearchSemester from "../../Components/Search/Semester";

export default function SemesterCreate() {
  const [name, setName] = useState([]);
  const [programId, setProgramId] = useState("");
  const [program, setProgram] = useState([]);

  console.log(programId);
  const registerSemester = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/createSemester", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        programId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Semester Created Successfully");
    }
  };

  const getData = async () => {
    const response = await (
      await fetch("http://localhost:5000/readProgram")
    ).json();
    setProgram(response);
  };
  useEffect(() => {
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
                        Semester
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
      <div class="col-lg-12">
        <div class="form-box">
          <div class="form-title-wrap">
            <h3 class="title">Add Course</h3>
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
                      <label class="label-text">Semester Name</label>
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
                      <label class="label-text">Select Program</label>
                      <div class="form-group">
                        <span class="la la-map form-icon"></span>
                        <select
                          className="form-control p-3"
                          onChange={(e) => setProgramId(e.target.value)}
                        >
                          <option>----select-one----</option>
                          {program.map((data) => {
                            return (
                              <>
                                <option className="option" value={data._id}>
                                  {data.name}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="btn-box">
                      <button
                        type="submit"
                        class="theme-btn"
                        onClick={registerSemester}
                      >
                        Add!
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <SearchSemester searchData={name} />
      </div>
    </>
  );
}
