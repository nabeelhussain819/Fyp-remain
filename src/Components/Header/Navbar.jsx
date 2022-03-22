import React from "react";
import { FaUser } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import Offcanvas from "./Offcanvas";
import Example from "../Loader";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <a className="navbar-brand" href="/">
                            Dashboard
                        </a>
                    </div>
                    <button className="navbar-toggler">
                        <Offcanvas />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="success"
                                        id="dropdown-basic"
                                        style={{ backgroundColor: "transparent" }}
                                    >
                                        <FaUser style={{ color: "black" }} size={20} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span>
                                                {" "}
                                                <Example />
                                            </span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;