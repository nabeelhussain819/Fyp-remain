import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimesCircle, FaPlusCircle } from "react-icons/fa";

export default function Allcreate() {
  const [department, setDepartment] = useState([]);
  const [isProgram, setIsProgram] = useState(false);
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
      setIsProgram(true);
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
            {isProgram === true ? (
              <ProgramCreate data={department} />
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
function ProgramCreate(props) {
  const [data, setdata] = useState([]);
  const [result, setResult] = useState([]);
  const [isCourse, setIsCourse] = useState(false);
  const [prog, setProg] = useState([]);
  const registerProgram = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/createProgram", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        prog,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      setIsCourse(true);
      toast.success("Department Created Successfully");
    }
  };
  const [formValues, setFormValues] = useState([{ subject: "" }]);
  //   console.log(props);
  let addFormFields = () => {
    const obj = {};
    setResult(data, obj);
    console.log(result);
    setFormValues([...formValues, { subject: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };
  console.log(props.data);
  return (
    <>
      {isCourse === true ? (
        <CourseCreate data={prog} department={props.data} />
      ) : (
        <>
          <div className="container mb-4">
            <div className="col-md-12">
              <div className="input-group">
                <div className="input-group-prepend ">
                  <span className="input-group-text">Department:</span>
                </div>

                <input
                  type="text"
                  name="subject"
                  className="form-control text-center"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  disabled
                  value={props.data}
                  // onChange={(e) => setProg(e.target.value)}
                />
              </div>
            </div>
          </div>

          <h2 className="card-title text-center">Add Program</h2>
          <div className="card">
            <form className="" method="POST">
              {formValues.map((element, index) => (
                <>
                  <div className="input-group">
                    <div className="input-group-prepend ">
                      <span className="input-group-text">Add Program :</span>
                    </div>

                    <input
                      type="text"
                      name="subject"
                      className="form-control text-center"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                      value={prog}
                      onChange={(e) => setProg(e.target.value)}
                    />
                    {index ? (
                      <a
                        type="button"
                        className="mt-2 ml-2"
                        onClick={() => removeFormFields(index)}
                      >
                        <FaTimesCircle size={22} className="text-danger" />
                      </a>
                    ) : null}

                    <a
                      className="mt-2 ml-2 text-success"
                      type="button"
                      onClick={() => addFormFields()}
                    >
                      <FaPlusCircle size={22} />
                    </a>
                  </div>
                </>
              ))}
              <div className="text-center mb-4 ml-4 mr-4">
                <a
                  type="submit"
                  className="btnLogin btn-primary btn-round mt-4"
                  onClick={registerProgram}
                >
                  Get Started
                </a>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

function CourseCreate(props) {
  const [formValues, setFormValues] = useState([{ subjects: "" }]);
  const [subjects, setSubjects] = useState([]);
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    setSubjects(newFormValues);
    console.log(subjects);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { subjects: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:5000/createCourse", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(subjects),
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
  // const registerCourse = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch("http://localhost:5000/createCourse", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({
  //       subject,
  //     }),
  //   });
  //   const data = await res.json();
  //   if (res.status === 400 || !data) {
  //     toast.warning("Invalid Credentials");
  //   } else if (res.status === 401) {
  //     toast.warning("Invalid entry!");
  //   } else {
  //     toast.success("Course Created Successfully");
  //   }
  // };

  return (
    <>
      <h2 className="card-title text-center">Add Course</h2>
      <div className="card">
        <form className="" method="POST">
          {formValues.map((element, index) => (
            <>
              <div className="input-group">
                <div className="input-group-prepend ">
                  <span className="input-group-text">Add Course :</span>
                </div>

                <input
                  type="text"
                  name="subjects"
                  className="form-control text-center"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={element.subjects || ""}
                  onChange={(e) => handleChange(index, e)}
                />
                {index ? (
                  <a
                    type="button"
                    className="mt-3 ml-2"
                    onClick={() => removeFormFields(index)}
                  >
                    <FaTimesCircle size={22} className="text-danger" />
                  </a>
                ) : null}

                <a
                  className="mt-3 ml-2 text-success"
                  type="button"
                  onClick={() => addFormFields()}
                >
                  <FaPlusCircle size={22} />
                </a>

                <a
                  type="submit"
                  className="btn btn-primary btn-round ml-4"
                  onClick={handleSubmit}
                >
                  Done
                </a>
              </div>
            </>
          ))}
        </form>
      </div>
    </>
  );
}
