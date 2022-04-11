import React from "react";
import { Link } from "react-router-dom";
import bg from "../../Assets/client-logo3.png";
import user from "../../Assets/user.png";
import Example from "../Loader";

function UserNavbar({ name, ...props }) {
  return (
    <>
      <header class="header-area fixed-nav ">
        <div class="header-menu-wrapper  padding-right-100px padding-left-100px ">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="menu-wrapper">
                  <div class="logo">
                    <Link to="dashboard">
                      <img src={bg} alt="logo" />
                    </Link>
                    <div class="menu-toggler">
                      <i class="la la-bars"></i>
                      <i class="la la-times"></i>
                    </div>
                  </div>
                  <div class="main-menu-content">
                    <nav>
                      <ul>
                        <li>
                          <Link to="dashboard">Home</Link>
                        </li>
                        <li>
                          <Link to="department">Department</Link>
                        </li>
                        <li>
                          <Link to="program">Program</Link>
                        </li>
                        <li>
                          <Link to="course">Courses</Link>
                        </li>
                        <li>
                          <Link to="semester">Semesters</Link>
                        </li>
                        <li>
                          <Link to="teacher">Teacher</Link>
                        </li>
                        <li>
                          <Link to="profile">
                            <img src={user} alt="" />
                            {localStorage.getItem("data")}'s profile
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="nav-btn theme-btn">
                    <Example />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default UserNavbar;
