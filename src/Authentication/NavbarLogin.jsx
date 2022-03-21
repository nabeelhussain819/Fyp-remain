import React, { useState } from "react";
import { FaFingerprint, FaUserPlus } from "react-icons/fa";

function NavBarLogin({ name, ...props }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top text-white">
        <div class="container">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="/">
              TS-tryOut
            </a>
          </div>
          <div class="justify-content-end">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a href="/Signup" class="nav-link">
                  <FaUserPlus /> Register
                </a>
              </li>
              <li class="nav-item ">
                <a href="/" class="nav-link">
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
