import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import Header from "../../headers/student/NavBar";

function Index() {
  const [semes, setSemes] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:5000/semesters");
    setSemes(await response.json());
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
          <li class="breadcrumb-item active">All Semester</li>
        </ol>
        <h1>
          Semesters{" "}
          {localStorage.getItem("isAdmin") ? (
            <>
              <a
                href="/createSemester"
                className="btn btn-light"
                style={{ float: "right" }}
              >
                Add Semester
              </a>
            </>
          ) : null}
        </h1>

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Semesters</th>
              <th scope="col">Program</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(semes).map(([key, value]) => {
              return (
                <tr class="table-active">
                  <th scope="row">{key}</th>
                  <td>{value.semester}</td>
                  <td>{value.programId.prog}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {Object.entries(semes).map(([key, value]) => {
          return (
            <div class="card mb-3">
              <h3 class="card-header bg-dark">semester-{value.semester}</h3>

              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Index;
