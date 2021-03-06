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
        <button
          key={idx}
          className=" border-0 bg-transparent"
          style={{ textDecoration: "none" }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onClick={() => handleShow(v)}
        >
          LogOut
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </button>
      ))}

      <Modal
        show={show}
        className="bg-transparent "
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Body
          id="contained-modal-title-vcenter"
          className=" text-center text-light mt-2 section-bg3"
          style={{ backgroundColor: "#0d233e" }}
        >
          <div id="loading-wrapper" className="p-4">
            <div id="loading-text">LOGOUT...</div>
            <div id="loading-content"></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
