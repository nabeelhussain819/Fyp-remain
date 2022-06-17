import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button, Container } from "react-bootstrap";

function Commend({ data }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [teacherId, setTeacherId] = useState([data._id]);
  const [isHelpfull, setHelp] = useState("");
  const [isFriendly, setFriendy] = useState("");
  const [isProfessional, setPro] = useState("");
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const sent = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/commend", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        isHelpfull,
        teacherId,
        isFriendly,
        isProfessional,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      localStorage.setItem("isCommend", [teacherId]);
      setShow(false);
      toast.success("Commend Created Successfully");
    }
  };
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
          Commed Me!
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </button>
      ))}

      <Modal
        show={show}
        className="bg-transparent "
        fullscreen={fullscreen}
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Body
          className="  text-light mt-2 section-bg3"
          style={{ backgroundColor: "#0d233e" }}
        >
          <div className="container">
            <h1>{data.name}</h1>
            <hr />
            <p>
              <input
                type="checkbox"
                value="1"
                onChange={(e) => setHelp(e.target.value)}
              />
              He is Help Full
            </p>
            <p>
              <input
                type="checkbox"
                value="1"
                onChange={(e) => setFriendy(e.target.value)}
              />
              He is Friendly in Nature
            </p>
            <p>
              <input
                type="checkbox"
                value="1"
                onChange={(e) => setPro(e.target.value)}
              />
              He is professional in his Profession
            </p>
            <button className="theme-btn" onClick={sent}>
              submit
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Commend;
