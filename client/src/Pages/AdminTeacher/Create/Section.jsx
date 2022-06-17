import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SectionCreate() {
  const [name, setName] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [semesterId, setSemesterId] = useState("");
  const [department, setDepartment] = useState([]);
  const [semester, setSemester] = useState([]);
  const registerSection = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/create-section", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        semesterId,
        departmentId,
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
      await fetch("https://new819.herokuapp.com/departments")
    ).json();
    setDepartment(response);
  };
  const getData1 = async () => {
    const response = await (
      await fetch("https://new819.herokuapp.com/semesters")
    ).json();
    setSemester(response);
  };
  useEffect(() => {
    getData();
    getData1();
  }, []);

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
                        Sections
                      </h2>
                    </div>
                  </div>
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
                        <Link to="../semesterCreate">Add Section</Link>
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
            className="hero-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <polygon points="100 10 100 0 0 10"></polygon>
          </svg>
        </div>
      </section>
      <div className="col-lg-12">
        <div className="form-box">
          <div className="form-title-wrap">
            <h3 className="title">Add Section</h3>
          </div>
          <div className="form-content">
            <div className="user-profile-action d-flex align-items-center pb-4">
              <div className="upload-btn-box"></div>
            </div>
            <div className="contact-form-action">
              <form action="#" className="MultiFile-intercepted">
                <div className="row">
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Section Name</label>
                      <div className="form-group">
                        <span className="la la-user form-icon"></span>
                        <input
                          className="form-control"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Select Program</label>
                      <div className="form-group">
                        <span className="la la-map form-icon"></span>
                        <select
                          className="form-control p-3"
                          onChange={(e) => setDepartmentId(e.target.value)}
                        >
                          <option>----select-one----</option>
                          {department.map((data) => {
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
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Select Semester</label>
                      <div className="form-group">
                        <span className="la la-map form-icon"></span>
                        <select
                          className="form-control p-3"
                          onChange={(e) => setSemesterId(e.target.value)}
                        >
                          <option>----select-one----</option>
                          {semester.map((data) => {
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
                  <div className="col-lg-12">
                    <div className="btn-box">
                      <button
                        type="submit"
                        className="theme-btn"
                        onClick={registerSection}
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
    </>
  );
}
