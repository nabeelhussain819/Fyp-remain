import React from "react";
import { FaSearch, FaThLarge, FaUserAlt } from "react-icons/fa";
import Offcanvas from "./Offcanvas";
import Example from "../Loader";

function Navbar() {
    return (
        <>
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <a className="navbar-brand" href="dashboard"><FaThLarge /> Dashboard</a>
                        </div>
                        <button className="navbar-toggler">
                            <Offcanvas />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                            <form className="navbar-form">
                                <div className="input-group no-border">
                                    <input type="text" value="" className="form-control" placeholder="Search..." />
                                    <a className="nav-link" href="/">
                                        <i className="material-icons"><FaSearch /></i></a>
                                </div>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <a className="nav-link" href="/">
                                        <i className="material-icons"><FaUserAlt /> </i>Profile
                                    </a>
                                </li>
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