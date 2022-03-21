import React, { useEffect, useState } from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../headers/student/NavBar";
function Index() {
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();
  const setData = (value) => {
    let { _id, subjects, code } = value;
    localStorage.setItem("courseIdQec", _id);
    localStorage.setItem("Subjects", subjects);
    localStorage.setItem("code", code);
    navigate("/enrollCourse");
  };
  const getData = async () => {
    const response = await fetch("http://localhost:5000/courses");
    setCourse(await response.json());
  };
  const user = localStorage.getItem("id");
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header />
      <br /> <br /> <br /> <br />
      <Container>
        <ol class="breadcrumb text-white bg-light">
          <li class="breadcrumb-item">
            <a href="/"> Home</a>
          </li>
          <li class="breadcrumb-item active">All Course</li>
        </ol>
        <h1>Enrolled Courses</h1>
        <h1>
          All Courses{" "}
          {localStorage.getItem("isAdmin") ? (
            <>
              <a
                href="/createCourse"
                className="btn btn-light"
                style={{ float: "right" }}
              >
                Add Course
              </a>
            </>
          ) : null}
        </h1>{" "}
        {Object.entries(course).map(([key, value]) => {
          return (
            <div class="card mb-3">
              <h3 class="card-header bg-dark">{value.subjects} </h3>

              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                {value.semesterId.semester}
              </text>
              <div class="card-body">
                {/* if(course.userId === localStorage.getItem("id"))
                {
                  <>
                    <Button
                      type="submit"
                      class="btn-block"
                      onClick={() => setData(value)}
                    >
                      Enroll Now!
                    </Button>
                  </>
                } */}
                {user == value.userId.name ? null : (
                  <>
                    {localStorage.getItem("courseId") == value._id ? (
                      <>
                        {" "}
                        <Button
                          type="submit"
                          class="btn-block"
                          onClick={() => setData(value)}
                          disabled
                        >
                          Already enrolled!
                        </Button>
                        <a
                          href="/qec"
                          class="btn btn-info"
                          onClick={() => setData(value)}
                        >
                          Evaluation form
                        </a>
                      </>
                    ) : (
                      <>
                        <Button
                          type="submit"
                          class="btn-block"
                          onClick={() => setData(value)}
                        >
                          Enroll Now!
                        </Button>
                        <a
                          href="/qec"
                          class="btn btn-info"
                          onClick={() => setData(value)}
                        >
                          Evaluation form
                        </a>
                      </>
                    )}{" "}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Index;
