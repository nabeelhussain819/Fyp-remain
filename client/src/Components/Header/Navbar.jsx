import React from "react";
import Offcanvas from "./Offcanvas";
import { Link } from "react-router-dom";
import user from "../../Assets/user.png";
import logo from "../../Assets/logo2.png";
import Example from "../Loader";

function Navbar() {
  return (
    <>
      <div className="dashboard-nav dashboard--nav cta-area section-bg-2 subscriber-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="menu-wrapper">
                <div className="logo mr-5">
                  <Link to="dashboard">
                    <img src={logo} alt="" />
                  </Link>
                  <div class="menu-toggler">
                    <Offcanvas />
                  </div>
                  <div class="user-menu-open">
                    <i class="la la-user"></i>
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
    </>
  );
}

export default Navbar;
