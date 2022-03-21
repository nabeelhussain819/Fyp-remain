import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import vector from "../components/assests/vector1.jpg";
import { FaRegEnvelope, FaUnlockAlt } from "react-icons/fa";
import NavBarLogin from "./NavbarLogin";
import myData from "./RegisterNew";

const Register = () => {
  const navigate = useNavigate();
  const [nextField, setNextFeild] = useState(0);
  const [submitButton, setSubmitButton] = useState(false);
  const [nextButton, setNextButton] = useState(true);
  const [apendState, setApendState] = useState([]);
  const [newData, setNewData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [u_id, setU_Id] = useState("");
  const [deptId, setDeptId] = useState("");
  const [depart, setDepart] = useState("");
  const [programId, setProgramId] = useState("");
  const [program, setProgram] = useState([]);
  const [semesterId, setSmesterId] = useState([]);
  const [semester, setSmester] = useState([]);

  function Handle() {
    const Next2 = nextField + 1;
    var obj = { [myData[nextField].name]: apendState };
    setNewData((newData) => [...newData, obj]);
    setNextFeild(Next2);
    // setApendState("");
    if (nextField === myData.length - 1) {
      setSubmitButton(true);
      setNextButton(false);
      setNextFeild(0);
    }
  }
  function Data(e) {
    setApendState(e.target.value);
  }

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error("Invalid Credentials!");
    } else {
      toast("register Successfully");
      navigate("/");
    }
    console.log(newData);
  };

  const getData = async () => {
    const response = await fetch("http://localhost:5000/departments");
    setDepart(await response.json());
  };
  const getProgram = async () => {
    const response = await fetch("http://localhost:5000/readProgram");
    setProgram(await response.json());
  };
  const getsemester = async () => {
    const response = await fetch("http://localhost:5000/semesters");
    setSmester(await response.json());
  };
  useEffect(() => {
    getProgram();
    getData();
    getsemester();
  }, []);
  return (
    <>
      <div className="off-canvas-sidebar">
        <NavBarLogin />
        <div className="wrapper wrapper-full-page">
          <div
            className="page-header register-page header-filter"
            filter-color="black"
            style={{
              backgroundImage:
                "url('https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp')",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-10 ml-auto mr-auto">
                  <div className="card card-signup">
                    <h2 className="card-title text-center">SIGN UP</h2>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-5 ml-auto offNow">
                          <div className="info info-horizontal">
                            <img
                              src={vector}
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                        </div>
                        <div className="col-md-5 mr-auto">
                          <div className="social text-center">
                            <button className="btn btn-just-icon btn-round btn-twitter">
                              <i className="fa fa-twitter"></i>
                            </button>
                            <button className="btn btn-just-icon btn-round btn-dribbble">
                              <i className="fa fa-dribbble"></i>
                            </button>
                            <button className="btn btn-just-icon btn-round btn-facebook">
                              <i className="fa fa-facebook"> </i>
                            </button>
                            <h4 className="mt-3">Create New Account</h4>
                          </div>
                          <form className="form" method="POST" action="">
                            <>
                              {myData[nextField].type === "select" ? (
                                <>
                                  {" "}
                                  <div className="col-lg-5 col-md-6 col-sm-3">
                                    <div className="dropdown bootstrap-select show-tick">
                                      {" "}
                                      <div className="form-group has-default">
                                        <div className="input-group-prepend">
                                          <span className="input-group-text">
                                            <FaRegEnvelope size={30} />
                                          </span>
                                        </div>
                                        <select
                                          className="form-control  text-center"
                                          onChange={(e) =>
                                            setDeptId(e.target.value)
                                          }
                                          style={{
                                            marginLeft: "60px",
                                          }}
                                          type={myData[nextField].type}
                                          required
                                        >
                                          <option>4545454</option>
                                          {Object.entries(depart).map(
                                            ([key, option]) => {
                                              return (
                                                <option value={option._id}>
                                                  {option.department}
                                                </option>
                                              );
                                            }
                                          )}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="form-group has-default bmd-form-group">
                                    <div className="input-group">
                                      <div className="input-group-prepend">
                                        <span className="input-group-text">
                                          <FaRegEnvelope size={30} />
                                        </span>
                                      </div>
                                      <input
                                        type={myData[nextField].type}
                                        class="form-control text-center"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        required
                                        onChange={Data}
                                        // value={email}
                                        // onChange={(e) =>
                                        //   setEmail(e.target.value)
                                        // }
                                        value={apendState}
                                        placeholder={
                                          myData[nextField].placeholder
                                        }
                                      />
                                      <vpan class="bottom"></vpan>
                                      <vpan class="right"></vpan>
                                      <vpan class="top"></vpan>
                                      <vpan class="left"></vpan>
                                    </div>
                                  </div>
                                </>
                              )}
                            </>

                            <div className="form-check">
                              <label className="form-check-label">
                                Already have an{" "}
                                <Link
                                  to="/"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  {" "}
                                  Account ?
                                </Link>
                              </label>
                            </div>
                            <div className="text-center">
                              {submitButton && (
                                <a
                                  type="submit"
                                  className="btn btn-primary btn-round mt-4"
                                  onClick={registerUser}
                                >
                                  Get Started
                                </a>
                              )}
                              {nextButton && (
                                <>
                                  <a
                                    type="submit"
                                    className="btn btn-primary btn-round mt-4"
                                    onClick={Handle}
                                  >
                                    NExt
                                  </a>
                                </>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
