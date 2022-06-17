import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import SearchProgram from "../../../Components/Search/Program";
export default function ProgramCreate() {
  const [name, setName] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [depart, setDepart] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const [image, setImage] = useState("");
  const registerProgram = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/create-program", {
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        departmentId,
        sessionId,
        image: image.name,
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
        await fetch("https://new819.herokuapp.com/departments")
      ).json();
      setDepart(response);
    };

    getData();
  }, []);

  return (
    <>
      <div className="dashboard-bread cta-area pt-4">
        <div className="container-fluid">
          <div className="arrow-separator"></div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">
                    Program
                  </h2>
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
      </div>
      {image && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(image)}
          />
          <br />
          <button onClick={() => setImage(null)}>Remove</button>
        </div>
      )}
      <div className="col-lg-12">
        <div className="form-box">
          <div className="form-title-wrap">
            <h3 className="title">Add Program</h3>
          </div>
          <div className="form-content">
            <div className="user-profile-action d-flex align-items-center pb-4">
              <div className="upload-btn-box"></div>
            </div>
            <div className="contact-form-action">
              <form action="#" className="MultiFile-intercepted">
                <div className="row">
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => setImage(event.target.files[0])}
                  />
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Program Name</label>
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
                      <label className="label-text">Select Department</label>
                      <div className="form-group">
                        <span className="la la-map form-icon"></span>
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
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Select Session</label>
                      <div className="form-group">
                        <span className="la la-map form-icon"></span>
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
                  <div className="col-lg-12 responsive-column">
                    <div className="input-box">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="theme-btn"
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
