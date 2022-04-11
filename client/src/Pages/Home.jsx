import React, { useEffect, useState } from "react";
import NavBarLogin from "../Components/Header/LoginNavbar";
import bg from "../Assets/bg2.jpg";
import dimg from "../Assets/dimg.jpg";
import dimg2 from "../Assets/dimg2.jpg";

const Home = () => {
  const [dept, setDept] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("http://localhost:5000/departments")
      ).json();
      setDept(response);
    };
    const getData2 = async () => {
      const response = await (
        await fetch("http://localhost:5000/courses")
      ).json();
      setCourses(response);
    };
    const getData3 = async () => {
      const response = await (
        await fetch("http://localhost:5000/teacher")
      ).json();
      setTeacher(response);
    };
    getData3();
    getData2();
    getData();
  }, []);
  return (
    <>
      <NavBarLogin />
      <section class="hero-wrapper  hero-wrapper3">
        <div class="hero-box hero-bg-3 bg-fixed">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 mx-auto responsive--column-l text-center text-light">
                <h1>Welcome to Student and Teacher evaluation system</h1>
                <p>we are Here To help you in evaluating your teachers </p>
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
                <h2 class="sec__title">Department we have</h2>
                <p class="sec__desc pt-3">
                  Department we Have Today Are repestively as follow
                </p>
              </div>
            </div>
          </div>
          <div class="row padding-top-50px">
            {dept.map((data) => {
              return (
                <>
                  <div class="col-lg-4 responsive-column">
                    <div class="card-item destination-card destination--card">
                      <div class="card-img">
                        <img src={bg} alt="destination-img" />
                      </div>
                      <div class="card-body d-flex align-items-center justify-content-between">
                        <div>
                          <h3 class="card-title">
                            <a href="tour-details.html">{data.name}</a>
                          </h3>
                          <p class="card-meta">
                            {data.userId.length} Total Students
                          </p>
                        </div>
                        <div>
                          <a
                            href="tour-details.html"
                            class="theme-btn theme-btn-small border-0"
                          >
                            Explore
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section class="destination-area section--padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="section-heading">
                <h2 class="sec__title">Top Rating Courses</h2>
                <p class="sec__desc pt-3">Courses According to there Rating</p>
              </div>
            </div>
          </div>
          <div class="row padding-top-50px">
            {courses.slice(0, 3).map((data) => {
              return (
                <>
                  <div class="col-lg-4">
                    <div class="card-item destination-card">
                      <div class="card-img">
                        <img src={dimg2} alt="destination-img" />
                        <span class="badge">Top Ranked</span>
                      </div>
                      <div class="card-body">
                        <h3 class="card-title">
                          <a href="tour-details.html">{data.subjects}</a>
                        </h3>
                        <div class="card-rating d-flex align-items-center">
                          <span class="rating__text">(70694 Reviews)</span>
                        </div>
                        <div class="card-price d-flex align-items-center justify-content-between">
                          <p class="tour__text">
                            {data.userId.length} Students
                          </p>
                          <p>
                            <span class="price__from">Code </span>
                            <span class="price__num">{data.code}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section class="cta-area cta-bg bg-fixed section-padding text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2 class="sec__title text-white font-size-50 line-height-60">
                  Evaluate With Us, make Your comments about Teacher And Courses
                </h2>
                <p class="sec__desc text-white pt-3">
                  You can check your progress Here
                </p>
              </div>
              <div class="btn-box padding-top-35px">
                <a
                  href="become-local-expert.html"
                  class="theme-btn border-0"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-area padding-top-50px">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading text-center">
                <h2 class="sec__title line-height-55">Best Teachers We Have</h2>
              </div>
            </div>
          </div>
          <div class="row padding-top-50px">
            <div class="col-lg-4 responsive-column">
              {teacher.map((data) => {
                return (
                  <>
                    <div class="card-item blog-card">
                      <div class="card-img">
                        <img src={dimg} alt="blog-img" />
                        <div class="post-format icon-element">
                          <i class="la la-photo"></i>
                        </div>
                        <div class="card-body">
                          <div class="post-categories">
                            <a href="#" class="badge">
                              {data.programId.name}
                            </a>
                          </div>
                          <h3 class="card-title line-height-26">
                            <a href="blog-single.html">{data.courseId.name}</a>
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
                          <div class="author-bio">
                            <a href="#" class="author__title">
                              {data.name}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
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
