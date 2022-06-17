import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import dept from "../../Assets/dept.jpg";
import Navbar from "../../Components/Header/Navbar";

export default function ExtendedRegisterForm() {
  const [deptId, setDeptId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [depart, setDepart] = useState([]);
  const [session, setSession] = useState(false);
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value;
    setName(data);
  }
  const second = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/add-department", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        deptId,
        studentId,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      setSession(true);
      toast.success("Department Added Successfully");
    }
  };

  const filterData = depart.filter((data) => data.name.includes(name));
  console.log(filterData);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/departments")
      ).json();
      setDepart(response);
      const Data = localStorage.getItem("teacher");
      const user = localStorage.getItem("user");
      setStudentId(user);
      setTeacherId(Data);
    };
    getData();
  }, []);
  return (
    <>
      <Navbar />
      {session === true ? (
        <AddSession data={deptId} />
      ) : (
        <>
          <section className="breadcrumb-area gradient-bg-gray before-none pb-4 pt-4 section-bg6">
            <div className="breadcrumb-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="breadcrumb-content text-center">
                      <div className="section-heading">
                        <h2 className="sec__title text-dark">
                          How Can We Help You Today?
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 mx-auto">
                          <div className="contact-form-action pt-4">
                            <form>
                              <input
                                className="form-control"
                                type="text"
                                value={name}
                                placeholder="Search Your Department...."
                                onChange={searchData}
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="destination-area padding-top-130px padding-bottom-80px section-bg3">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="filter-top d-flex align-items-center justify-content-between pb-4">
                    <div>
                      <h2 className="sec__title">Departments</h2>
                      <p className="sec__desc pt-3">Add Your Department Now</p>
                    </div>
                    <div className=" d-flex align-items-center">
                      <button className="theme-btn" onClick={second}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row padding-top-50px">
                {filterData?.map((data) => {
                  return (
                    <div className="col-lg-4 responsive-column">
                      <div className="card-item destination-card destination--card">
                        <div className="card-img">
                          <img src={dept} alt="destination-img" />
                        </div>
                        <div className="card-body d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="card-title">
                              <a href="tour-details.html">{data.name}</a>
                            </h3>
                            <p className="card-meta">
                              {data.teacherId.length} Teachers
                            </p>
                          </div>
                          <div>
                            <button
                              className="theme-btn theme-btn-small border-0"
                              onClick={() => setDeptId(data._id)}
                            >
                              Enroll In
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
function AddSession(props) {
  const [sessionId, setSessionId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [session, setSession] = useState([]);
  const [program, setProgram] = useState(false);
  const [name, setName] = useState("");

  function searchData(e) {
    let data = e.target.value;
    setName(data);
  }
  const filterData = session.filter((data) => data.name.includes(name));
  console.log(filterData);

  const next = async (item) => {
    setSessionId(item);
    const res = await fetch("https://new819.herokuapp.com/add-session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        sessionId,
        studentId,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      setProgram(true);
      toast.success("Session Added Successfully");
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/sessions")
      ).json();
      setSession(response);
    };
    console.log(session);
    const Data = localStorage.getItem("teacher");
    const user = localStorage.getItem("user");
    setStudentId(user);
    setTeacherId(Data);
    getData();
  }, []);
  return (
    <>
      {program === true ? (
        <Program data={sessionId} />
      ) : (
        <>
          <section className="breadcrumb-area gradient-bg-gray before-none pb-4 pt-4">
            <div className="breadcrumb-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="breadcrumb-content text-center">
                      <div className="section-heading">
                        <h2 className="sec__title text-dark">
                          How Can We Help You Today?
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 mx-auto">
                          <div className="contact-form-action pt-4">
                            <form>
                              <input
                                className="form-control"
                                type="text"
                                value={name}
                                placeholder="Search Your Session...."
                                onChange={searchData}
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="destination-area padding-top-130px padding-bottom-80px">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="filter-top d-flex align-items-center justify-content-between pb-4">
                    <div>
                      <h2 className="sec__title">Sessions</h2>
                      <p className="sec__desc pt-3">Add Your Sessions Now</p>
                    </div>
                    <div className=" d-flex align-items-center">
                      <button className="theme-btn" onClick={next}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row padding-top-50px">
                {filterData.map((data) => {
                  return Object.entries(data.departmentId).map(
                    ([i, index]) => index._id
                  ) == props.data ? (
                    <>
                      <div className="col-lg-4 responsive-column">
                        <div className="card-item destination-card destination--card">
                          <div className="card-img">
                            <img src={dept} alt="destination-img" />
                          </div>
                          <div className="card-body d-flex align-items-center justify-content-between">
                            <div>
                              <h3 className="card-title">
                                <a href="tour-details.html">{data.name}</a>
                              </h3>
                              <p className="card-meta">
                                {data.teacherId.length} Teachers
                              </p>
                            </div>
                            <div>
                              <button
                                className="theme-btn theme-btn-small border-0"
                                onClick={() => setSessionId(data._id)}
                              >
                                Enroll In
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null;
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
function Program(props) {
  const [programId, setProgramId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [program, setProgram] = useState([]);
  const [Semester, setSemester] = useState(false);
  const [teacherId, setTeacherId] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function searchData(e) {
    let data = e.target.value;
    setName(data);
  }
  const filterData = program.filter((data) => data.name.includes(name));
  console.log(filterData);

  const next = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/add-program", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        programId,
        studentId,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      if (localStorage.getItem("teacher")) {
        navigate("/");
      } else {
        setSemester(true);
      }
      toast.success("Program Added Successfully");
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/programs")
      ).json();
      setProgram(response);
    };
    const Data = localStorage.getItem("teacher");
    const user = localStorage.getItem("user");
    setStudentId(user);
    setTeacherId(Data);
    getData();
  }, []);

  return (
    <>
      {Semester === true ? (
        <AddSemester data={programId} />
      ) : (
        <>
          <section className="breadcrumb-area gradient-bg-gray before-none pt-4">
            <div className="breadcrumb-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="breadcrumb-content text-center">
                      <div className="section-heading">
                        <h2 className="sec__title text-dark">
                          How Can We Help You Today?
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 mx-auto">
                          <div className="contact-form-action pt-4">
                            <form>
                              <input
                                className="form-control"
                                type="text"
                                value={name}
                                placeholder="Search Your Program...."
                                onChange={searchData}
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="trending-area position-relative  pt-4 ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="filter-top d-flex align-items-center justify-content-between pb-4">
                    <div>
                      <h2 className="sec__title">Program</h2>
                      <p className="sec__desc pt-3">Add Your Program Now</p>
                    </div>
                    <div className=" d-flex align-items-center">
                      <button className="theme-btn" onClick={next}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row padding-top-50px">
                <div className="col-lg-12">
                  <div className="trending-carousel carousel-action">
                    {filterData.map((item) => {
                      return Object.entries(item.sessionId).map(
                        ([i, index]) => index._id
                      ) !== props.data ? (
                        <>
                          <div className="card-item trending-card mb-3">
                            <div className="card-img">
                              <span className="badge">Bestseller</span>
                            </div>
                            <div className="card-body">
                              <h3 className="card-title">
                                <a href="tour-details.html">{item.name}</a>
                              </h3>
                              <p className="card-meta">
                                124 E Huron St, New york
                              </p>
                              <div className="card-rating">
                                <span className="badge text-white">4.4/5</span>
                                <span className="review__text">Average</span>
                                <span className="rating__text">
                                  (30 Reviews)
                                </span>
                              </div>
                              <div className="card-price d-flex align-items-center justify-content-between">
                                <p>
                                  <span className="price__num">$124.00</span>
                                </p>
                                <button
                                  className=" theme-btn"
                                  onClick={() => setProgramId(item._id)}
                                >
                                  Enroll Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
function AddSemester(props) {
  const [semesterId, setSemesterId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [semester, setSemester] = useState([]);
  const [section, setSection] = useState(false);
  const [teacherId, setTeacherId] = useState("");
  const [name, setName] = useState("");

  function searchData(e) {
    let data = e.target.value;
    setName(data);
  }
  const filterData = semester.filter((data) => data.name.includes(name));
  console.log(filterData);
  const next = async (item) => {
    setSemesterId(item);
    const res = await fetch("https://new819.herokuapp.com/add-semester", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        semesterId,
        studentId,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Semester Added Successfully");
      setSection(true);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/semesters")
      ).json();
      setSemester(response);
    };
    const Data = localStorage.getItem("teacher");
    const user = localStorage.getItem("user");
    setStudentId(user);
    setTeacherId(Data);
    getData();
  }, []);
  return (
    <>
      {section === true ? (
        <AddSection data={semesterId} />
      ) : (
        <>
          <section className="breadcrumb-area gradient-bg-gray before-none pt-4">
            <div className="breadcrumb-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="breadcrumb-content text-center">
                      <div className="section-heading">
                        <h2 className="sec__title text-dark">
                          How Can We Help You Today?
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 mx-auto">
                          <div className="contact-form-action pt-4">
                            <form>
                              <input
                                className="form-control"
                                type="text"
                                value={name}
                                placeholder="Search Your Semester...."
                                onChange={searchData}
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="trending-area position-relative  pt-4 ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="section-heading">
                    <h2 className="sec__title">Semester</h2>
                    <p className="sec__desc pt-3">Add Your Semester Now</p>
                  </div>
                </div>
              </div>
              <div className="row padding-top-50px">
                <div className="col-lg-12">
                  <div className="trending-carousel carousel-action">
                    {filterData.map((data) => {
                      return Object.entries(data.programId).map(
                        ([i, index]) => {
                          return index._id;
                        }
                      ) == props.data ? (
                        <>
                          <div className="card-item trending-card mb-3">
                            <div className="card-img">
                              <span className="badge">Bestseller</span>
                            </div>
                            <div className="card-body">
                              <h3 className="card-title">
                                <a href="tour-details.html">{data.name}</a>
                              </h3>
                              <p className="card-meta">
                                124 E Huron St, New york
                              </p>
                              <div className="card-rating">
                                <span className="badge text-white">4.4/5</span>
                                <span className="review__text">Average</span>
                                <span className="rating__text">
                                  (30 Reviews)
                                </span>
                              </div>
                              <div className="card-price d-flex align-items-center justify-content-between">
                                <p>
                                  <span className="price__num">$124.00</span>
                                </p>
                                <button
                                  className=" theme-btn"
                                  onClick={() => next(data._id)}
                                >
                                  Enroll Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
function AddSection(props) {
  const [sectionId, setSectionId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [section, setSection] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const navigate = useNavigate();
  console.log(props.data);
  const next = async (item) => {
    setSectionId(item);
    const res = await fetch("https://new819.herokuapp.com/add-section", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        sectionId,
        studentId,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Semester Added Successfully");
      navigate("/");
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/sections")
      ).json();
      setSection(response);
    };
    const Data = localStorage.getItem("teacher");
    const user = localStorage.getItem("user");
    setStudentId(user);
    setTeacherId(Data);
    getData();
  }, []);
  return (
    <>
      <section className="cta-area cta-bg bg-fixed section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="sec__title text-white font-size-50 line-height-60">
                  This is the last Step Add Section
                </h2>
                <p className="sec__desc text-white pt-3">
                  We will Automatically enroll you in courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-box">
              <div className="row align-items-center form-title-wrap">
                <div className="col-lg-8">
                  <div className="section-heading">
                    <h2 className="sec__title">Section</h2>
                    <p className="sec__desc pt-3">Add Your Section Now</p>
                  </div>
                </div>
              </div>
              <div className="form-content">
                <div className="table-form table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Totaal Courses</th>
                        <th scope="col">Total Teachers</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.map((data) => {
                        return Object.entries(data.semesterId).map(
                          ([i, index]) => {
                            return index._id;
                          }
                        ) == props.data ? (
                          <>
                            <tr>
                              <td>
                                <div className="table-content">
                                  <h3 className="title">{data.name}</h3>
                                </div>
                              </td>
                              <td></td>
                              <td>
                                <span className="badge badge-success py-1 px-2"></span>
                              </td>
                              <td>
                                <div className="table-content">
                                  <button
                                    onClick={() => next(data._id)}
                                    className="theme-btn theme-btn-small mr-2"
                                  >
                                    Enroll Now
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        ) : null;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
