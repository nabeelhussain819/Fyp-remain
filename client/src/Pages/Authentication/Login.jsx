import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEnvelope, FaUnlockAlt } from "react-icons/fa";
import NavBarLogin from "../../Components/Header/LoginNavbar";
toast.configure();
const Login = () => {
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
      console.log(data)
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
        navigate("/teaacher/dashboard");
        window.location.reload();
      } else {
        navigate("/user/dashboard");
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
        <NavBarLogin />
        <div className="wrapper wrapper-full-page">
          <div
            className="page-header register-page header-filter"
            filter-color="black"
          >
            <div className="container">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="card card-signup border-0">
                  <h2 className="card-title text-center">LOG IN</h2>
                  <div className="card-body">
                    <div className="col-md-12">
                      <div className=" text-center ml-4">
                        <h4 className="mt-3">Sign In to Your Account</h4>
                      </div>
                      <form className="form " method="POST" action="">
                        <div className="form-group has-default bmd-form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <FaRegEnvelope size={30} />
                              </span>
                            </div>
                            <input
                              type="email"
                              className="form-control text-center pr-2"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter email Address Here"
                            />
                          </div>
                        </div>
                        <div className="form-group has-default bmd-form-group">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <FaUnlockAlt size={30} />
                              </span>
                            </div>
                            <input
                              type="password"
                              required
                              className="form-control text-center pr-2"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Add Password Here"
                            />
                          </div>
                        </div>
                        <div className="form-check text-center">
                          <label className="form-check-label">
                            Don't have any Account ?
                            <Link
                              to="/signup"
                              style={{
                                textDecoration: "none",
                              }}
                            >
                              {" "}
                              <b> Register Now</b>
                            </Link>
                          </label>
                        </div>
                        <div>
                          <a
                            type="submit"
                            className="btnLogin btn-primary ml-4 btn-round mt-4"
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
    </>
  );
};
export default Login;
