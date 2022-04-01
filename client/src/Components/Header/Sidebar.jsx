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
import { Link } from "react-router-dom";
import user from "../../Assets/user.png";
function SideBar() {
  return (
    <>
      <div
        className="sidebar "
        data-color="green"
        data-background-color="white"
      >
        <div className="logo"></div>

        <div className="sidebar-wrapper ">
          <div className="user">
            <div className="photo">
              <img src={user} />
            </div>
            <div className="user-info">
              <a href="" className="username">
                <Link to="profile"> Tania Andrew</Link>
              </a>
            </div>
          </div>

          <ul className="nav">
            <p style={{ marginLeft: "30px" }} className="m-4 text-gray">
              Main
            </p>
            <Link to="dashboard">
              <li className="nav-item mb-4">
                <a className="nav-link" href="">
                  <i className="material-icons">
                    <FaThLarge />
                  </i>
                  <p> DASHBOARD</p>
                </a>
              </li>
            </Link>
            <hr />
            <p style={{ marginLeft: "30px" }} className="m-4 text-gray">
              Feature
            </p>
            <Link to="program">
              <li className="nav-item mb-3">
                <a className="nav-link" href="">
                  <i className="material-icons">
                    <FaListOl />
                  </i>
                  <p> PROGRAMS</p>
                </a>
              </li>
            </Link>
            <Link to="course">
              <li className="nav-item mb-3">
                <a className="nav-link" href="">
                  <i className="material-icons">
                    <FaBook />
                  </i>
                  <p> COURSES</p>
                </a>
              </li>
            </Link>
            <Link to="department">
              <li className="nav-item mb-3">
                <a className="nav-link" href="">
                  <i className="material-icons">
                    <FaArchway />
                  </i>
                  <p> DEPARTMENTS</p>
                </a>
              </li>
            </Link>
            <Link to="sessionCreate">
              <li className="nav-item mb-3">
                <a className="nav-link" href="">
                  <i className="material-icons">
                    <FaArchway />
                  </i>
                  <p> Sessions</p>
                </a>
              </li>
            </Link>
            <Link to="semester">
              <li className="nav-item mb-3">
                <a className="nav-link" href="">
                  <i className="material-icons">
                    <FaTasks />
                  </i>
                  <p> SEMESTERS</p>
                </a>
              </li>
            </Link>
            <Link to="rating">
              <li className="nav-item mb-3">
                <a className="nav-link" href="">
                  <i className="material-icons">
                    <FaCalendarCheck />
                  </i>
                  <p> QEC RESULTS</p>
                </a>
              </li>
            </Link>
            <hr />
            <p style={{ marginLeft: "30px" }} className="m-4 text-gray">
              Users
            </p>
            <Link to="teacher">
              <li className="nav-item mb-3">
                <a className="nav-link" href="">
                  <i className="material-icons">
                    <FaUserTie />
                  </i>
                  <p> TEACHERS</p>
                </a>
              </li>
            </Link>
            <Link to="user">
              <li className="nav-item mb-3 ">
                <a className="nav-link" href="">
                  <i className="material-icons">
                    <FaUserGraduate />
                  </i>
                  <p> STUDENTS</p>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
