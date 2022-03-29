import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";

export default function SemesterCreate() {
  const [semester, setSemester] = useState([]);
  const [programId, setProgramId] = useState("");
  const [program, setProgram] = useState([]);


  console.log(programId);
  const registerSemester = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/createSemester", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        semester,
        programId,
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

  const getData = async () => {
    const response = await (
      await fetch("http://localhost:5000/readProgram")
    ).json();
    setProgram(response);
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
                <h3>Create Semester </h3>
                <p>
                  <small>
                    <a href="">Home</a> / <small> Create Semester</small>
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <h2 className="card-title text-center">Add Semester</h2>
              <div className="card card-signup">
                <div className="card-body">
                  <div className="col-md-12">
                    <form className="form" method="POST">
                      <div className="form-group has-default bmd-form-group ">
                        <div className="input-group">
                          <div className="col-md-12 text-center mb-3">
                            <span className=" pr-6  ">
                              Select Program :
                            </span>  
                            </div>     
                              <select
                                className="form-select text-center mb-4"
                                onChange={(e) =>
                                  setProgramId(e.target.value)
                                }
                              >     
                                                     
                                {program.map((data) => {
                                  return (
                                    <>
                                     <option >----select-one----</option>  
                                      <option value={data._id}>
                                        {data.prog}
                                      </option>
                                    </>
                                  );
                                })}
                              </select>
                              
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend ">
                            <span className="input-group-text pr-6 ">
                              Semester Number :
                            </span>
                          </div>
                          <input
                            type="number"
                            name="subject"
                            className="form-control text-center mr-4 "
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                          />
                        </div>
                        <div className="text-center mb-4 ml-4 mr-4">
                          <a
                            type="submit"
                            className="btnLogin btn-primary btn-round mt-4"
                            onClick={registerSemester}
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
