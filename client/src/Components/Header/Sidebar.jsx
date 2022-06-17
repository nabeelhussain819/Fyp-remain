import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import user from "../../Assets/user.png";

function SideBar() {
  return (
    <>
      {!localStorage.getItem("isAdmin") ? (
        <div className="sidebar-nav sidebar--nav ">
          <div className="sidebar-nav-body cta-area subscriber-area section-bg-2  padding-bottom-100px ">
            <div className="author-content ">
              <div className="d-flex align-items-center ">
                <div className="author-img avatar-sm ">
                  <img src={user} />
                </div>
                <div className="author-bio">
                  <h4 className="author__title ">
                    {localStorage.getItem("data")}
                  </h4>
                  <span className="author__meta">Welcome to Teacher Panel</span>
                </div>
              </div>
            </div>
            <svg
              className="hero-svg "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
            </svg>{" "}
            <div className="sidebar-menu-wrap ">
              <ul className="sidebar-menu toggle-menu list-items ">
                <li>
                  <Link to="dashboard">
                    <i className=" mr-2"></i>Dashboard
                  </Link>
                </li>
                <hr />
                <small className="text-gray">Feature</small>
                <li>
                  <Link to="program">
                    <i className=" mr-2 text-color"></i>
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="department">
                    <i className=" mr-2 text-color-2"></i>Departments
                  </Link>
                </li>
                <li>
                  <Link to="course">
                    <i className=" mr-2 text-color-2"></i>Courses
                  </Link>
                </li>
                <li>
                  <Link to="semester">
                    <i className=" mr-2 text-color-2"></i>Semesters
                  </Link>
                </li>
                <li>
                  <Link to="qec">
                    <i className=" mr-2 text-color-2"></i>QEC Results
                  </Link>
                </li>

                <hr />
                <small className="text-gray">Users</small>
                <li>
                  <Link to="teacher">
                    <i className=" mr-2 text-color-2"></i>Teachers
                  </Link>
                </li>
                <li>
                  <Link to="students">
                    <i className=" mr-2 text-color-2"></i>Students
                  </Link>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-nav sidebar--nav ">
          <div className="sidebar-nav-body  text-dark padding-bottom-40px ">
            <div className="author-content cta-area section-bg-2 ">
              <div className="d-flex align-items-center ">
                <div className="author-img avatar-sm ">
                  <img src={user} />
                </div>
                <div className="author-bio">
                  <h4 className="author__title text-white">
                    {localStorage.getItem("data")}
                  </h4>
                  <span className="author__meta text-white">
                    Welcome to Admin Panel
                  </span>
                </div>
              </div>
            </div>
            <div className="sidebar-menu-wrap main-menu-content">
              <ul className="sidebar-menu toggle-menu list-items ">
                <li>
                  <Link to="dashboard">
                    <i className=" mr-2"></i>Dashboard
                  </Link>
                </li>
                <hr />
                <small className="text-gray">Feature</small>
                <br />
                <li className="pb-2">
                  <Link to="program">
                    <i className=" mr-2 "></i>
                    Programs
                  </Link>
                  <ul className="dropdown-menu-item">
                    <li>
                      <Link to="create-program">Create Programs</Link>
                    </li>
                    <li>
                      <Link to="department">All Programs</Link>
                    </li>
                  </ul>
                </li>
                <li className="pb-2">
                  <Link to="department">
                    <i className=" mr-2 text-color-2"></i>Departments
                  </Link>
                  <ul className="dropdown-menu-item">
                    <li>
                      <Link to="departmentCreate">Create Department</Link>
                    </li>
                    <li>
                      <Link to="department">All Department</Link>
                    </li>
                  </ul>
                </li>
                <li className="pb-2">
                  <Link to="sectionCreate">
                    <i className=" mr-2 text-color-2"></i>Sections
                  </Link>
                  <ul className="dropdown-menu-item">
                    <li>
                      <Link to="sectionCreate">Create Sections</Link>
                    </li>
                    <li>
                      <Link to="department">All Sections</Link>
                    </li>
                  </ul>
                </li>
                <br />
                <li className="pb-2">
                  <Link to="course">
                    <i className=" mr-2 text-color-2"></i>Courses
                  </Link>
                  <ul className="dropdown-menu-item">
                    <li>
                      <Link to="courseCreate">Create Courses</Link>
                    </li>
                    <li>
                      <Link to="department">All Courses</Link>
                    </li>
                  </ul>
                </li>
                <li className="pb-2">
                  <Link to="semester">
                    <i className=" mr-2 text-color-2"></i>Semesters
                  </Link>
                  <ul className="dropdown-menu-item">
                    <li>
                      <Link to="semesterCreate">Create Semesters</Link>
                    </li>
                    <li>
                      <Link to="department">All Semesters</Link>
                    </li>
                  </ul>
                </li>
                <li className="pb-3">
                  <Link to="sessionCreate">
                    <i className=" mr-2 text-color-2"></i>Complains
                  </Link>
                  <ul className="dropdown-menu-item">
                    <li>
                      <Link to="own-department">Teachers Complains</Link>
                    </li>
                    <li>
                      <Link to="department">Students Complains</Link>
                    </li>
                  </ul>
                </li>
                <li className="pb-3">
                  <Link to="sessionCreate">
                    <i className=" mr-2 text-color-2"></i>Comments
                  </Link>
                  <ul className="dropdown-menu-item">
                    <li>
                      <Link to="own-department">Teachers Comments</Link>
                    </li>
                    <li>
                      <Link to="department">Student Comments</Link>
                    </li>
                  </ul>
                </li>
                <li className="pb-2">
                  <Link to="sessionCreate">
                    <i className=" mr-2 text-color-2"></i>Sessions
                  </Link>
                  <ul className="dropdown-menu-item">
                    <li>
                      <Link to="sessionCreate">Create Sessions</Link>
                    </li>
                    <li>
                      <Link to="department">All Sessions</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="qec">
                    <i className=" mr-2 text-color-2"></i>QEC Results
                  </Link>
                </li>

                <hr />
                <small className="text-gray">Users</small>
                <br />
                <li>
                  <Link to="teacher">
                    <i className=" mr-2 text-color-2"></i>Teachers
                  </Link>
                </li>
                <br />
                <li>
                  <Link to="students">
                    <i className=" mr-2 text-color-2"></i>Students
                  </Link>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
