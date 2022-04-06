import React, { useState } from "react";
import { FaFingerprint, FaUserPlus } from "react-icons/fa";
import LoginModal from "../Authentication/login";
import RegisterModal from "../Authentication/Register";

function NavBarLogin({ name, ...props }) {
  return (
    <>
      <header class="header-area">
        <div class="header-menu-wrapper padding-right-100px padding-left-100px">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="menu-wrapper">
                  <a href="#" class="down-button">
                    <i class="la la-angle-down"></i>
                  </a>
                  <div class="logo">
                    <a href="index.html"></a>
                    <div class="menu-toggler">
                      <i class="la la-bars"></i>
                      <i class="la la-times"></i>
                    </div>
                  </div>
                  <div class="main-menu-content">
                    <nav>
                      <ul>
                        <li>
                          <a href="#">Teacher And Student Evaluation System</a>
                        </li>
                        <li>
                          <a href="#">hnabeel570@gmail.com</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="nav-btn">
                    <button class="theme-btn theme-btn-small theme-btn-transparent">
                      <RegisterModal />
                    </button>
                    <button class="theme-btn theme-btn-small">
                      <LoginModal />
                    </button>
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

export default NavBarLogin;
