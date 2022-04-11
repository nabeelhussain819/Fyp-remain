import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterModal from "./Register";

function LoginModal() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [on, setOn] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Your Email is not verified");
    } else {
      console.log(data);
      toast.success("Logged In Successfully");
      const name = data.name.name;
      const id = data.name._id;
      const email = data.name.email;
      const u_id = data.name.u_id;
      const phone = data.name.phone;
      const code = data.name.courseId;

      if (email === "admin@admin.com") {
        localStorage.setItem("data", "admin");
        localStorage.setItem("isAdmin", "Admin");
        localStorage.setItem("depart", "all");
      } else {
        const depart = data.name.deptId.department;
        localStorage.setItem("depart", depart);
        localStorage.setItem("data", name);
      }
      if (data.name.isTeacher === true) {
        localStorage.setItem("isTeacher", "teacher");
      }
      localStorage.setItem("list", JSON.stringify(data.token));
      localStorage.setItem("email", email);

      localStorage.setItem("u_id", u_id);
      localStorage.setItem("phone", phone);
      localStorage.setItem("code", code);
      localStorage.setItem("id", id);
      if (localStorage.getItem("isAdmin")) {
        navigate("/admin-panel/dashboard");
        window.location.reload();
      } else if (localStorage.getItem("isTeacher")) {
        navigate("/teacher/dashboard");
        window.location.reload();
      } else {
        navigate("/user/dashboard");
        window.location.reload();
      }
    }
  };
  return (
    <>
      {values.map((v, idx) => (
        <a
          key={idx}
          className="me-2 text-white "
          style={{ textDecoration: "none" }}
          onClick={() => handleShow(v)}
        >
          <span>Log In</span>

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
              <h2 class="modal-title title ">LOG IN</h2>
              <p class="font-size-14">Sign In to Your Account</p>
            </div>
            <div class="modal-body">
              <div class="contact-form-action">
                <form className="form " method="POST" action="">
                  <div class="input-box">
                    <label class="label-text">Email Address</label>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        name="text"
                        placeholder="Type your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="input-box">
                    <label class="label-text">Password</label>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="password"
                        name="text"
                        placeholder="Type password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-check text-center">
                    <label className="form-check-label">
                      Don't have any Account ?
                      <b>
                        <RegisterModal />
                      </b>
                    </label>
                  </div>
                  <div>
                    <div class="btn-box pt-3 pb-4">
                      <button
                        type="button"
                        onClick={loginUser}
                        class="theme-btn w-100"
                      >
                        Login Account
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

export default LoginModal;
