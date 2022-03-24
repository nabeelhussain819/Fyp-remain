import React from "react";
import { FaSearch, FaThLarge, FaUserAlt } from "react-icons/fa";
import Offcanvas from "./Offcanvas";
import Example from "../Loader";

function Navbar() {
    return (
        <>
            <div class="main-panel">
                <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <a class="navbar-brand" href="javascript:;"><FaThLarge /> Dashboard</a>
                        </div>
                        <button className="navbar-toggler">
                            <Offcanvas />
                        </button>
                        <div class="collapse navbar-collapse justify-content-end">
                            <form class="navbar-form">
                                <div class="input-group no-border">
                                    <input type="text" value="" class="form-control" placeholder="Search..." />
                                    <a class="nav-link" href="/">
                                        <i class="material-icons"><FaSearch /></i></a>
                                </div>
                            </form>
                            <ul class="navbar-nav">
                                <li class="nav-item ">
                                    <a class="nav-link" href="/">
                                        <i class="material-icons"><FaUserAlt /> </i>Profile
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
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