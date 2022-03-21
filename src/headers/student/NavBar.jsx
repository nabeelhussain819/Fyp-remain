import React, { useState } from "react";
import {
  Card,
  Container,
  Table,
  CardGroup,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Example from "./Loader";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div></div>
      <Button
        variant="primary"
        style={{
          padding: "10px",
          backgroundColor: "black",
          borderRadius: "0%",
          position: "fixed",
          top: "0",
          right: "0",
          width: "100%",
          zIndex: "100",
        }}
        className="border-0"
        onClick={handleShow}
      >
        <h4 style={{ float: "left", paddingLeft: "100px" }}>TES</h4>
        <IoIosMenu size={32} style={{ float: "right" }} />
      </Button>
      <Offcanvas
        show={show}
        style={{
          backgroundColor: "black",
          color: "white",
          height: "100%",
          width: "220px",
          display: "flex",
        }}
        variant="dark"
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav>
            <Nav.Link className="border-0 text-white">
              <Link
                to="/ReadDept"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span>Departments</span>
              </Link>
            </Nav.Link>
            <Nav.Link className="border-0 text-white">
              <Link
                to="/ReadSemes"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <span>Semesters</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/ReadCourse"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <span>Courses</span>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} className="border-0 text-white">
              <Link
                to="/ReadProgram"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <span>Programs</span>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} className="border-0 text-white">
              <Link
                to="/QEC"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <span>QEC</span>
              </Link>
            </Nav.Link>
            <hr />
            <Nav.Link eventKey={2} className="border-0 text-white">
              <Link
                to="/Profile"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <span className="dotg"></span>{" "}
                <span> {localStorage.getItem("data")}`s Profile</span>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} className="border-0 text-white">
              <span className="dot"></span>{" "}
              <span>
                {" "}
                <Example />
              </span>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Header() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Header;
