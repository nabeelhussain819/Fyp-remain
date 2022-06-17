import React from "react";

const NavigationBar = () => {
  return (
    <div
      className="single-content-navbar-wrap menu "
      id="single-content-navbar"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="single-content-nav" id="single-content-nav">
              <ul>
                <li>
                  <a
                    data-scroll="description"
                    href="#description"
                    className="scroll-link active"
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a
                    data-scroll="itinerary"
                    href="#itinerary"
                    className="scroll-link"
                  >
                    Itinerary
                  </a>
                </li>
                <li>
                  <a data-scroll="photo" href="#photo" className="scroll-link">
                    Photo
                  </a>
                </li>
                <li>
                  <a data-scroll="faq" href="#faq" className="scroll-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    data-scroll="location-map"
                    href="#location-map"
                    className="scroll-link"
                  >
                    Map
                  </a>
                </li>
                <li>
                  <a
                    data-scroll="reviews"
                    href="#reviews"
                    className="scroll-link"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
