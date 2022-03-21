import React from "react";
import {
  FaUser,
  FaListOl,
  FaThLarge,
  FaBook,
  FaCalendarCheck,
  FaUserTie,
  FaUserGraduate,
  FaTasks,
  FaArchway,
} from "react-icons/fa";
import { Accordion } from "react-bootstrap";

function SideBar() {
  return (
    <>
      <div className="sidebar " data-color="rose" data-background-color="white">
        <div className="logo">
          <a href="/" className="simple-text logo-mini">
            TSE
          </a>
          <a href="/" className="simple-text logo-normal">
            Evaluate NOW!
          </a>
        </div>
        <div className="sidebar-wrapper ">
          <ul className="nav">
            <li className="nav-item ">
              <a className="nav-link" href="/">
                <i className="material-icons">
                  <FaThLarge />
                </i>
                <p> DASHBOARD</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/ReadProgram">
                <i className="material-icons">
                  <FaListOl />
                </i>
                <p> PROGRAMS</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/ReadCourse">
                <i className="material-icons">
                  <FaBook />
                </i>
                <p> COURSES</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/ReadDept">
                <i className="material-icons">
                  <FaArchway />
                </i>
                <p> DEPARTMENTS</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/ReadSemes">
                <i className="material-icons">
                  <FaTasks />
                </i>
                <p> SEMESTERS</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#0">
                <i className="material-icons">
                  <FaCalendarCheck />
                </i>
                <p> QEC RESULTS</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#0">
                <i className="material-icons">
                  <FaUserTie />
                </i>
                <p> TEACHERS</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#0">
                <i className="material-icons">
                  <FaUserGraduate />
                </i>
                <p> STUDENTS</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
