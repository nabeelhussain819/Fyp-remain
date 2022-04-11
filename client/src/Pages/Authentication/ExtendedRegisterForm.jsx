import React, { useState, useEffect } from "react";
import NavBarLogin from "../../Components/Header/LoginNavbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import dept from "../../Assets/dept.jpg";

export default function ExtendedRegisterForm() {
  const [deptId, setDeptId] = useState("");
  const [userId, setUserId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [depart, setDepart] = useState([]);
  const [session, setSession] = useState(false);

  const next = async () => {
    console.log(deptId);
    const res = await fetch("http://localhost:5000/addDepartment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        deptId,
        userId,
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
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("http://localhost:5000/departments")
      ).json();
      setDepart(response);
      const Data = localStorage.getItem("teacher");
      const user = localStorage.getItem("user");
      setUserId(user);
      setTeacherId(Data);
    };
    getData();
  }, []);
  return (
    <>
      {" "}
      <NavBarLogin />
      {session === true ? (
        <AddSession data={deptId} />
      ) : (
        <>
          <section class="destination-area padding-top-130px padding-bottom-80px">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-8">
                  <div class="section-heading">
                    <h2 class="sec__title">Departments</h2>
                    <p class="sec__desc pt-3">Add Your Department Now</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="btn-box btn--box text-right">
                    <button className="theme-btn" onClick={next}>
                      Add Now!
                    </button>
                  </div>
                </div>
              </div>
              <div class="row padding-top-50px">
                {depart.map((data) => {
                  return (
                    <div class="col-lg-4 responsive-column">
                      <div class="card-item destination-card destination--card">
                        <div class="card-img">
                          <img src={dept} alt="destination-img" />
                        </div>
                        <div class="card-body d-flex align-items-center justify-content-between">
                          <div>
                            <h3 class="card-title">
                              <a href="tour-details.html">{data.name}</a>
                            </h3>
                            <p class="card-meta">
                              {data.teacherId.length} Teachers
                            </p>
                          </div>
                          <div>
                            <button
                              class="theme-btn theme-btn-small border-0"
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
  const [userId, setUserId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [session, setSession] = useState([]);
  const [program, setProgram] = useState(false);

  const next = async () => {
    const res = await fetch("http://localhost:5000/addSession", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        sessionId,
        userId,
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
        await fetch("http://localhost:5000/session")
      ).json();
      setSession(response);
      console.log(props.data);
    };
    const Data = localStorage.getItem("teacher");
    const user = localStorage.getItem("user");
    setUserId(user);
    setTeacherId(Data);
    getData();
  }, []);
  return (
    <>
      {program === true ? (
        <Program data={sessionId} />
      ) : (
        <>
          {" "}
          <section class="hero-wrapper hero-wrapper3">
            <div class="hero-box pb-0 hero-bg-3 ripple-bg bg-fixed">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="hero-content pb-5 hero-content-3 text-center">
                      <div class="section-heading">
                        <h2 class="sec__title">Select Your Session</h2>
                        <p class="sec__desc pt-1">
                          Book incredible things to do around the world.
                        </p>
                      </div>
                    </div>
                    <div class="search-fields-container search-fields-container-shape">
                      <div class="search-fields-container-inner">
                        <div class="contact-form-action">
                          <form action="#" class="row">
                            <div class="col-lg-12 ">
                              <div class="input-box">
                                <label class="label-text">
                                  Session Available
                                </label>
                                <div class="form-group">
                                  {session.map((data) => {
                                    return (
                                      <>
                                        <div class="form-group mb-3">
                                          <input
                                            class="form-control"
                                            placeholder="Email address"
                                            value={data.name}
                                            disabled
                                          />
                                          <button
                                            class="theme-btn theme-btn-small "                                     
                                            onClick={() =>
                                              setSessionId(data._id)
                                            }
                                          >
                                            Subscribe
                                          </button>
                                        </div>
                                      </>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="btn-box pt-3">
                          <button class="theme-btn" onClick={next}>
                            Add Now
                          </button>
                        </div>
                      </div>
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
        </>
      )}
    </>
  );
}
function Program(props) {
  const [programId, setProgramId] = useState("");
  const [userId, setUserId] = useState("");
  const [program, setProgram] = useState([]);
  const [Semester, setSemester] = useState(false);
  const [teacherId, setTeacherId] = useState("");
  const navigate = useNavigate();

  const next = async () => {
    const res = await fetch("http://localhost:5000/addProgram", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        programId,
        userId,
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
        await fetch("http://localhost:5000/readProgram")
      ).json();
      setProgram(response);
    };
    const Data = localStorage.getItem("teacher");
    const user = localStorage.getItem("user");
    setUserId(user);
    setTeacherId(Data);
    getData();
  }, []);

  return (
    <>
      {Semester === true ? (
        <AddSemester />
      ) : (
        <>
          <section class="trending-area position-relative  section-padding ">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-8">
                  <div class="section-heading">
                    <h2 class="sec__title">Programs</h2>
                    <p class="sec__desc pt-3">Add Your Program Now</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="btn-box btn--box text-right">
                    <button className="theme-btn" onClick={next}>
                      Add Now!
                    </button>
                  </div>
                </div>
              </div>
              <div class="row padding-top-50px">
                <div class="col-lg-12">
                  <div class="trending-carousel carousel-action">
                    {program.map((data) => {
                      return (
                        <>
                          <div class="card-item trending-card mb-3">
                            <div class="card-img">
                              <span class="badge">Bestseller</span>
                            </div>
                            <div class="card-body">
                              <h3 class="card-title">
                                <a href="tour-details.html">{data.name}</a>
                              </h3>
                              <p class="card-meta">124 E Huron St, New york</p>
                              <div class="card-rating">
                                <span class="badge text-white">4.4/5</span>
                                <span class="review__text">Average</span>
                                <span class="rating__text">(30 Reviews)</span>
                              </div>
                              <div class="card-price d-flex align-items-center justify-content-between">
                                <p>
                                  <span class="price__num">$124.00</span>
                                </p>
                                <button
                                  class=" theme-btn"
                                  onClick={() => setProgramId(data._id)}
                                >
                                  Enroll Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
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
function AddSemester() {
  const [semesterId, setSmesterId] = useState("");
  const [userId, setUserId] = useState("");
  const [semester, setSemester] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const navigate = useNavigate();

  const next = async () => {
    console.log(semesterId);
    const res = await fetch("http://localhost:5000/addSemester", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        semesterId,
        userId,
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
        await fetch("http://localhost:5000/semesters")
      ).json();
      setSemester(response);
      setUserId(localStorage.getItem("data"));
    };
    const Data = localStorage.getItem("teacher");
    const user = localStorage.getItem("user");
    setUserId(user);
    setTeacherId(Data);
    getData();
  }, []);
  return (
    <>
      <section class="cta-area cta-bg bg-fixed section-padding text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2 class="sec__title text-white font-size-50 line-height-60">
                  This is the last Step Add Semester
                </h2>
                <p class="sec__desc text-white pt-3">
                  We will Automatically enroll you in courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="form-box">
              <div class="row align-items-center form-title-wrap">
                <div class="col-lg-8">
                  <div class="section-heading">
                    <h2 class="sec__title">Semester</h2>
                    <p class="sec__desc pt-3">Add Your Semester Now</p>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="btn-box btn--box text-right">
                    <button className="theme-btn" onClick={next}>
                      Add Now!
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-content">
                <div class="table-form table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Totaal Courses</th>
                        <th scope="col">Total Teachers</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semester.map((data) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <div class="table-content">
                                  <h3 class="title">{data.semester}</h3>
                                </div>
                              </td>
                              <td>{data.courseId.length}</td>
                              <td>
                                <span class="badge badge-success py-1 px-2">
                                  {data.teacherId.length}
                                </span>
                              </td>
                              <td>
                                <div class="table-content">
                                  <button
                                    onClick={() => setSmesterId(data._id)}
                                    class="theme-btn theme-btn-small mr-2"
                                  >
                                    Enroll Now
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="col-md-12 ml-auto mr-auto">
          <div className="card card-signup border-0">
            <h2 className="card-title text-center">SIGN UP</h2>
            <div className="card-body">
              <div className="col-md-12">
                <div className=" text-center ml-4">
                  <h4 className="mt-3">Add Semester To Your Profile...</h4>
                </div>
                <div className="row">
                  <div className="table-responsive table-sales">
                    <table className="table">
                      <tbody>
                        {semester.map((data) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <div className="flag"></div>
                                </td>
                                <td>Semester : {data.semester}</td>
                                <td className="text-right">
                                  <button
                                    onClick={() => setSmesterId(data._id)}
                                  >
                                    Enroll In!
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <button className="btnLogin btn-round" onClick={next}>
                    Enroll In!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
