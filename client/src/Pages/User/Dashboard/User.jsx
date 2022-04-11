import React, { useState, useEffect } from "react";
import cardImagae from "../../../Assets/blog-img3.jpg";
import Section1 from "../../../Components/SvgSection/cta-area/Section_1";
import Section2 from "../../../Components/SvgSection/cta-area/Section_2";
import Section3 from "../../../Components/SvgSection/cta-area/Section_3";

function Dashboard() {
  const [dept, setDept] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData4 = async () => {
      const response = await (await fetch("http://localhost:5000/data")).json();
      setUsers(response);
    };

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
    getData4();
    getData3();
    getData2();
    getData();
  }, []);

  return (
    <>
      <Section1 />
      <section class="round-trip-flight pt-4 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Your Department</h2>
            </div>
          </div>
          <hr />
          <div class="row ">
            <div class="col-lg-12">
              <div class="flight-filter-tab text-center">
                {users.map((data) => {
                  return (
                    <>
                      {data._id == localStorage.getItem("id") ? (
                        <>
                          {Object.entries(data.deptId).map(([i, index]) => {
                            return (
                              <>
                                <section class="about-area overflow-hidden">
                                  <div class="container">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <div class="about-content pr-5">
                                          <div class="section-heading">
                                            <h2 class="sec__title">
                                              {index.name}
                                            </h2>
                                            <p class="sec__desc pt-4 pb-2">
                                              It is a long established fact that
                                              a reader will be distracted by the
                                              readable content of a page when
                                              looking at its layout. The point
                                              of using Lorem Ipsum is that it
                                              has a more-or-less normal
                                              distribution of letters
                                            </p>
                                            <p class="sec__desc">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipisicing elit. A
                                              accusamus amet consectetur ipsa
                                              officia. Doloremque error porro
                                              sit soluta totam! A iste nobis vel
                                              voluptatem!
                                            </p>
                                          </div>
                                          <div class="btn-box pt-4">
                                            <a
                                              href="about.html"
                                              class="theme-btn"
                                            >
                                              Read More{" "}
                                              <i class="la la-arrow-right ml-1"></i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-lg-6">
                                        <div class="image-box about-img-box">
                                          <div class="row pb-5">
                                            <div class="col-lg-6 responsive-column">
                                              <div class="flip-box">
                                                <div class="flip-box-front">
                                                  <img
                                                    src={cardImagae}
                                                    alt=""
                                                  />
                                                  <p class="flip-content d-flex align-items-end justify-content-start">
                                                    <h3 class="flip-title">
                                                      Cultural Trecks
                                                    </h3>
                                                  </p>
                                                </div>
                                                <div class="flip-box-back">
                                                  <img
                                                    src={cardImagae}
                                                    alt=""
                                                  />
                                                  <a
                                                    href="#"
                                                    class="flip-content d-flex align-items-center justify-content-center"
                                                  >
                                                    <div>
                                                      <div class="icon-element mx-auto mb-3 bg-white text-color-2">
                                                        <i class="la la-arrow-right"></i>
                                                      </div>
                                                      <h3 class="flip-title">
                                                        Explore Activity
                                                      </h3>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </>
                            );
                          })}
                        </>
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="top-activity-area pt-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Your Courses</h2>
            </div>
          </div>
          <hr />
          <div class="row padding-top-50px">
            {users.map((data) => {
              return (
                <>
                  {data._id == localStorage.getItem("id") ? (
                    <>
                      {console.log(data)}
                      {Object.entries(data.courseId).map(([i, index]) => {
                        return (
                          <>
                            <div class="col-lg-3 responsive-column">
                              <div class="flip-box">
                                <div class="flip-box-front">
                                  <img
                                    src={cardImagae}
                                    alt=""
                                    class="flip-img"
                                  />
                                  <p class="flip-content d-flex align-items-end justify-content-start">
                                    <h3 class="flip-title">{index.name}</h3>
                                  </p>
                                </div>
                                <div class="flip-box-back">
                                  <img
                                    src={cardImagae}
                                    alt=""
                                    class="flip-img"
                                  />
                                  <a
                                    href="#"
                                    class="flip-content d-flex align-items-center justify-content-center"
                                  >
                                    <div>
                                      <h3 class="flip-title">Explore More</h3>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>{" "}
                          </>
                        );
                      })}
                    </>
                  ) : null}
                </>
              );
            })}
          </div>
        </div>
      </section>
      <Section3 />
      <section class="destination-area section--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>See Your Teaachers</h2>
            </div>
          </div>
          <hr />
          {users.map((data) => {
            return (
              <>
                {data._id == localStorage.getItem("id") ? (
                  <>
                    {Object.entries(data.courseId).map(([i, index]) => {
                      return (
                        <>
                          {Object.entries(index.teacherId).map(([t, item]) => {
                            return (
                              <>
                                <div class="row padding-top-60px">
                                  <div class="col-lg-4 responsive-column">
                                    <div class="card-item cruise-card">
                                      <div class="card-img">
                                        <img
                                          src={cardImagae}
                                          alt="cruise-img"
                                        />
                                        <div class="card-body">
                                          <h3 class="card-title mb-0">
                                            <a href="cruise-details.html">
                                              {item.name}
                                            </a>
                                          </h3>
                                        </div>
                                      </div>
                                      <div class="card-footer">
                                        <h3 class="card-subtitle">
                                          {item.email}
                                        </h3>
                                        <p class="card-meta">{item.deptId}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                  </>
                ) : null}
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Dashboard;
