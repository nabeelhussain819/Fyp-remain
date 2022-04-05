import React from "react";
import { FaSearch, FaThLarge, FaUserAlt } from "react-icons/fa";
import Offcanvas from "./Offcanvas";
import { Link } from "react-router-dom";
import user from "../../Assets/user.png";
import Example from "../Loader";

function Navbar() {
  return (
    <>
      <div className="main-panel">
        <nav className="navbar navbar-expand-md navbar-transparent navbar-absolute fixed-top ">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <Link to="dashboard" >
                <a className="navbar-brand text-white" href="">
                  <FaThLarge /> Dashboard
                </a>
              </Link>
            </div>
            <button className="navbar-toggler">
              <Offcanvas />
            </button>
            <div className="collapse navbar-collapse justify-content-end">

              <ul className="navbar-nav">
                <Link to="profile" >
                  <li className="nav-item ">
                    <a className="nav-link text-white" href="">
                      <div className="user">
                        <img src={user} className="photo" />
                        Profile
                      </div>

                    </a>
                  </li>
                </Link>

                <li className="nav-item dropdown">
                  <Example />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
