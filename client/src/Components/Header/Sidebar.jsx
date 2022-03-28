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
import user from "../../Assets/user.png";
function SideBar() {
  return (
    <>
      <div
        className="sidebar "
        data-color="green"
        data-background-color="white"
      >
        <div className="logo">
          {/* <a href="/" className="simple-text logo-mini">
            TSE
          </a>
          <a href="/" className="simple-text logo-normal">
            Evaluate NOW!
          </a> */}
        </div>

        <div className="sidebar-wrapper ">
          <div className="user">
            <div className="photo">
              <img src={user} />
            </div>
            <div className="user-info">
              <a href="profile" className="username">
                Tania Andrew
              </a>
            </div>
          </div>

          <ul className="nav">
            <p style={{ marginLeft: "30px" }} className="m-4 text-gray">
              Main{" "}
            </p>
            <li className="nav-item ">
              <a className="nav-link" href="dashboard">
                <i className="material-icons">
                  <FaThLarge />
                </i>
                <p> DASHBOARD</p>
              </a>
            </li>{" "}
            <hr />
            <p style={{ marginLeft: "30px" }} className="m-4 text-gray">
              Features{" "}
            </p>
            <li className="nav-item ">
              <a className="nav-link" href="program">
                <i className="material-icons">
                  <FaListOl />
                </i>
                <p> PROGRAMS</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="course">
                <i className="material-icons">
                  <FaBook />
                </i>
                <p> COURSES</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="department">
                <i className="material-icons">
                  <FaArchway />
                </i>
                <p> DEPARTMENTS</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="semester">
                <i className="material-icons">
                  <FaTasks />
                </i>
                <p> SEMESTERS</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="rating">
                <i className="material-icons">
                  <FaCalendarCheck />
                </i>
                <p> QEC RESULTS</p>
              </a>
            </li>
            <hr />
            <p style={{ marginLeft: "30px" }} className="m-4 text-gray">
              Users{" "}
            </p>
            <li className="nav-item ">
              <a className="nav-link" href="teacher">
                <i className="material-icons">
                  <FaUserTie />
                </i>
                <p> TEACHERS</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="user">
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
