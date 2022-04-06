import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myData from "./RegisterForm";

function RegisterModal() {
  const values = [true];
  const navigate = useNavigate();
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [nextField, setNextFeild] = useState(0);
  const [nextButton, setNextButton] = useState(true);
  const [apendState, setApendState] = useState([]);
  const [newData, setNewData] = useState([]);
  const [submitButton, setSubmitButton] = useState(false);
  const [sendData, setSendData] = useState([]);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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
      console.log(data);
      {
        data.isTeacher === true
          ? localStorage.setItem("teacher", data._id)
          : localStorage.setItem("user", data._id);
      }
      toast("register Successfully");
      navigate("/extendedForm");
    }
    console.log(JSON.stringify(newData));
  };
  return (
    <>
      {values.map((v, idx) => (
        <a
          key={idx}
          className="me-2 text-primary "
          style={{ textDecoration: "none" }}
          onClick={() => handleShow(v)}
        >
          <span>Sign Up</span>

          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </a>
      ))}
      <Modal
        show={show}
        className="bg-opacity"
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Body>
          <div class="modal-content border-0">
            <div class="modal-header text-center">
              <h2 class="modal-title title ">SIGN UP</h2>
              <p class="font-size-14">Create New Account</p>
            </div>
            <div class="modal-body">
              <div class="contact-form-action">
                <form className="form " method="POST" action="">
                  <div class="input-box">
                    <label> step :0{nextField + 1}</label>

                    <div class="form-group">
                      <input
                        class="form-control"
                        type={myData[nextField].type}
                        name="text"
                        required
                        onChange={Data}
                        value={apendState}
                        placeholder={myData[nextField].placeholder}
                        disabled={myData[nextField].disable}
                      />
                    </div>
                  </div>
                  <div className="form-check text-center">
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
                  <div>
                    <div class="btn-box pt-3 pb-4">
                      {myData[nextField].disable === "true" ? (
                        <>
                          <button
                            type="button"
                            onClick={Handle}
                            class="theme-btn w-100 mb-4"
                          >
                            Yes I Agree!
                          </button>
                        </>
                      ) : (
                        <>
                          {nextButton && (
                            <>
                              <button
                                type="button"
                                onClick={Handle}
                                class="theme-btn w-100"
                              >
                                Next
                              </button>
                            </>
                          )}
                        </>
                      )}
                      {submitButton && (
                        <button
                          type="button"
                          onClick={registerUser}
                          class="theme-btn w-100"
                        >
                          Register Account
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModal;
