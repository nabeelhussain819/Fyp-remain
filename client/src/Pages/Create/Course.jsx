import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CourseCreate() {
  const [subjects, setSubjects] = useState([]);
  const [semesterId, setSemesterId] = useState("");
  const [semester, setSemester] = useState([]);

  const registerCourse = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/createCourse", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        subjects,
        semesterId
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Course Created Successfully");
    }
  };
  const getData = async () => {
    const response = await (
      await fetch("http://localhost:5000/semesters")
    ).json();
    setSemester(response);
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
                <h3>Create Course </h3>
                <p>
                  <small>
                    <a href="">Home</a> / <small> Create Course</small>
                  </small>
                </p>
              </div>
            </div>
              <div className="col-md-12">
                <h2 className="card-title text-center">Add Course</h2>
                <div className="card card-signup">
                  <div className="card-body">
                    <div className="col-md-12">
                      <form className="form">
                        <div className="form-group has-default bmd-form-group ">
                        <div className="input-group">
                          <div className="col-md-12 text-center mb-3">
                            <span className=" pr-6  ">
                              Select Semester :
                            </span>  
                            </div>     
                              <select
                                className="form-select text-center mb-4"
                                value={semesterId}
                                onChange={(e) =>
                                  setSemesterId(e.target.value)
                                }
                              >     
                              <option disabled>----select-one----</option>                          
                                {semester.map((data) => {
                                  return (
                                    <>
                                      <option className="option" value={data._id}>
                                        {data.programId.prog}--{data.semester}
                                      </option>
                                    </>
                                  );
                                })}
                              </select>
                              
                        </div>
                          <div className="input-group">
                            <div className="input-group-prepend ">
                              <span className="input-group-text pr-6 ">
                                Course Name :
                              </span>
                            </div>
                            <input
                              type="text"
                              name="subject"
                              className="form-control text-center mr-4 "
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              required
                              value={subjects}
                              onChange={(e) => setSubjects(e.target.value)}
                            />
                          </div>
                          <div className="text-center mb-4 ml-4 mr-4">
                            <a
                              type="submit"
                              className="btnLogin btn-primary btn-round mt-4"
                              onClick={registerCourse}
                            >
                              Get Started
                            </a>
                            <hr/>
                            <p>Want to Add 
                            <Link to="programCreate"> Program? </Link></p>
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