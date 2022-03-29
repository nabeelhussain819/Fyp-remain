import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
export default function ProgramCreate() {
  const [prog, setProg] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [depart, setDepart] = useState([]);
  
  const registerProgram = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/createProgram", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        prog,
        departmentId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Program Created Successfully");
    }
  };
  console.log(departmentId);
  const getData = async () => {
    const response = await (
      await fetch("http://localhost:5000/departments")
    ).json();
    setDepart(response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="wrapper ">
        <div className="main-panel">
          <div className="content">
            <div className="">
              <div className="col-md-12 ">
                <h3>Create Program </h3>
                <p>
                  <small>
                    <a href="">Home</a> / <small> Create Program</small>
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <h2 className="card-title text-center">Add Program</h2>
              <div className="card card-signup">
                <div className="card-body">
                  <div className="col-md-12">
                    <form className="form">
                      <div className="form-group has-default bmd-form-group ">
                        <div className="input-group">
                          <div className="col-md-12 text-center mb-3">
                            <span className=" pr-6  ">
                              Select Department :
                            </span>  
                            </div>     
                              <select
                                className="form-select text-center mb-4"
                                value={departmentId}
                                onChange={(e) =>
                                  setDepartmentId(e.target.value)
                                }
                              >     
                              <option disabled>----select-one----</option>                          
                                {depart.map((data) => {
                                  return (
                                    <>
                                      <option value={data._id}>
                                        {data.department}
                                      </option>
                                    </>
                                  );
                                })}
                              </select>
                              
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend ">
                            <span className="input-group-text pr-6 ">
                              Program Name :
                            </span>
                          </div>
                          <input
                            type="text"
                            name="subject"
                            className="form-control text-center mr-4 "
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                            value={prog}
                            onChange={(e) => setProg(e.target.value)}
                          />
                        </div>
                        <div className="text-center mb-4 ml-4 mr-4">
                          <a
                            type="submit"
                            className="btnLogin btn-primary btn-round mt-4"
                            onClick={registerProgram}
                          >
                            Get Started
                          </a>
                          <hr />
                          <p>
                            Wanted to Add
                            <Link to="programCreate"> Program? </Link>
                          </p>
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
