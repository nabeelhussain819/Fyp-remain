import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../../Assets/client-logo3.png";
import user from "../../Assets/user.png";
import Example from "../Loader";
import LoginModal from "../Authentication/login";
import RegisterModal from "../Authentication/Register";
import { HiX, HiOutlineMenu } from "react-icons/hi";
import { Accordion } from "react-bootstrap";
export default function UserNavbar({ name, ...props }) {
  const [show, setShow] = useState(false);
  function showCan() {
    setShow(true);
  }
  function hideCan() {
    setShow(false);
  }
  let token = localStorage.getItem("list");
  return (
    <>
      {!token ? (
        <>
          <div className="header-top-bar  padding-right-100px padding-left-100px ">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="header-top-content">
                    <div className="header-left">
                      <ul className="list-items">
                        <li>
                          <a href="#">
                            <i className="la la-phone mr-1"></i>Sindh
                            Madressatul Islaam University
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="la la-envelope mr-1"></i>Teacher And
                            Student Evaluation Portal
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header-top-content">
                    <div className="header-right d-flex align-items-center justify-content-end">
                      <div className="header-right-action">
                        <button className="theme-btn theme-btn-small theme-btn-transparent mr-2">
                          <RegisterModal />
                        </button>
                        <button className="theme-btn theme-btn-small ">
                          <LoginModal />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="header-area sticky-top ">
            <div className="header-menu-wrapper padding-right-100px padding-left-100px ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu-wrapper">
                      <div className="logo">
                        <Link to="dashboard">
                          <img src={bg} alt="logo" />
                        </Link>

                        <div className="menu-toggler">
                          <button
                            onClick={showCan}
                            className="border-0 bgb-transparent"
                          >
                            <HiOutlineMenu />
                          </button>
                        </div>
                      </div>
                      <div className="main-menu-content">
                        <nav>
                          <ul>
                            <li>
                              <Link to="/" className="text-white">
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link className="text-white" to="department">
                                Department
                              </Link>
                            </li>
                            <li>
                              <Link className="text-white" to="program">
                                Program
                              </Link>
                            </li>
                            <li>
                              <Link className="text-white" to="course">
                                Courses
                              </Link>
                            </li>
                            <li>
                              <Link className="text-white" to="teacher">
                                Teacher
                              </Link>
                            </li>
                            <li>
                              <Link className="text-white" to="faq">
                                FAQ
                              </Link>
                            </li>
                            <li>
                              <Link className="text-white" to="gallery">
                                Gallery
                              </Link>
                            </li>
                            {token ? (
                              <li>
                                <Link to="/profile">
                                  <img src={user} alt="" />
                                  {localStorage.getItem("data")}'s profile
                                </Link>
                              </li>
                            ) : null}
                          </ul>
                        </nav>
                      </div>
                      {token ? (
                        <div className="nav-btn">
                          <Example />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      ) : (
        <>
          <header className="header-area  sticky-top ">
            <div className="header-menu-wrapper padding-right-100px padding-left-100px ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu-wrapper">
                      <div className="logo">
                        <Link to="dashboard">
                          <img src={bg} alt="logo" />
                        </Link>

                        <div className="menu-toggler">
                          <button
                            onClick={showCan}
                            className="border-0 bg-transparent"
                          >
                            <HiOutlineMenu />
                          </button>
                        </div>
                      </div>
                      <div className="main-menu-content pb-1">
                        <nav>
                          <ul>
                            <li>
                              <Link className="text-white" to="/">
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link className="text-white" to="department">
                                Department
                              </Link>
                              <ul className="dropdown-menu-item">
                                <li>
                                  <Link to="own-department">
                                    Your Department
                                  </Link>
                                </li>
                                <li>
                                  <Link to="department">All Department</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link className="text-white" to="program">
                                Program
                              </Link>
                              <ul className="dropdown-menu-item">
                                <li>
                                  <Link to="own-program">Your Program</Link>
                                </li>
                                <li>
                                  <Link to="program">All Programs</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link className="text-white" to="course">
                                Courses
                              </Link>
                              <ul className="dropdown-menu-item">
                                <li>
                                  <Link to="own-course">Your Courses</Link>
                                </li>
                                <li>
                                  <Link to="own-semester">
                                    Courses - semesters
                                  </Link>
                                </li>
                                <li>
                                  <Link to="course">All Courses</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link className="text-white" to="teacher">
                                Teachers
                              </Link>
                            </li>
                            <li>
                              <Link className="text-white" to="qec">
                                Qec
                              </Link>
                            </li>
                            <li>
                              <Link className="text-white" to="/Complains">
                                Complains
                              </Link>
                              <ul className="dropdown-menu-item">
                                <li>
                                  <Link to="own-complains">Your Complains</Link>
                                </li>
                                <li>
                                  <Link to="Complains">All Complains</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link className="text-white" to="/Comments">
                                Comments
                              </Link>
                              <ul className="dropdown-menu-item">
                                <li>
                                  <Link to="own-comments">Your Comments</Link>
                                </li>
                                <li>
                                  <Link to="Comments">All Comments</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link className="text-white" to="profile">
                                <img src={user} alt="" />
                                {localStorage.getItem("data")}'s profile
                              </Link>
                              <ul className="dropdown-menu-item mt-2">
                                <li>
                                  <Link to="profile">profile</Link>
                                </li>
                                <li>
                                  <Link to="dashboard">Dashboard</Link>
                                </li>
                                <li className="bg-info">
                                  <div className="ml-4 ">
                                    <Example />
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      )}
      {show && (
        <header className="header-area fixed-nav hello">
          <div className="header-menu-wrapper padding-right-100px padding-left-100px ">
            <div className="">
              <div className="row">
                <div className="col-lg-12">
                  <div className="">
                    <div className="logo">
                      <Link to="dashboard">
                        <img src={bg} alt="logo" />
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
                                <Link to="/">Home</Link>
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
                                <Link to="dashboard">Dashboard</Link>
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
                            {token ? (
                              <>
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
                              </>
                            ) : null}
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
