import React from "react";
import {
  FcDepartment,
  FcDatabase,
  FcContacts,
  FcBusinessman,
} from "react-icons/fc";
import { Link } from "react-router-dom";
import user from "../../Assets/user.png";
import Example from "../Loader";

function SideBar() {
  return (
    <>
      <div className="sidebar-nav sidebar--nav ">
        <div className="sidebar-nav-body cta-area subscriber-area section-bg-2 text-white pb-4 ">
          <div className="author-content ">
            <div className="d-flex align-items-center ">
              <div className="author-img avatar-sm ">
                <img src={user} />
              </div>
              <div className="author-bio">
                <h4 className="author__title text-white">
                  {localStorage.getItem("data")}
                </h4>
                <span className="author__meta">Welcome to Admin Panel</span>
              </div>
            </div>
          </div>
          <svg
            class="hero-svg"
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
                  <i className="la la-dashboard mr-2"></i>Dashboard
                </Link>
              </li>
              <hr />
              <small className="text-gray">Feature</small>
              <li>
                <Link to="program">
                  <i className="la la-shopping-cart mr-2 text-color"></i>Program
                </Link>
              </li>
              <li>
                <span className="side-menu-icon toggle-menu-icon">
                  <i className="la la-angle-down"></i>
                </span>
                <Link to="department">
                  <i className="la la-list mr-2 text-color-2"></i>Department
                </Link>
              </li>
              <li>
                <span className="side-menu-icon toggle-menu-icon">
                  <i className="la la-angle-down"></i>
                </span>
                <Link to="course">
                  <i className="la la-list mr-2 text-color-2"></i>Courses
                </Link>
              </li>
              <li>
                <span className="side-menu-icon toggle-menu-icon">
                  <i className="la la-angle-down"></i>
                </span>
                <Link to="semester">
                  <i className="la la-list mr-2 text-color-2"></i>Semesters
                </Link>
              </li>
              {localStorage.getItem("isAdmin") && (
                <li>
                  <span className="side-menu-icon toggle-menu-icon">
                    <i className="la la-angle-down"></i>
                  </span>
                  <Link to="sessionCreate">
                    <i className="la la-list mr-2 text-color-2"></i>Sessions
                  </Link>
                </li>
              )}
              <li>
                <span className="side-menu-icon toggle-menu-icon">
                  <i className="la la-angle-down"></i>
                </span>
                <Link to="qec">
                  <i className="la la-list mr-2 text-color-2"></i>QEC Results
                </Link>
              </li>
              <hr />
              <small className="text-gray">Users</small>
              <li>
                <span className="side-menu-icon toggle-menu-icon">
                  <i className="la la-angle-down"></i>
                </span>
                <Link to="teacher">
                  <i className="la la-list mr-2 text-color-2"></i>Teachers
                </Link>
              </li>
              <li>
                <span className="side-menu-icon toggle-menu-icon">
                  <i className="la la-angle-down"></i>
                </span>
                <Link to="students">
                  <i className="la la-list mr-2 text-color-2"></i>Students
                </Link>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
