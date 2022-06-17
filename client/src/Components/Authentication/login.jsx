import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginModal() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        navigate("/dashboard");
        window.location.reload();
      } else if (localStorage.getItem("isTeacher")) {
        navigate("/dashboard");
        window.location.reload();
      } else {
        navigate("/dashboard");
        window.location.reload();
      }
    }
  };
  return (
    <>
      {values.map((v, idx) => (
        <a
          key={idx}
          className="me-2 "
          style={{ textDecoration: "none" }}
          onClick={() => handleShow(v)}
        >
          <span>Log In</span>

          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </a>
      ))}
      <Modal
        show={show}
        className="bg-opacity section-bg3 "
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Body>
          <div className="modal-content border-0 ">
            <div className="modal-header text-center">
              <h4 className="modal-title">LOG IN</h4>
              <p className="font-size-14">Sign In to Your Account</p>
            </div>
            <div className="modal-body">
              <div className="contact-form-action">
                <form className="form " method="POST" action="">
                  <div className="input-box ">
                    <div className="form-group label-float">
                      <input
                        type="text"
                        name="text"
                        placeholder="Type your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
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
                      />
                      <label>Password</label>
                    </div>
                  </div>

                  <div>
                    <div className="btn-box pt-3 pb-4">
                      <button
                        type="button"
                        onClick={loginUser}
                        className="theme-btn w-100"
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
