import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import vector from "../../Assets/vector.jpg";
import { FaRegEnvelope, FaUnlockAlt } from "react-icons/fa";
import NavBarLogin from "../../Components/Header/LoginNavbar";
import myData from "../../Components/Authentication/RegisterForm";

const Register = () => {
  //   const navigate = useNavigate();
  const [nextField, setNextFeild] = useState(0);
  const [submitButton, setSubmitButton] = useState(false);
  const [nextButton, setNextButton] = useState(true);
  const [apendState, setApendState] = useState([]);
  const [newData, setNewData] = useState([]);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [name, setUserName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [u_id, setU_Id] = useState("");
  //   const [deptId, setDeptId] = useState("");
  //   const [depart, setDepart] = useState("");
  //   const [programId, setProgramId] = useState("");
  //   const [program, setProgram] = useState([]);
  //   const [semesterId, setSmesterId] = useState([]);
  //   const [semester, setSmester] = useState([]);

  function Handle() {
    const Change = nextField + 1;
    var obj = { [myData[nextField].name]: apendState };
    setNewData((newData) => [...newData, obj]);
    setNextFeild(Change);
    setApendState("");
    if (nextField === myData.length - 1) {
      setSubmitButton(true);
      setNextButton(false);
      setNextFeild(0);
    }
  }
  function Data(e) {
    setApendState(e.target.value);
    console.log(newData)
  }

  // const registerUser = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("http://localhost:5000/signup", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newData),
  //   });
  //   const data = await res.json();
  //   if (res.status === 400 || !data) {
  //     toast.error("Invalid Credentials!");
  //   } else {
  //     toast("register Successfully");
  //     navigate("/");
  //   }
  //   console.log(newData);
  // };

  // const getData = async () => {
  //   const response = await fetch("http://localhost:5000/departments");
  //   setDepart(await response.json());
  // };
  // const getProgram = async () => {
  //   const response = await fetch("http://localhost:5000/readProgram");
  //   setProgram(await response.json());
  // };
  // const getsemester = async () => {
  //   const response = await fetch("http://localhost:5000/semesters");
  //   setSmester(await response.json());
  // };
  // useEffect(() => {
  //   getProgram();
  //   getData();
  //   getsemester();
  // }, []);
  return (
    <>
      <div className="off-canvas-sidebar">
        <NavBarLogin />
        <div className="wrapper wrapper-full-page">
          <div
            className="page-header register-page header-filter"
            filter-color="black"
          >
            <div className="container">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="card card-signup">
                  <h2 className="card-title text-center">SIGN UP</h2>
                  <div className="card-body">

                    <div className="col-md-12 mr-auto">
                      <div className="social text-center">
                        <h4 className="mt-3 ml-4">Create New Account</h4>
                      </div>
                      <form className="form" method="POST" action="">

                        <div className="form-group has-default bmd-form-group ">
                          <div className="input-group">
                            <div className="input-group-prepend ">
                              <span className="input-group-text pr-6">
                                step : {nextField + 1}
                              </span>
                            </div>
                            <input
                              type={myData[nextField].type}
                              className="form-control text-center mr-4 "
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
                          </div>
                        </div>

                        <div className="form-check text-center mr-4">
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
                              className="btnLogin btn-primary btn-round mt-4 ml-2"
                            //   onClick={registerUser}
                            >
                              Get Started
                            </a>
                          )}
                          {nextButton && (
                            <>
                              <a
                                type="submit"
                                className="btnLogin btn-primary btn-round mt-4"
                                onClick={Handle}
                              >
                                Next
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
    </>
  );
};

export default Register;