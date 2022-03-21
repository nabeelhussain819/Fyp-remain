import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";
import bg2 from "../../components/assests/bg2.jpg";
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = {
    container: {
      baackground: "white",
    },
  };

  return (
    <>
      <IoIosMenu size={32} onClick={handleShow} />

      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        style={{
          backgroundImage: `url(${bg2})`,
          color: "white",
          height: "100%",
          width: "220px",
          display: "flex",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TSE</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function ofCanvaas() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
