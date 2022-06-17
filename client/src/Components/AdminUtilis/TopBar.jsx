import React, { useEffect, useState } from "react";

const TopBar = () => {
  const [commands, setCommands] = useState("");
  const [student, setStudents] = useState("");
  const [Comments, setComments] = useState("");
  const [Complains, setComplains] = useState("");
  console.log(student.length);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/students")
      ).json();
      setStudents(response);
    };
    const getData1 = async () => {
      const response = await (
        await fetch("http://localhost:5000/commend")
      ).json();
      setCommands(response);
    };
    // const getData2 = async () => {
    //   const response = await (
    //     await fetch("https://new819.herokuapp.com/comments")
    //   ).json();
    //   setComments(response);
    // };
    // const getData3 = async () => {
    //   const response = await (
    //     await fetch("https://new819.herokuapp.com/complains")
    //   ).json();
    //   setComplains(response);
    // };
    // getData3();
    // getData2();
    getData1();
    getData();
  }, []);

  return (
    <div>
      {" "}
      <div class="row mt-4">
        <div class="col-lg-3 responsive-column-l">
          <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
            <div class="d-flex pb-3 justify-content-between">
              <div class="info-content">
                <p class="info__desc">Total Students!</p>
                <h4 class="info__title">{student.length}</h4>
              </div>
              <div class="info-icon icon-element bg-4">
                <i class="la la-shopping-cart"></i>
              </div>
            </div>
            <div class="section-block"></div>
            <a
              href="admin-dashboard-booking.html"
              class="d-flex align-items-center justify-content-between view-all"
            >
              View All <i class="la la-angle-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-3 responsive-column-l">
          <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
            <div class="d-flex pb-3 justify-content-between">
              <div class="info-content">
                <p class="info__desc">New Commands!</p>
                <h4 class="info__title">22</h4>
              </div>
              <div class="info-icon icon-element bg-3">
                <i class="la la-star"></i>
              </div>
            </div>
            <div class="section-block"></div>
            <a
              href="admin-dashboard-reviews.html"
              class="d-flex align-items-center justify-content-between view-all"
            >
              View All <i class="la la-angle-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-3 responsive-column-l">
          <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
            <div class="d-flex pb-3 justify-content-between">
              <div class="info-content">
                <p class="info__desc">Total Complains!</p>
                <h4 class="info__title">27</h4>
              </div>
              <div class="info-icon icon-element bg-2">
                <i class="la la-envelope"></i>
              </div>
            </div>
            <div class="section-block"></div>
            <a
              href="admin-dashboard-subscribers.html"
              class="d-flex align-items-center justify-content-between view-all"
            >
              View All <i class="la la-angle-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-3 responsive-column-l">
          <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
            <div class="d-flex pb-3 justify-content-between">
              <div class="info-content">
                <p class="info__desc">Total Comments!</p>
                <h4 class="info__title">25</h4>
              </div>
              <div class="info-icon icon-element bg-1">
                <i class="la la-bookmark-o"></i>
              </div>
            </div>
            <div class="section-block"></div>
            <a
              href="admin-dashboard-wishlist.html"
              class="d-flex align-items-center justify-content-between view-all"
            >
              View All <i class="la la-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
