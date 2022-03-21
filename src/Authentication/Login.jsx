import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import vector from "../components/assests/vector1.jpg";
import { FaRegEnvelope, FaUnlockAlt } from "react-icons/fa";
import NavbarLogin from "./NavbarLogin";
toast.configure();
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        navigate("/");
        window.location.reload();
      } else if (localStorage.getItem("isTeacher")) {
        navigate("/");
        window.location.reload();
      } else {
        navigate("/");
        window.location.reload();
      }
    }
  };
  const getLocalItem = () => {
    let list = localStorage.getItem(email);
    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };
  return (
    <>
      <div className="off-canvas-sidebar">
        <NavbarLogin />
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
                    <h2 className="card-title text-center">LOG IN</h2>
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
                            <h4 className="mt-3">Sign In to Your Account</h4>
                          </div>
                          <form className="form" method="POST" action="">
                            <div className="form-group has-default bmd-form-group">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <FaRegEnvelope size={30} />
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  class="form-control text-center"
                                  style={{}}
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  required
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Enter email Address Here"
                                />
                                <vpan class="bottom"></vpan>
                                <vpan class="right"></vpan>
                                <vpan class="top"></vpan>
                                <vpan class="left"></vpan>
                              </div>
                            </div>
                            <div className="form-group has-default bmd-form-group">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <FaUnlockAlt size={30} />
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  required
                                  class="form-control text-center"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  placeholder="Add Password Here"
                                />
                                <vpan class="bottom"></vpan>
                                <vpan class="right"></vpan>
                                <vpan class="top"></vpan>
                                <vpan class="left"></vpan>
                              </div>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                Don't have any Account ?
                                <Link
                                  to="/Signup"
                                  style={{
                                    textDecoration: "none",
                                  }}
                                >
                                  {" "}
                                  <b> Register Now</b>
                                </Link>
                              </label>
                            </div>
                            <div className="text-center">
                              <a
                                type="submit"
                                className="btn btn-primary btn-round mt-4"
                                onClick={loginUser}
                              >
                                Get Started
                              </a>
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
export default LoginPage;
