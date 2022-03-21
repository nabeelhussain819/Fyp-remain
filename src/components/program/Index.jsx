import React, { useEffect, useState } from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../headers/student/NavBar";
function Index() {
  const [program, setProgram] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:5000/readProgram");
    setProgram(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <ol class="breadcrumb text-white bg-light">
          <li class="breadcrumb-item">
            <a href="/"> Home</a>
          </li>
          <li class="breadcrumb-item active">All Programs</li>
        </ol>
        <h1>
          All Programs{" "}
          {localStorage.getItem("isAdmin") ? (
            <>
              <a
                href="/createProgram"
                className="btn btn-light"
                style={{ float: "right" }}
              >
                Add Program
              </a>
            </>
          ) : null}
        </h1>{" "}
        {Object.entries(program).map(([key, value]) => {
          return (
            <div class="card mb-3">
              <h3 class="card-header bg-primary">{value.prog}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="d-block user-select-none"
                width="100%"
                height="200"
                aria-label="Placeholder: Image cap"
                focusable="false"
                role="img"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 318 180"
              >
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Image cap
                </text>
              </svg>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    department: {value.deptId.department}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion defaultActiveKey="1">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Total Users in this Department :
                          {value.deptId.userId.length}
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    semester-{value.semesterId.semester}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion defaultActiveKey="1">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Total Semesters in {value.prog} :{" "}
                          {value.semesterId.length}
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Total Students in {value.prog} : {value.userId.length}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion defaultActiveKey="3">
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Courses : {value.courseId.subjects}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion defaultActiveKey="6">
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          Total Courses in {value.prog} :{" "}
                          {value.courseId.length}{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Index;
