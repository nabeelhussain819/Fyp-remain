import React from "react";
import LoginModal from "../Authentication/login";
import RegisterModal from "../Authentication/Register";
import bg from "../../Assets/client-logo3.png";

function NavBarLogin({ name, ...props }) {
  return (
    <>
      <header className="header-area ">
        <div className="header-top-bar padding-right-100px padding-left-100px">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="header-top-content">
                  <div className="header-left">
                    <ul className="list-items">
                      <li>
                        <i className="la la-phone mr-1"></i>Teacher And Student
                        Evaluation System
                      </li>
                      <li>
                        <i className="la la-envelope mr-1"></i>
                        hnabeel570@gmail.com
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
                      <button className="theme-btn theme-btn-small">
                        <LoginModal />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-menu-wrapper  padding-right-100px padding-left-100px ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="menu-wrapper">
                  <a href="#" className="down-button">
                    <i className="la la-angle-down"></i>
                  </a>
                  <div className="logo">
                    <a href="index.html">
                      <img src={bg} alt="" />{" "}
                    </a>
                    <div className="menu-toggler">
                      <i className="la la-bars"></i>
                      <i className="la la-times"></i>
                    </div>
                  </div>
                  <div className="main-menu-content">
                    <nav>
                      <ul>
                        <li>
                          <a href="#"></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="nav-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBarLogin;
