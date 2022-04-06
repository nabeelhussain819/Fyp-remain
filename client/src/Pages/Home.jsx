import React from "react";
import NavBarLogin from "../Components/Header/LoginNavbar";
import bg from "../Assets/bg2.jpg";
import dimg from "../Assets/dimg.jpg";
import dimg2 from "../Assets/dimg2.jpg";

const Home = () => {
  return (
    <>
      <NavBarLogin />
      <section class="hero-wrapper  hero-wrapper3">
        <div class="hero-box hero-bg-3 bg-fixed">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 mx-auto responsive--column-l">
                <div class="search-fields-container search-fields-container-shape">
                  <div class="search-fields-container-inner">
                    <div class="contact-form-action">
                      <form action="#" class="row">
                        <div class="col-lg-4 pr-0">
                          <div class="input-box">
                            <label class="label-text">Destination</label>
                            <div class="form-group">
                              <span class="la la-map-marker form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                placeholder="Where are you going?"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 pr-0">
                          <div class="input-box">
                            <label class="label-text">From</label>
                            <div class="form-group">
                              <span class="la la-calendar form-icon"></span>
                              <input
                                class="date-range form-control"
                                type="text"
                                name="daterange-single"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="input-box">
                            <label class="label-text">To</label>
                            <div class="form-group">
                              <span class="la la-calendar form-icon"></span>
                              <input
                                class="date-range form-control"
                                type="text"
                                name="daterange-single"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="btn-box pt-3">
                      <a href="activity-search-result.html" class="theme-btn">
                        Search Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            class="hero-svg"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
            <section class="cta-area cta-bg bg-fixed section-padding text-center">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="section-heading">
                      <h2 class="sec__title text-white font-size-50 line-height-60">
                        Relax with us.We love Our Clients.
                      </h2>
                      <p class="sec__desc text-white pt-3">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      </p>
                    </div>
                    <div class="btn-box padding-top-35px">
                      <a
                        href="become-local-expert.html"
                        class="theme-btn border-0"
                      >
                        Become Local Expert
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </svg>
        </div>
      </section>
      <section class="destination-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="section-heading">
                <h2 class="sec__title">Popular Destinations</h2>
                <p class="sec__desc pt-3">
                  Morbi convallis bibendum urna ut viverra Maecenas quis{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="btn-box btn--box text-right">
                <a href="tour-grid.html" class="theme-btn">
                  Discover More <i class="la la-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row padding-top-50px">
            <div class="col-lg-4 responsive-column">
              <div class="card-item destination-card destination--card">
                <div class="card-img">
                  <img src={bg} alt="destination-img" />
                </div>
                <div class="card-body d-flex align-items-center justify-content-between">
                  <div>
                    <h3 class="card-title">
                      <a href="tour-details.html">New York</a>
                    </h3>
                    <p class="card-meta">34 Activities</p>
                  </div>
                  <div>
                    <a
                      href="tour-details.html"
                      class="theme-btn theme-btn-small border-0"
                    >
                      Explore <i class="la la-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 responsive-column">
              <div class="card-item destination-card destination--card">
                <div class="card-img">
                  <img src={bg} alt="destination-img" />
                </div>
                <div class="card-body d-flex align-items-center justify-content-between">
                  <div>
                    <h3 class="card-title">
                      <a href="tour-details.html">Chicago</a>
                    </h3>
                    <p class="card-meta">13 Activities</p>
                  </div>
                  <div>
                    <a
                      href="tour-details.html"
                      class="theme-btn theme-btn-small border-0"
                    >
                      Explore <i class="la la-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 responsive-column">
              <div class="card-item destination-card destination--card">
                <div class="card-img">
                  <img src={bg} alt="destination-img" />
                </div>
                <div class="card-body d-flex align-items-center justify-content-between">
                  <div>
                    <h3 class="card-title">
                      <a href="tour-details.html">Hong Kong</a>
                    </h3>
                    <p class="card-meta">44 Activities</p>
                  </div>
                  <div>
                    <a
                      href="tour-details.html"
                      class="theme-btn theme-btn-small border-0"
                    >
                      Explore <i class="la la-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 responsive-column">
              <div class="card-item destination-card destination--card">
                <div class="card-img">
                  <img src={bg} alt="destination-img" />
                </div>
                <div class="card-body d-flex align-items-center justify-content-between">
                  <div>
                    <h3 class="card-title">
                      <a href="tour-details.html">Las Vegas</a>
                    </h3>
                    <p class="card-meta">22 Activities</p>
                  </div>
                  <div>
                    <a
                      href="tour-details.html"
                      class="theme-btn theme-btn-small border-0"
                    >
                      Explore <i class="la la-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 responsive-column">
              <div class="card-item destination-card destination--card">
                <div class="card-img">
                  <img src={bg} alt="destination-img" />
                </div>
                <div class="card-body d-flex align-items-center justify-content-between">
                  <div>
                    <h3 class="card-title">
                      <a href="tour-details.html">Miami</a>
                    </h3>
                    <p class="card-meta">54 Activities</p>
                  </div>
                  <div>
                    <a
                      href="tour-details.html"
                      class="theme-btn theme-btn-small border-0"
                    >
                      Explore <i class="la la-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 responsive-column">
              <div class="card-item destination-card destination--card">
                <div class="card-img">
                  <img src={bg} alt="destination-img" />
                </div>
                <div class="card-body d-flex align-items-center justify-content-between">
                  <div>
                    <h3 class="card-title">
                      <a href="tour-details.html">New Jersey</a>
                    </h3>
                    <p class="card-meta">55 Activities</p>
                  </div>
                  <div>
                    <a
                      href="tour-details.html"
                      class="theme-btn theme-btn-small border-0"
                    >
                      Explore <i class="la la-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cta-area cta-bg bg-fixed section-padding text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2 class="sec__title text-white font-size-50 line-height-60">
                  Relax with us. We love Our Clients.
                </h2>
                <p class="sec__desc text-white pt-3">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                </p>
              </div>
              <div class="btn-box padding-top-35px">
                <a href="become-local-expert.html" class="theme-btn border-0">
                  Become Local Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="destination-area section--padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="section-heading">
                <h2 class="sec__title">Top Visited Places</h2>
                <p class="sec__desc pt-3">
                  Morbi convallis bibendum urna ut viverra Maecenas quis
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="btn-box btn--box text-right">
                <a href="tour-grid.html" class="theme-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
          <div class="row padding-top-50px">
            <div class="col-lg-4">
              <div class="card-item destination-card">
                <div class="card-img">
                  <img src={dimg} alt="destination-img" />
                  <span class="badge">new york</span>
                </div>
                <div class="card-body">
                  <h3 class="card-title">
                    <a href="tour-details.html">Main Street Park</a>
                  </h3>
                  <div class="card-rating d-flex align-items-center">
                    <span class="ratings d-flex align-items-center mr-1">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star-o"></i>
                      <i class="la la-star-o"></i>
                    </span>
                    <span class="rating__text">(70694 Reviews)</span>
                  </div>
                  <div class="card-price d-flex align-items-center justify-content-between">
                    <p class="tour__text">50 Tours</p>
                    <p>
                      <span class="price__from">Price</span>
                      <span class="price__num">$58.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-item destination-card">
                <div class="card-img">
                  <img src={dimg} alt="destination-img" />
                  <span class="badge">chicago</span>
                </div>
                <div class="card-body">
                  <h3 class="card-title">
                    <a href="tour-details.html">Chicago Cultural Center</a>
                  </h3>
                  <div class="card-rating d-flex align-items-center">
                    <span class="ratings d-flex align-items-center mr-1">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star-o"></i>
                    </span>
                    <span class="rating__text">(70694 Reviews)</span>
                  </div>
                  <div class="card-price d-flex align-items-center justify-content-between">
                    <p class="tour__text">50 Tours</p>
                    <p>
                      <span class="price__from">Price</span>
                      <span class="price__num">$68.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card-item destination-card">
                <div class="card-img">
                  <img src={dimg} alt="destination-img" />
                  <span class="badge">new york</span>
                </div>
                <div class="card-body">
                  <h3 class="card-title">
                    <a href="tour-details.html">Main Street Park</a>
                  </h3>
                  <div class="card-rating d-flex align-items-center">
                    <span class="ratings d-flex align-items-center mr-1">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star-o"></i>
                      <i class="la la-star-o"></i>
                    </span>
                    <span class="rating__text">(70694 Reviews)</span>
                  </div>
                  <div class="card-price d-flex align-items-center justify-content-between">
                    <p class="tour__text">50 Tours</p>
                    <p>
                      <span class="price__from">Price</span>
                      <span class="price__num">$58.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-item destination-card">
                <div class="card-img">
                  <img src={dimg} alt="destination-img" />
                  <span class="badge">chicago</span>
                </div>
                <div class="card-body">
                  <h3 class="card-title">
                    <a href="tour-details.html">Chicago Cultural Center</a>
                  </h3>
                  <div class="card-rating d-flex align-items-center">
                    <span class="ratings d-flex align-items-center mr-1">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star-o"></i>
                    </span>
                    <span class="rating__text">(70694 Reviews)</span>
                  </div>
                  <div class="card-price d-flex align-items-center justify-content-between">
                    <p class="tour__text">50 Tours</p>
                    <p>
                      <span class="price__from">Price</span>
                      <span class="price__num">$68.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card-item destination-card">
                <div class="card-img">
                  <img src={dimg2} alt="destination-img" />
                  <span class="badge">new york</span>
                </div>
                <div class="card-body">
                  <h3 class="card-title">
                    <a href="tour-details.html">Main Street Park</a>
                  </h3>
                  <div class="card-rating d-flex align-items-center">
                    <span class="ratings d-flex align-items-center mr-1">
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star"></i>
                      <i class="la la-star-o"></i>
                      <i class="la la-star-o"></i>
                    </span>
                    <span class="rating__text">(70694 Reviews)</span>
                  </div>
                  <div class="card-price d-flex align-items-center justify-content-between">
                    <p class="tour__text">50 Tours</p>
                    <p>
                      <span class="price__from">Price</span>
                      <span class="price__num">$58.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hero-box hero-bg bg-fixed text-center">
        <div class="container ">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2 class="sec__title text-white line-height-55">
                  Let us show you the world Discover our most popular
                  destinations
                </h2>
              </div>
              <div class="btn-box padding-top-35px">
                <a href="become-local-expert.html" class="theme-btn border-0">
                  Join with us
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg class="cta-svg" viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-31.31,170.22 C164.50,33.05 334.36,-32.06 547.11,196.88 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </section>
      <section class="blog-area ">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading text-center">
                <h2 class="sec__title line-height-55">
                  Latest News You Might Like
                </h2>
              </div>
            </div>
          </div>
          <div class="row padding-top-50px">
            <div class="col-lg-4 responsive-column">
              <div class="card-item blog-card">
                <div class="card-img">
                  <img src={dimg} alt="blog-img" />
                  <div class="post-format icon-element">
                    <i class="la la-photo"></i>
                  </div>
                  <div class="card-body">
                    <div class="post-categories">
                      <a href="#" class="badge">
                        Travel
                      </a>
                      <a href="#" class="badge">
                        lifestyle
                      </a>
                    </div>
                    <h3 class="card-title line-height-26">
                      <a href="blog-single.html">
                        When Traveling Avoid Expensive Hotels Resorts
                      </a>
                    </h3>
                    <p class="card-meta">
                      <span class="post__date"> 1 January, 2020</span>
                      <span class="post-dot"></span>
                      <span class="post__time">5 Mins read</span>
                    </p>
                  </div>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                  <div class="author-content d-flex align-items-center">
                    <div class="author-img">
                      {/* <img src="images/small-team1.jpg" alt="testimonial image"> */}
                    </div>
                    <div class="author-bio">
                      <a href="#" class="author__title">
                        Leroy Bell
                      </a>
                    </div>
                  </div>
                  <div class="post-share">
                    <ul>
                      <li>
                        <i class="la la-share icon-element"></i>
                        <ul class="post-share-dropdown d-flex align-items-center">
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
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 responsive-column">
              <div class="card-item blog-card">
                <div class="card-img">
                  <img src={dimg} alt="blog-img" />
                  <div class="post-format icon-element">
                    <i class="la la-play"></i>
                  </div>
                  <div class="card-body">
                    <div class="post-categories">
                      <a href="#" class="badge">
                        Video
                      </a>
                    </div>
                    <h3 class="card-title line-height-26">
                      <a href="blog-single.html">
                        My Best Travel Tips: The Ultimate Travel Guide
                      </a>
                    </h3>
                    <p class="card-meta">
                      <span class="post__date"> 1 February, 2020</span>
                      <span class="post-dot"></span>
                      <span class="post__time">4 Mins read</span>
                    </p>
                  </div>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                  <div class="author-content d-flex align-items-center">
                    <div class="author-img">
                      {/* <img src="images/small-team2.jpg" alt="testimonial image"> */}
                    </div>
                    <div class="author-bio">
                      <a href="#" class="author__title">
                        Phillip Hunt
                      </a>
                    </div>
                  </div>
                  <div class="post-share">
                    <ul>
                      <li>
                        <i class="la la-share icon-element"></i>
                        <ul class="post-share-dropdown d-flex align-items-center">
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
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 responsive-column">
              <div class="card-item blog-card">
                <div class="card-img">
                  <img src={dimg} alt="blog-img" />
                  <div class="post-format icon-element">
                    <i class="la la-music"></i>
                  </div>
                  <div class="card-body">
                    <div class="post-categories">
                      <a href="#" class="badge">
                        audio
                      </a>
                    </div>
                    <h3 class="card-title line-height-26">
                      <a href="blog-single.html">
                        By all Means, Travel to Popular Sites Don’t Rule Out
                        Other Locations
                      </a>
                    </h3>
                    <p class="card-meta">
                      <span class="post__date"> 1 March, 2020</span>
                      <span class="post-dot"></span>
                      <span class="post__time">3 Mins read</span>
                    </p>
                  </div>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                  <div class="author-content d-flex align-items-center">
                    <div class="author-img">
                      {/* <img src="images/small-team3.jpg" alt="testimonial image"> */}
                    </div>
                    <div class="author-bio">
                      <a href="#" class="author__title">
                        Luke Jacobs
                      </a>
                    </div>
                  </div>
                  <div class="post-share">
                    <ul>
                      <li>
                        <i class="la la-share icon-element"></i>
                        <ul class="post-share-dropdown d-flex align-items-center">
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
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="btn-box text-center pt-4">
                <a href="blog-grid.html" class="theme-btn">
                  Read More Post
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hero-wrapper hero-wrapper6">
        <div className="hero-box  footer-bg bg-fixed text-center">
          <div className="container">
            <div class="row">
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
              <div class="col-lg-3 responsive-column">
                <div class="footer-item">
                  <div class="footer-logo padding-bottom-30px">
                    <a href="index.html" class="foot__logo"></a>
                  </div>
                  <p class="footer__desc">
                    Morbi convallis bibendum urna ut viverra. Maecenas consequat
                  </p>
                  <ul class="list-items pt-3">
                    <li>
                      3015 Grand Ave, Coconut Grove, Cerrick Way, FL 12345
                    </li>
                    <li>+123-456-789</li>
                    <li>
                      <a href="#">trizen@yourwebsite.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="section-block"></div>
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
            </div>
          </div>
          <svg
            class="hero-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
          </svg>{" "}
        </div>
      </section>
    </>
  );
};

export default Home;
