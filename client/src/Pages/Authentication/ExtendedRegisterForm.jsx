import React, { useState, useEffect } from "react";
import { FaRegEnvelope, FaUnlockAlt } from "react-icons/fa";
import NavBarLogin from "../../Components/Header/LoginNavbar";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


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
        teacherId
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
      setTeacherId(Data)
    };
    getData();
  }, []);
  return (
    <>
      <div className="off-canvas-sidebar">
        <NavBarLogin />
        <div className="wrapper wrapper-full-page">
          <div
            className="page-header register-page header-filter"
            filter-color="black"
          >
            {session === true ? (
              <AddSession data={deptId} />
            ) : (
              <>
                <div className="container">
                  <div className="col-md-12 ml-auto mr-auto">
                    <div className="card card-signup border-0">
                      <h2 className="card-title text-center">SIGN UP</h2>
                      <div className="card-body">
                        <div className="col-md-12">
                          <div className=" text-center ml-4">
                            <h4 className="mt-3">
                              Add Department To Your Profile...
                            </h4>
                          </div>
                          <div className="row">
                            <div className="table-responsive table-sales">
                              <table className="table">
                                <tbody>
                                  {depart.map((data) => {
                                    return (
                                      <>
                                        <tr>
                                          <td>
                                            <div className="flag"></div>
                                          </td>
                                          <td>
                                            Department : {data.name}
                                          </td>

                                          <td className="text-right">
                                            <button
                                              className="  btn-round mt-4"
                                              onClick={() =>
                                                setDeptId(data._id)
                                              }
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
                          </div>
                          <button
                            className="btnLogin btn-primary btn-round mt-4"
                            onClick={next}
                          >
                            Add Now!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
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
        teacherId
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      setProgram(true)
      toast.success("Session Added Successfully");
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("http://localhost:5000/session")
      ).json();
      setSession(response);
    };
    const Data = localStorage.getItem("teacher");
    const user = localStorage.getItem("user");
    setUserId(user);
    setTeacherId(Data)
    getData();
  }, []);
  return (
    <>
      {program === true ? (
        <Program data={sessionId} />
      ) : (<>
        <div className="container">
          <div className="col-md-12 ml-auto mr-auto">
            <div className="card card-signup border-0">
              <h2 className="card-title text-center">SIGN UP</h2>
              <div className="card-body">
                <div className="col-md-12">
                  <div className=" text-center ml-4">
                    <h4 className="mt-3">Add Session To Your Profile...</h4>
                  </div>
                  <div className="row">
                    <div className="table-responsive table-sales">
                      <table className="table">
                        <tbody>
                          {session.map((data) => {
                            return (
                              <>
                                <tr>
                                  <td>
                                    <div className="flag"></div>
                                  </td>
                                  <td>Session : {data.name}</td>
                                  <td className="text-right">
                                    <button
                                      onClick={() => setSessionId(data._id)}
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
        </div>
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
  const navigate = useNavigate()
  // const red = program.map((data) => {
  //   return data._id;
  // });
  // const purple = red.map((data) => {
  //   return data === props.data ? data : null;
  // });

  const next = async () => {
    const res = await fetch("http://localhost:5000/addProgram", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        programId,
        userId,
        teacherId
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      if (localStorage.getItem("teacher")) {
        navigate('/')
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
    }
    const Data = localStorage.getItem("teacher");
    const user = localStorage.getItem("user");
    setUserId(user);
    setTeacherId(Data)
    getData();
  }, []);

  return (
    <>
      {Semester === true ? (
        <AddSemester />
      ) : (
        <>
          <div className="container">
            <div className="col-md-12 ml-auto mr-auto">
              <div className="card card-signup border-0">
                <h2 className="card-title text-center">SIGN UP</h2>
                <div className="card-body">
                  <div className="col-md-12">
                    <div className=" text-center ml-4">
                      <h4 className="mt-3">Add Program To Your Profile...</h4>
                    </div>
                    <div className="row">
                      <div className="table-responsive table-sales">
                        <table className="table">
                          <tbody>
                            {program.map((data) => {
                              return (
                                <>
                                  <tr>
                                    <td>
                                      <div className="flag"></div>
                                    </td>
                                    <td>
                                      Program : {data.name}
                                      {/* {Object.entries(data.departmentId).map(
                                        ([data, i]) => {
                                          return console.log(i.department);
                                        }
                                      )} */}
                                    </td>
                                    <td className="text-right">
                                      <button
                                        type="submit"
                                        className="btn-round mt-4"
                                        onClick={() => setProgramId(data._id)}
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
                      <button
                        className="btnLogin btn-primary btn-round mt-4"
                        onClick={next}
                      >
                        Add Now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  const navigate = useNavigate()

  const next = async () => {
    console.log(semesterId);
    const res = await fetch("http://localhost:5000/addSemester", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        semesterId,
        userId,
        teacherId
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Semester Added Successfully");
      navigate('/')
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
    setTeacherId(Data)
    getData();
  }, []);
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}
