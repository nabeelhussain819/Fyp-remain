import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../Assets/user.png";
import logo from "../../Assets/logo.png";
import Example from "../Loader";
import { HiX, HiOutlineMenu } from "react-icons/hi";
function Navbar() {
  const [show, setShow] = useState(false);
  function showCan() {
    setShow(true);
  }
  function hideCan() {
    setShow(false);
  }
  return (
    <>
      <div className="dashboard-nav dashboard--nav sticky-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="menu-wrapper">
                <div className="logo mr-5">
                  <Link to="dashboard">
                    <img src={logo} alt="" />
                  </Link>
                  <div className="menu-toggler">
                    <button
                      onClick={showCan}
                      className="border-0 bgb-transparent"
                    >
                      <HiOutlineMenu />
                    </button>
                  </div>
                  <div className="user-menu-open">
                    <i className="la la-user"></i>
                  </div>
                </div>
                <div className="nav-btn ml-auto">
                  <div className="notification-wrap d-flex align-items-center">
                    <div className="notification-item">
                      <div className="dropdown">
                        <Link to="profile">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm flex-shrink-0 mr-2">
                              <img src={user} alt="" />
                            </div>
                            <span className="font-size-14 font-weight-bold">
                              {localStorage.getItem("data")}
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="notification-item">
                      <div className="dropdown">
                        <div className="d-flex align-items-center ml-3">
                          <span className="font-size-14 font-weight-bold">
                            <Example />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <header className="header-area fixed-nav hello">
          <div className="header-menu-wrapper padding-right-100px padding-left-100px padding-top-20px">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="">
                    <div className="logo">
                      <Link to="dashboard">
                        <img src={logo} alt="logo" />
                      </Link>
                      <div className="menu-toggler">
                        <button
                          onClick={hideCan}
                          className=" border-0 bg-transparent"
                        >
                          <HiX size={22} />
                        </button>
                      </div>
                    </div>
                    <div className="">
                      <nav>
                        <table className="table border-0">
                          <tbody>
                            <tr>
                              <td>
                                <Link to="dashboard">Home</Link>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="teacher">Teacher</Link>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="semester">Semesters</Link>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="course">Courses</Link>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="program">Program</Link>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="department">Department</Link>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="qec">Qec</Link>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="profile">
                                  <img src={user} alt="" />
                                  {localStorage.getItem("data")}'s profile
                                </Link>
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <Example />
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Navbar;
