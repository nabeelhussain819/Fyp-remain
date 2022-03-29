import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEnvelope, FaUnlockAlt } from "react-icons/fa";
import NavBarLogin from "../../Components/Header/LoginNavbar";
import myData from "../../Components/Authentication/RegisterForm";

const Register = () => {
  const navigate = useNavigate();
  const [nextField, setNextFeild] = useState(0);
  const [nextButton, setNextButton] = useState(true);
  const [apendState, setApendState] = useState([]);
  const [newData, setNewData] = useState([]);
  const [submitButton, setSubmitButton] = useState(false);
  const [sendData, setSendData] = useState([]);

  function Handle() {
    const Change = nextField + 1;
    if (Change < myData.length) {
      setApendState("");
      var obj = { [myData[nextField].name]: apendState };
      setNewData((newData) => [...newData, obj]);
      const arrObj = [...newData];
      setSendData(() => Object.assign({}, ...arrObj));
      console.log(sendData);
      setNextFeild(Change);
    } else {
      setNextButton(false);
      setSubmitButton(true);
    }
  }
  function Data(e) {
    setApendState(e.target.value);
    console.log(JSON.stringify(newData));
  }

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendData),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error("Invalid Credentials!");
    } else {
      console.log(data)
      localStorage.setItem("data", data._id)
      toast("register Successfully");
      navigate("/extendedForm");
    }
    console.log(JSON.stringify(newData));
  };

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

                      <div className="center">
                        <div className="pagination">
                          <a href="#">1</a>
                          <a href="#">2</a>
                          <a href="#">3</a>
                          <a href="#">4</a>
                          <a href="#">5</a>
                          <a href="#">6</a>
                          <a href="#">7</a>
                          <a href="#">8</a>
                        </div>
                      </div>
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
                            value={apendState}
                            placeholder={myData[nextField].placeholder}
                            disabled={myData[nextField].disable}
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
                        {myData[nextField].disable === "true" ? (
                          <>
                            <a
                              type="submit"
                              className="btnLogin btn-primary btn-round mt-4"
                              onClick={Handle}
                            >
                              Yes I Agree!
                            </a>
                          </>
                        ) : (
                          <>
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
                          </>
                        )}
                        {submitButton && (
                          <a
                            type="submit"
                            className="btnLogin btn-primary btn-round mt-4"
                            onClick={registerUser}
                          >
                            Submit
                          </a>
                        )}
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
