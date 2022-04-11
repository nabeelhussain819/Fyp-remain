import React from "react";

const Footer = () => {
  return (
    <section class="footer-area section-bg-2 padding-top-100px padding-bottom-30px">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 responsive-column">
            <div class="footer-item">
              <div class="footer-logo padding-bottom-30px">
                <a href="index.html" class="foot__logo"></a>
              </div>
              <p class="footer__desc">
                Morbi convallis bibendum urna ut viverra. Maecenas consequat
              </p>
              <ul class="list-items pt-3">
                <li>3015 Grand Ave, Coconut Grove,Cerrick Way, FL 12345</li>
                <li>+123-456-789</li>
                <li>
                  <a href="#">trizen@yourwebsite.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 responsive-column">
            <div class="footer-item">
              <h4
                class="title curve-shape pb-3 margin-bottom-20px"
                data-text="curvs"
              >
                Company
              </h4>
              <ul class="list-items list--items">
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="blog-grid.html">News</a>
                </li>
                <li>
                  <a href="contact.html">Support</a>
                </li>
                <li>
                  <a href="#">Advertising</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 responsive-column">
            <div class="footer-item">
              <h4
                class="title curve-shape pb-3 margin-bottom-20px"
                data-text="curvs"
              >
                Other Services
              </h4>
              <ul class="list-items list--items">
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Trizen.com Rewards</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">List My Hotel</a>
                </li>
                <li>
                  <a href="#">All Hotels</a>
                </li>
                <li>
                  <a href="#">TV Ads</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 responsive-column">
            <div class="footer-item">
              <h4
                class="title curve-shape pb-3 margin-bottom-20px"
                data-text="curvs"
              >
                Other Links
              </h4>
              <ul class="list-items list--items">
                <li>
                  <a href="#">USA Vacation Packages</a>
                </li>
                <li>
                  <a href="#">USA Flights</a>
                </li>
                <li>
                  <a href="#">USA Hotels</a>
                </li>
                <li>
                  <a href="#">USA Car Hire</a>
                </li>
                <li>
                  <a href="#">Create an Account</a>
                </li>
                <li>
                  <a href="#">Trizen Reviews</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="term-box footer-item">
              <ul class="list-items list--items d-flex align-items-center">
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="footer-social-box text-right">
              <ul class="social-profile">
                <li>
                  <a href="#">
                    <i class="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="lab la-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="section-block mt-4"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="copy-right padding-top-30px">
              <p class="copy__desc">
                © Copyright Trizen 2020. Made with
                <span class="la la-heart"></span> by{" "}
                <a href="https://themeforest.net/user/techydevs/portfolio">
                  TechyDevs
                </a>
              </p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="copy-right-content d-flex align-items-center justify-content-end padding-top-30px">
              <h3 class="title font-size-15 pr-2">We Accept</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;