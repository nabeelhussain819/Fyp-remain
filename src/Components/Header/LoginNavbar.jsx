import React, { useState } from "react";
import { FaFingerprint, FaUserPlus } from "react-icons/fa";

function NavBarLogin({ name, ...props }) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top text-white">
                <div className="container">
                    <div className="navbar-wrapper">
                        <a className="navbar-brand" href="/">
                            TS-tryOut
                        </a>
                    </div>
                    <div className="justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a href="/Signup" className="nav-link">
                                    <FaUserPlus /> Register
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a href="/" className="nav-link">
                                    <FaFingerprint /> Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBarLogin;