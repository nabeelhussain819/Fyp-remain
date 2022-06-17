import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterModal(props) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [u_id, setUid] = useState("");

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        u_id,
        phone,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error(data.error);
    } else {
      {
        data.isTeacher === true
          ? localStorage.setItem("teacher", data._id)
          : localStorage.setItem("user", data._id);
      }
      toast("register Successfully");
      // navigate("/extendedForm");
    }
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
          <span>SignUp</span>

          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </a>
      ))}
      <Modal
        {...props}
        show={show}
        className="bg-opacity section-bg3"
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Body>
          <div className="modal-content border-0">
            <div className="modal-header text-center">
              <h4 className="modal-title ">SignUp</h4>
              <p className="font-size-14">Create Your New Account</p>
            </div>
            <div className="modal-body">
              <div className="contact-form-action">
                <form className="form " method="POST" action="">
                  <div className="input-box">
                    <div className="form-group label-float">
                      <input
                        type="text"
                        name="text"
                        placeholder="Type your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />{" "}
                      <label>User Name</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <div className="form-group label-float">
                      <input
                        type="email"
                        name="email"
                        placeholder="Type Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />{" "}
                      <label>Email Address</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <div className="form-group label-float">
                      <input
                        type="password"
                        name="text"
                        placeholder="Type password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />{" "}
                      <label>Password</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <div className="form-group label-float">
                      <input
                        type="text"
                        name="text"
                        placeholder="Type University id"
                        value={u_id}
                        onChange={(e) => setUid(e.target.value)}
                        required
                      />
                      <label>University ID</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <div className="form-group label-float">
                      <input
                        type="text"
                        name="text"
                        placeholder="Type Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <label>Phone </label>
                    </div>
                  </div>

                  <div>
                    <div className="btn-box pt-3 pb-4">
                      <button
                        type="button"
                        onClick={registerUser}
                        className="theme-btn w-100"
                      >
                        Create Account
                      </button>
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
