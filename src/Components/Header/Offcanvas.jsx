import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <IoIosMenu size={32} onClick={handleShow} className="text-white" />
            <Offcanvas show={show} onHide={handleClose} {...props} style={{
                color: "white",
                height: "100%",
                width: "220px",
                display: "flex",
            }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default function OfCanvas() {
    return (
        <>
            {['end'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}
