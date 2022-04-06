import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SessionCreate() {
  const [name, setName] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [depart, setDepart] = useState([]);

  const registerSession = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/createSession", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        departmentId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Department Created Successfully");
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
      <section class=" cta-area section-bg-2 subscriber-area ">
        <div className="hero-box ">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <div class="container">
                      <h2 className="sec__title font-size-30 text-white">
                        Sessions{" "}
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
                        <a href="sessionCreate">Add Session</a>
                      </li>
                    ) : (
                      <li>
                        <a href="dashboard">Dashboard </a>
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
      <div class="col-lg-12">
        <div class="form-box">
          <div class="form-title-wrap">
            <h3 class="title">Add Session</h3>
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
                      <label class="label-text">Select Session</label>
                      <div class="form-group">
                        <span class="la la-map form-icon"></span>
                        <select
                          className="form-control p-3"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        >
                          <option>----select-one----</option>
                          <option className="option" value="Spring">
                            Spring
                          </option>
                          <option className="option" value="Fall">
                            Fall
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 responsive-column">
                    <div class="input-box">
                      <label class="label-text">Select Department</label>
                      <div class="form-group">
                        <span class="la la-map form-icon"></span>
                        <select
                          className="form-control p-3"
                          value={departmentId}
                          onChange={(e) => setDepartmentId(e.target.value)}
                        >
                          <option>----select-one----</option>
                          {depart.map((data) => {
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
                        onClick={registerSession}
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
