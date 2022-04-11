import React from "react";

const NavigationBar = () => {
  return (
    <div class="single-content-navbar-wrap menu " id="single-content-navbar">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="single-content-nav" id="single-content-nav">
              <ul>
                <li>
                  <a
                    data-scroll="description"
                    href="#description"
                    class="scroll-link active"
                  >
                    Description
                  </a>
                </li>
                <li>
                  <a
                    data-scroll="itinerary"
                    href="#itinerary"
                    class="scroll-link"
                  >
                    Itinerary
                  </a>
                </li>
                <li>
                  <a data-scroll="photo" href="#photo" class="scroll-link">
                    Photo
                  </a>
                </li>
                <li>
                  <a data-scroll="faq" href="#faq" class="scroll-link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    data-scroll="location-map"
                    href="#location-map"
                    class="scroll-link"
                  >
                    Map
                  </a>
                </li>
                <li>
                  <a data-scroll="reviews" href="#reviews" class="scroll-link">
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
