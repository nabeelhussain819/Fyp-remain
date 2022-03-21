import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import Header from "../../headers/student/NavBar";

function Index() {
  const [depart, setDepart] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:5000/departments");
    setDepart(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header />
      <br /> <br /> <br /> <br />
      <Container>
        <ol class="breadcrumb bg-light">
          <li class="breadcrumb-item">
            <a href="/"> Home</a>
          </li>
          <li class="breadcrumb-item active">All Department</li>
        </ol>
        <h1 className="text-center ">All Departments</h1>
        <hr />

        {Object.entries(depart).map(([key, curElem]) => {
          return (
            <div class="card mb-3">
              <h3 class="card-header">Department Of {curElem.department}</h3>

              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Total Programs {curElem.department}:
                    {curElem.programId.length}
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Total Students in {curElem.department}:
                    {curElem.userId.length}
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="2">
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Total Teachers in {curElem.department}:
                    {curElem.teacherId.length}
                  </Accordion.Header>
                  <Accordion.Body></Accordion.Body>
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
