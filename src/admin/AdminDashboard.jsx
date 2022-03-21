import React from "react";
import NavBar from "../headers/admin/SideBar";
import { Card, Container, Table, CardGroup, Accordion } from "react-bootstrap";

function AdminDashboard() {
  return (
    <>
      <div className="fixed-bg3">
        <NavBar />
        <br />
        <br />
        <br />
        <Container className="con">
          {" "}
          <div class="alert alert-dismissible alert-primary">
            <h4 class="alert-heading">Warning!</h4>
            <p class="mb-0">
              Best check yo self, you're not looking too good. Nulla vitae elit
              libero, a pharetra augue. Praesent commodo cursus magna,{" "}
              <a href="#" class="alert-link">
                vel scelerisque nisl consectetur et
              </a>
              .
            </p>
          </div>
          <h1 className="chart-heading">Your's Dashboard</h1>
          <CardGroup>
            <Card
              className="shadow-lg  card2 border-0"
              style={{ backgroundColor: "white" }}
            >
              <Card.Body>
                <p>New Students</p>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </Card.Body>
            </Card>
            <Card className="shadow-lg border-0 card2">
              <Card.Body>
                {" "}
                <p>New Students</p>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{ marginLeft: "20px" }}
              className="shadow-lg border-0 bg-light"
            >
              <Card.Body>
                {" "}
                <p>New Students</p>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{ marginLeft: "20px" }}
              className="shadow-lg border-0 bg-light"
            >
              <Card.Body>
                {" "}
                <p>New Students</p>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
          <br />
          <CardGroup>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
          </CardGroup>
          <br />
          <CardGroup>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
          </CardGroup>
          <br />
          <CardGroup>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
            <Card style={{ marginLeft: "20px" }} className="shadow-lg border-0">
              <Card.Body></Card.Body>
            </Card>
          </CardGroup>
          {/* <CardGroup>
          <Card>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                  <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </Card>
        </CardGroup> */}
        </Container>
      </div>
    </>
  );
}

export default AdminDashboard;
