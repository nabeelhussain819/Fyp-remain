import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchCourse from "../../../Components/Search/Course";

export default function CourseCreate() {
  const [name, setName] = useState([]);
  const [sectionId, setSectionId] = useState("");
  const [section, setSection] = useState([]);
  const [formValues, setFormValues] = useState([{ subject: "" }]);

  const registerCourse = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new819.herokuapp.com/create-course", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        sectionId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      setFormValues([...formValues, { subject: "" }]);
      toast.success("Course Created Successfully");
    }
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

  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/sections")
      ).json();
      setSection(response);
    };
    getData();
  }, []);
  return (
    <>
      <section className=" cta-area section-bg-2 subscriber-area ">
        <div className="hero-box ">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <div className="container">
                      <h2 className="sec__title font-size-30 text-white">
                        Courses{" "}
                      </h2>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="index.html" className="text-white">
                        Home
                      </a>
                    </li>
                    {localStorage.getItem("isAdmin") ? (
                      <li>
                        <a href="courseCreate">Add Course</a>
                      </li>
                    ) : (
                      <li>
                        <a href="dashboard">Dashboard </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="hero-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
          </svg>{" "}
        </div>
      </section>
      <div className="col-lg-12">
        <div className="form-box">
          <div className="form-title-wrap">
            <h3 className="title">Add Course</h3>
          </div>
          <div className="form-content">
            <div className="user-profile-action d-flex align-items-center pb-4">
              <div className="upload-btn-box"></div>
            </div>
            <div className="contact-form-action">
              <form action="#" className="MultiFile-intercepted">
                {formValues.map((element, index) => (
                  <>
                    <div className="row">
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Course Title</label>
                          <div className="form-group">
                            <span className="la la-user form-icon"></span>
                            <input
                              className="form-control"
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Select Semester</label>
                          <div className="form-group">
                            <span className="la la-map form-icon"></span>
                            <select
                              className="form-control p-3"
                              value={sectionId}
                              onChange={(e) => setSectionId(e.target.value)}
                            >
                              <option>----select-one----</option>
                              {section.map((data) => {
                                return (
                                  <>
                                    <option className="option" value={data._id}>
                                      {data.name}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="btn-box">
                          <button
                            type="submit"
                            className="theme-btn"
                            onClick={registerCourse}
                          >
                            Add!
                          </button>
                        </div>
                      </div>
                    </div>
                    {index ? (
                      <button
                        type="button"
                        className="btn-danger btn-round mt-4"
                        onClick={() => removeFormFields(index)}
                      >
                        remove
                      </button>
                    ) : null}
                  </>
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <SearchCourse searchData={name} />
      </div>
    </>
  );
}
