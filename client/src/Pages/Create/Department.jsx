import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DepartmentCreate() {
  const [department, setDepartment] = useState([]);
  const registerDepartment = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/createDepart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        department,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Department Created Successfully");
    }
  };

  return (
    <>
      <div className="wrapper ">
        <div className="main-panel">
          <div className="content">
            <div className="">
              <div className="col-md-12 ">
                <h3>Create Department </h3>
                <p>
                  <small>
                    <a href="">Home</a> / <small> Create Department</small>
                  </small>
                </p>
              </div>
            </div>
              <div className="col-md-12">
                <h2 className="card-title text-center">Add Department</h2>
                <div className="card card-signup">
                  <div className="card-body">
                    <div className="col-md-12">
                      <form className="form" method="POST">
                        <div className="form-group has-default bmd-form-group ">
                          <div className="input-group">
                            <div className="input-group-prepend ">
                              <span className="input-group-text pr-6 ">
                                Department Name :
                              </span>
                            </div>
                            <input
                              type="text"
                              name="subject"
                              className="form-control text-center mr-4 "
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              required
                              value={department}
                              onChange={(e) => setDepartment(e.target.value)}
                            />
                          </div>
                          <div className="text-center mb-4 ml-4 mr-4">
                            <a
                              type="submit"
                              className="btnLogin btn-primary btn-round mt-4"
                              onClick={registerDepartment}
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}