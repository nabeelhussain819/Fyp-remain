import React, { useState } from "react";

import { Modal, Button, Container } from "react-bootstrap";

function Example() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
    localStorage.clear();
    setTimeout(function () {
      window.location.href = "/";
    }, 3000);
  }

  return (
    <>
      {values.map((v, idx) => (
        <a
          key={idx}
          className="me-2 text-white "
          style={{ textDecoration: "none" }}
          onClick={() => handleShow(v)}
        >
          <span>LogOut</span>

          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </a>
      ))}
      <Modal
        show={show}
        className="bg-transparent"
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Body
          className=" text-center text-light"
          style={{ backgroundColor: "#0d233e" }}
        >
          <p>LOGING OUT.....</p>
          <div id="loading-wrapper">
            <div id="loading-text">LOADING</div>
            <div id="loading-content"></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
