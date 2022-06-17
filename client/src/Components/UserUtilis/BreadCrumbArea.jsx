import React from "react";
import { FcInternal } from "react-icons/fc";

const BreadCrumbArea = () => {
  return (
    <section class="breadcrumb-area hero-bg-3">
      <div class="breadcrumb-wrap">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-content text-center">
                <div class="section-heading">
                  <h2 class="sec__title text-white">
                    Discover Trizen's Luxury Living
                  </h2>
                  <span class="arrow-blink">
                    <i class="la">
                      {" "}
                      <FcInternal size={32} />
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bread-svg-box">
        <svg
          class="bread-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
        </svg>
      </div>
    </section>
  );
};

export default BreadCrumbArea;
