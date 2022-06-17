import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ComplainBox = ({ data }) => {
  const [complain, setComplain] = useState("");
  const [studentId, setUserId] = useState(localStorage.getItem("id"));
  const [departmentId, setDeptId] = useState(data._id);

  const ComplainDept = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/depart-complain", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        complain,
        studentId,
        departmentId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning(data.error);
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Complain Submited!");
    }
  };
  return (
    <div>
      <div className="sidebar-widget single-content-widget">
        <h3 className=" stroke-shape">Complain Box</h3>
        <div className="enquiry-forum">
          <div className="form-box">
            <div className="form-content">
              <div className="contact-form-action">
                <form method="post">
                  <div className="input-box">
                    <div className="form-group label-float">
                      <input
                        type="text"
                        name="text"
                        value={localStorage.getItem("data")}
                      />
                      <label>Your Name</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <div className="form-group label-float">
                      <input
                        type="email"
                        name="email"
                        value={localStorage.getItem("email")}
                      />{" "}
                      <label>Your Email</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <label className="label-text">Complain </label>
                    <div className="form-group">
                      <span className="la la-pencil form-icon"></span>
                      <textarea
                        className="message-control form-control"
                        name="message"
                        placeholder="Write message"
                        value={complain}
                        onChange={(e) => setComplain(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="btn-box">
                    <button
                      type="button"
                      className="theme-btn"
                      onClick={ComplainDept}
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainBox;
