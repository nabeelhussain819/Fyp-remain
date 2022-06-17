import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimesCircle, FaPlusCircle } from "react-icons/fa";

export default function Allcreate() {
  const [name, setName] = useState([]);
  const [session, setSession] = useState(false);
  const registerDepartment = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/create-department", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      setSession(true);
      toast.success("Department Created Successfully");
    }
  };
  return (
    <>
      {session === true ? (
        <SessionCreate data={name} />
      ) : (
        <>
          <div className="dashboard-bread dashboard-bread-2">
            <div className="container-fluid">
              <div className="arrow-separator"></div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div className="section-heading">
                      <h2 className="sec__title font-size-30 text-white">
                        Create Department
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="breadcrumb-list text-right">
                    <ul className="list-items">
                      <li>
                        <a href="index.html" className="text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>Create Department</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 pt-4">
            <div className="container"></div>
          </div>
          <div className="col-lg-12 pt-4">
            <div className="form-box">
              <div className="form-title-wrap">
                <div className="step-bar-wrap text-center">
                  <ul className="step-bar-list d-flex align-items-center justify-content-around">
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">1</span>
                      <p className="pt-2 color-text-2">Add Department</p>
                    </li>
                    <li className="step-bar flex-grow-1 ">
                      <span className="icon-element">2</span>
                      <p className="pt-2 color-text-2">Add Sessions</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">3</span>
                      <p className="pt-2 color-text-2">Add Program</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">4</span>
                      <p className="pt-2 color-text-2">Add Semesters</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">5</span>
                      <p className="pt-2 color-text-2">Add Sections</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">6</span>
                      <p className="pt-2 color-text-2">Add Courses</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-content">
                <div className="user-profile-action d-flex align-items-center pb-4">
                  <div className="upload-btn-box"></div>
                </div>
                <div className="contact-form-action">
                  <form action="#" className="MultiFile-intercepted">
                    <div className="row">
                      <div className="col-lg-12 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Department Name</label>
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
                      <div className="col-lg-12">
                        <div className="btn-box">
                          <button
                            type="submit"
                            className="theme-btn"
                            onClick={registerDepartment}
                          >
                            Get Started
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
      )}
    </>
  );
}
function SessionCreate(props) {
  const [name, setName] = useState([]);
  const [departmentId, setDepartmentId] = useState([]);
  const [depart, setDepart] = useState([]);
  const [program, setProgram] = useState(false);
  const both = ["spring", "fall"];

  const registerSession = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/create-session", {
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
      setProgram(true);
      toast.success("Department Created Successfully");
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/departments")
      ).json();
      response.map((data) => {
        return data.name == props.data && setDepart([data]);
      });
    };
    getData();
  }, []);
  return (
    <>
      {program === true ? (
        <ProgramCreate session={name} department={props.data} />
      ) : (
        <>
          <div className="dashboard-bread dashboard-bread-2">
            <div className="container-fluid">
              <div className="arrow-separator"></div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div className="section-heading">
                      <h2 className="sec__title font-size-30 text-white">
                        Create Department
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="breadcrumb-list text-right">
                    <ul className="list-items">
                      <li>
                        <a href="index.html" className="text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>Create Department</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 pt-4">
            <div className="form-box">
              <div className="form-title-wrap">
                <div className="step-bar-wrap text-center">
                  <ul className="step-bar-list d-flex align-items-center justify-content-around">
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">1</span>
                      <p className="pt-2 color-text-2">Add Department</p>
                    </li>
                    <li className="step-bar flex-grow-1 ">
                      <span className="icon-element">2</span>
                      <p className="pt-2 color-text-2">Add Sessions</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">3</span>
                      <p className="pt-2 color-text-2">Add Program</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">4</span>
                      <p className="pt-2 color-text-2">Add Semesters</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">5</span>
                      <p className="pt-2 color-text-2">Add Sections</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">6</span>
                      <p className="pt-2 color-text-2">Add Courses</p>
                    </li>
                  </ul>
                </div>
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
                          <label className="label-text">Select Session</label>
                          <div className="form-group">
                            <span className="la la-map form-icon"></span>
                            <input
                              type="radio"
                              name=".."
                              value="spring"
                              onChange={(e) => setName(e.target.value)}
                            />{" "}
                            Spring
                            <input
                              type="radio"
                              name=".."
                              value="fall"
                              onChange={(e) => setName(e.target.value)}
                            />{" "}
                            Fall
                            <input
                              type="radio"
                              name=".."
                              value={both}
                              onChange={(e) => setName(e.target.value)}
                            />{" "}
                            Both
                            {/* <select
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
                            </select> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Department</label>
                          <div className="form-group">
                            <span className="la la-map form-icon"></span>
                            {depart.map((item) => {
                              console.log(item._id);
                              return (
                                <select
                                  className="form-control p-3"
                                  value={departmentId}
                                  onChange={(e) =>
                                    setDepartmentId(e.target.value)
                                  }
                                >
                                  <option>----select-one----</option>
                                  <option className="option" value={item._id}>
                                    {item.name}
                                  </option>
                                </select>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="btn-box">
                          <button
                            type="submit"
                            className="theme-btn"
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
      )}
    </>
  );
}
function ProgramCreate(props) {
  const [name, setName] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [depart, setDepart] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const [semester, setSemester] = useState(false);
  const registerProgram = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/create-program", {
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
      setSemester(true);
      toast.success("Program Created Successfully");
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/departments")
      ).json();
      response.map((data) => {
        return data.name == props.department && setDepart([data]);
      });
    };
    getData();
  }, []);
  return (
    <>
      {semester === true ? (
        <SemesterCreate data={props.department} />
      ) : (
        <>
          <div className="dashboard-bread dashboard-bread-2">
            <div className="container-fluid">
              <div className="arrow-separator"></div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div className="section-heading">
                      <h2 className="sec__title font-size-30 text-white">
                        Create Department
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="breadcrumb-list text-right">
                    <ul className="list-items">
                      <li>
                        <a href="index.html" className="text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>Create Department</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 pt-4">
            <div className="form-box">
              <div className="form-title-wrap">
                <div className="step-bar-wrap text-center">
                  <ul className="step-bar-list d-flex align-items-center justify-content-around">
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">1</span>
                      <p className="pt-2 color-text-2">Add Department</p>
                    </li>
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">2</span>
                      <p className="pt-2 color-text-2">Add Sessions</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">3</span>
                      <p className="pt-2 color-text-2">Add Program</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">4</span>
                      <p className="pt-2 color-text-2">Add Semesters</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">5</span>
                      <p className="pt-2 color-text-2">Add Sections</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">6</span>
                      <p className="pt-2 color-text-2">Add Courses</p>
                    </li>
                  </ul>
                </div>
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
                          <label className="label-text">
                            Select Department
                          </label>
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
        </>
      )}
    </>
  );
}
function SemesterCreate(props) {
  const [name, setName] = useState([]);
  const [programId, setProgramId] = useState("");
  const [program, setProgram] = useState([]);
  const [section, setSection] = useState(false);
  console.log(programId);
  const registerSemester = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/create-semester", {
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
      setSection(true);
      toast.success("Semester Created Successfully");
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/departments")
      ).json();
      response.map((data) => {
        return data.name == props.data && setProgram([data]);
      });
    };
    getData();
  }, []);

  return (
    <>
      {section === true ? (
        <SectionCreate data={programId} />
      ) : (
        <>
          <div className="dashboard-bread dashboard-bread-2">
            <div className="container-fluid">
              <div className="arrow-separator"></div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div className="section-heading">
                      <h2 className="sec__title font-size-30 text-white">
                        Create Department
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="breadcrumb-list text-right">
                    <ul className="list-items">
                      <li>
                        <a href="index.html" className="text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>Create Department</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 pt-4">
            <div className="form-box">
              <div className="form-title-wrap">
                <div className="step-bar-wrap text-center">
                  <ul className="step-bar-list d-flex align-items-center justify-content-around">
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">1</span>
                      <p className="pt-2 color-text-2">Add Department</p>
                    </li>
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">2</span>
                      <p className="pt-2 color-text-2">Add Sessions</p>
                    </li>
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">3</span>
                      <p className="pt-2 color-text-2">Add Program</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">4</span>
                      <p className="pt-2 color-text-2">Add Semesters</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">5</span>
                      <p className="pt-2 color-text-2">Add Sections</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">6</span>
                      <p className="pt-2 color-text-2">Add Courses</p>
                    </li>
                  </ul>
                </div>
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
                          <label className="label-text">Semester Name</label>
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
                              onChange={(e) => setProgramId(e.target.value)}
                            >
                              <option>----select-one----</option>
                              {program.map((data) => {
                                return Object.entries(data.programId).map(
                                  ([i, index]) => {
                                    return (
                                      <>
                                        <option
                                          className="option"
                                          value={index._id}
                                        >
                                          {index.name}
                                        </option>
                                      </>
                                    );
                                  }
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
        </>
      )}
    </>
  );
}
function SectionCreate(props) {
  const [name, setName] = useState([]);
  const [semesterId, setSemesterId] = useState("");
  const [semester, setSemester] = useState([]);
  const [course, setCourse] = useState(false);
  const registerSection = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/create-section", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        semesterId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      setCourse(true);
      toast.success("Semester Created Successfully");
    }
  };
  const getData = async () => {
    const response = await (
      await fetch("https://new819.herokuapp.com/programs")
    ).json();
    response.map((data) => {
      return data._id == props.data && setSemester([data]);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {course === true ? (
        <CourseCreate data={semesterId} />
      ) : (
        <>
          <div className="dashboard-bread dashboard-bread-2">
            <div className="container-fluid">
              <div className="arrow-separator"></div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div className="section-heading">
                      <h2 className="sec__title font-size-30 text-white">
                        Create Department
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="breadcrumb-list text-right">
                    <ul className="list-items">
                      <li>
                        <a href="index.html" className="text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>Create Department</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 pt-4">
            <div className="form-box">
              <div className="form-title-wrap">
                <div className="step-bar-wrap text-center">
                  <ul className="step-bar-list d-flex align-items-center justify-content-around">
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">1</span>
                      <p className="pt-2 color-text-2">Add Department</p>
                    </li>
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">2</span>
                      <p className="pt-2 color-text-2">Add Sessions</p>
                    </li>
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">3</span>
                      <p className="pt-2 color-text-2">Add Program</p>
                    </li>
                    <li className="step-bar flex-grow-1 step-bar-active">
                      <span className="icon-element">4</span>
                      <p className="pt-2 color-text-2">Add Semesters</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">5</span>
                      <p className="pt-2 color-text-2">Add Sections</p>
                    </li>
                    <li className="step-bar flex-grow-1">
                      <span className="icon-element">6</span>
                      <p className="pt-2 color-text-2">Add Courses</p>
                    </li>
                  </ul>
                </div>
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
                          <label className="label-text">Select Semester</label>
                          <div className="form-group">
                            <span className="la la-map form-icon"></span>
                            <select
                              className="form-control p-3"
                              onChange={(e) => setSemesterId(e.target.value)}
                            >
                              <option>----select-one----</option>
                              {semester.map((data) => {
                                return Object.entries(data.semesterId).map(
                                  ([i, index]) => {
                                    return (
                                      <>
                                        <option
                                          className="option"
                                          value={index._id}
                                        >
                                          {index.name}
                                        </option>
                                      </>
                                    );
                                  }
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
      )}
    </>
  );
}
function CourseCreate(props) {
  const [name, setName] = useState([]);
  const [sectionId, setSectionId] = useState("");
  const [section, setSection] = useState([]);
  const [formValues, setFormValues] = useState([{ subject: "" }]);

  const registerCourse = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/create-course", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        sectionId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      setFormValues([...formValues, { subject: "" }]);
      toast.success("Course Created Successfully");
    }
  };
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/semesters")
      ).json();
      response.map((data) => {
        return data._id == props.data && setSection([data]);
      });
    };
    getData();
  }, []);
  return (
    <>
      <div className="dashboard-bread dashboard-bread-2">
        <div className="container-fluid">
          <div className="arrow-separator"></div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">
                    Create Department
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-list text-right">
                <ul className="list-items">
                  <li>
                    <a href="index.html" className="text-white">
                      Dashboard
                    </a>
                  </li>
                  <li>Create Department</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 pt-4">
        <div className="form-box">
          <div className="form-title-wrap">
            <div className="step-bar-wrap text-center">
              <ul className="step-bar-list d-flex align-items-center justify-content-around">
                <li className="step-bar flex-grow-1 step-bar-active">
                  <span className="icon-element">1</span>
                  <p className="pt-2 color-text-2">Add Department</p>
                </li>
                <li className="step-bar flex-grow-1 step-bar-active">
                  <span className="icon-element">2</span>
                  <p className="pt-2 color-text-2">Add Sessions</p>
                </li>
                <li className="step-bar flex-grow-1 step-bar-active">
                  <span className="icon-element">3</span>
                  <p className="pt-2 color-text-2">Add Program</p>
                </li>
                <li className="step-bar flex-grow-1 step-bar-active">
                  <span className="icon-element">4</span>
                  <p className="pt-2 color-text-2">Add Semesters</p>
                </li>
                <li className="step-bar flex-grow-1 step-bar-active">
                  <span className="icon-element">5</span>
                  <p className="pt-2 color-text-2">Add Sections</p>
                </li>
                <li className="step-bar flex-grow-1">
                  <span className="icon-element">6</span>
                  <p className="pt-2 color-text-2">Add Courses</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="form-content">
            <div className="user-profile-action d-flex align-items-center pb-4">
              <div className="upload-btn-box"></div>
            </div>
            <div className="contact-form-action">
              <form className="MultiFile-intercepted">
                {formValues.map((element, index) => (
                  <>
                    <div className="row">
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Course Title</label>
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
                          <label className="label-text">Select Section</label>
                          <div className="form-group">
                            <span className="la la-map form-icon"></span>
                            <select
                              className="form-control p-3"
                              value={sectionId}
                              onChange={(e) => setSectionId(e.target.value)}
                            >
                              <option>----select-one----</option>
                              {section.map((data) => {
                                return Object.entries(data.sectionId).map(
                                  ([i, index]) => {
                                    return (
                                      <>
                                        <option
                                          className="option"
                                          value={index._id}
                                        >
                                          {index.name}
                                        </option>
                                      </>
                                    );
                                  }
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
                            onClick={registerCourse}
                          >
                            Add!
                          </button>
                        </div>
                      </div>
                    </div>
                    {index ? (
                      <button
                        type="button"
                        className="btn-danger btn-round mt-4"
                        onClick={() => removeFormFields(index)}
                      >
                        remove
                      </button>
                    ) : null}
                  </>
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
