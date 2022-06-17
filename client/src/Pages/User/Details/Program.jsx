import React, { useEffect, useState } from "react";
import BreadCrumbArea from "../../../Components/UserUtilis/BreadCrumbArea";
import myData from "../../../Components/Qec/question.json";
import { useParams, useNavigate } from "react-router-dom";
import ProgramComplain from "../../../Components/ComplainBox/Program";

const Program = () => {
  const params = useParams();
  let navigate = useNavigate();
  const [program, setProgram] = useState([]);
  const handleSent = (data) => {
    let path = "../program-details/" + data;
    navigate(path);
  };
  const handleChange = (data) => {
    let path = "../qec";
    navigate(path);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/programs")
      ).json();
      response.map((data) => {
        return data._id == params.id ? setProgram([data]) : null;
      });
    };
    getData();
  }, []);
  return (
    <>
      <BreadCrumbArea />
      <section className="tour-detail-area padding-bottom-90px section-bg3">
        <div className="single-content-box">
          <div className="container">
            <div className="row">
              {program.map((data) => {
                return (
                  <div className="col-lg-8">
                    <div className="single-content-wrap padding-top-60px">
                      <div id="description" className="page-scroll">
                        <div className="single-content-item pb-4">
                          <h3 className="title font-size-26">
                            Program Name: {data.name}
                          </h3>
                        </div>
                        <div className="section-block"></div>
                        <div className="single-content-item py-4">
                          <div className="row">
                            <div className="col-lg-4 responsive-column">
                              <div className="single-tour-feature d-flex align-items-center mb-3">
                                <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                  <i className="la la-users"></i>
                                </div>
                                <div className="single-feature-titles">
                                  <h3 className="title font-size-15 font-weight-medium">
                                    Total Students
                                  </h3>
                                  <span className="font-size-13">
                                    {data.studentId.length}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 responsive-column">
                              <div className="single-tour-feature d-flex align-items-center mb-3">
                                <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                  <i className="la la-globe"></i>
                                </div>
                                <div className="single-feature-titles">
                                  <h3 className="title font-size-15 font-weight-medium">
                                    Total Teachers
                                  </h3>
                                  <span className="font-size-13">
                                    {data.teacherId.length}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 responsive-column">
                              <div className="single-tour-feature d-flex align-items-center mb-3">
                                <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                  <i className="la la-calendar"></i>
                                </div>
                                <div className="single-feature-titles">
                                  <h3 className="title font-size-15 font-weight-medium">
                                    Date
                                  </h3>
                                  <span className="font-size-13">
                                    {new Date(
                                      data.createdAt
                                    ).toLocaleDateString("en-US")}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 responsive-column">
                              <div className="single-tour-feature d-flex align-items-center mb-3">
                                {Object.entries(data.departmentId).map(
                                  ([i, index]) => {
                                    return (
                                      <>
                                        <button
                                          className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3"
                                          onClick={() => handleSent(index._id)}
                                        >
                                          <div>
                                            <i className="la la-calendar"></i>
                                          </div>
                                        </button>
                                        <div className="single-feature-titles">
                                          <h3 className="title font-size-15 font-weight-medium">
                                            Department
                                          </h3>
                                          <span className="font-size-13">
                                            {index.name}
                                          </span>
                                        </div>
                                      </>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                            <div className="col-lg-4 responsive-column">
                              <div className="single-tour-feature d-flex align-items-center mb-3">
                                <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                  <i className="la la-calendar"></i>
                                </div>
                                <div className="single-feature-titles">
                                  <h3 className="title font-size-15 font-weight-medium">
                                    Total Sessions
                                  </h3>
                                  <span className="font-size-13">
                                    {data.sessionId.length}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 responsive-column">
                              <div className="single-tour-feature d-flex align-items-center mb-3">
                                <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                  <i className="la la-calendar"></i>
                                </div>
                                <div className="single-feature-titles">
                                  <h3 className="title font-size-15 font-weight-medium">
                                    Total Semester
                                  </h3>
                                  <span className="font-size-13">
                                    {data.semesterId.length}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="section-block"></div>
                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                          <h3 className="title font-size-20">Description</h3>
                          <p className="py-3">
                            Per consequat adolescens ex, cu nibh commune
                            temporibus vim, ad sumo viris eloquentiam sed. Mea
                            appareat omittantur eloquentiam ad, nam ei quas
                            oportere democritum. Prima causae admodum id est, ei
                            timeam inimicus sed. Sit an meis aliquam, cetero
                            inermis vel ut. An sit illum euismod facilisis,
                            tamquam vulputate pertinacia eum at.
                          </p>
                          <p className="pb-4">
                            Cum et probo menandri. Officiis consulatu pro et, ne
                            sea sale invidunt, sed ut sint blandit efficiendi.
                            Atomorum explicari eu qui, est enim quaerendum te.
                            Quo harum viris id. Per ne quando dolore evertitur,
                            pro ad cibo commune.
                          </p>
                        </div>
                        <div className="section-block"></div>
                      </div>
                      <div id="itinerary" className="page-scroll">
                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                          <h3 className="title font-size-20">Semester</h3>
                          <div
                            className="accordion accordion-item padding-top-30px"
                            id="accordionExample"
                          >
                            {Object.entries(data.semesterId).map(
                              ([i, index]) => {
                                return (
                                  <div className="card">
                                    <div
                                      className="card-header"
                                      id="faqHeadingOne"
                                    >
                                      <h2 className="mb-0">
                                        <button
                                          className="btn btn-link d-flex align-items-center justify-content-between font-size-16"
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#faqCollapseOne"
                                          aria-expanded="true"
                                          aria-controls="faqCollapseOne"
                                        >
                                          <span>semester-{index.name}</span>
                                        </button>
                                      </h2>
                                    </div>
                                    <div
                                      id="faqCollapseOne"
                                      className="collapse show"
                                      aria-labelledby="faqHeadingOne"
                                      data-parent="#accordionExample"
                                    >
                                      <div className="card-body d-flex align-items-center">
                                        <div className="flex-shrink-0 mt-2 mr-4"></div>
                                        <p>
                                          Mea appareat omittantur eloquentiam
                                          ad, nam ei quas oportere democritum.
                                          Prima causae admodum id est, ei timeam
                                          inimicus sed. Sit an meis aliquam,
                                          cetero inermis vel ut. An sit illum
                                          euismod facilisis Nullam id dolor id
                                          nibh ultricies vehicula ut id elit.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        <div className="section-block"></div>
                      </div>
                      <div id="faq" className="page-scroll">
                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                          <h3 className="title font-size-20">FAQ</h3>
                          <div
                            className="accordion accordion-item padding-top-30px"
                            id="accordionExample2"
                          >
                            {myData.slice(0, 1).map((data) => {
                              return (
                                <>
                                  <div className="card">
                                    <div
                                      className="card-header"
                                      id="faqHeadingFour"
                                    >
                                      <h2 className="mb-0">
                                        <button
                                          className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16"
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#faqCollapseFour"
                                          aria-expanded="true"
                                          aria-controls="faqCollapseFour"
                                        >
                                          <span className="ml-3">
                                            {data.question}
                                          </span>
                                          <i className="la la-minus"></i>
                                          <i className="la la-plus"></i>
                                        </button>
                                      </h2>
                                    </div>
                                    <div
                                      id="faqCollapseFour"
                                      className="collapse show"
                                      aria-labelledby="faqHeadingFour"
                                      data-parent="#accordionExample2"
                                    >
                                      <div className="card-body d-flex">
                                        <p>
                                          Mea appareat omittantur eloquentiam
                                          ad, nam ei quas oportere democritum.
                                          Prima causae admodum id est, ei timeam
                                          inimicus sed. Sit an meis aliquam,
                                          cetero inermis vel ut. An sit illum
                                          euismod facilisis Nullam id dolor id
                                          nibh ultricies vehicula ut id elit.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                            {myData.slice(1, 4).map((data) => {
                              return (
                                <>
                                  <div className="card">
                                    <div
                                      className="card-header"
                                      id="faqHeadingSix"
                                    >
                                      <h2 className="mb-0">
                                        <button
                                          className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16"
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#faqCollapseSix"
                                          aria-expanded="false"
                                          aria-controls="faqCollapseSix"
                                        >
                                          <span className="ml-3">
                                            {data.question}
                                          </span>
                                          <i className="la la-minus"></i>
                                          <i className="la la-plus"></i>
                                        </button>
                                      </h2>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                          <button
                            className="theme-btn"
                            onClick={() => handleChange(data)}
                          >
                            VIEW MORE
                          </button>
                        </div>

                        <div className="section-block"></div>
                      </div>
                      <div id="reviews" className="page-scroll">
                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                          <h3 className="title font-size-20">Reviews</h3>
                          <div className="review-container padding-top-30px">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <div className="review-summary">
                                  <h2>
                                    4.5<span>/5</span>
                                  </h2>
                                  <p>Excellent</p>
                                  <span>Based on 4 reviews</span>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className="review-bars">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="progress-item">
                                        <h3 className="progressbar-title">
                                          Service
                                        </h3>
                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                          <div className="progressbar-box flex-shrink-0">
                                            <div
                                              className="progressbar-line"
                                              data-percent="70%"
                                            >
                                              <div className="progressbar-line-item bar-bg-1"></div>
                                            </div>
                                          </div>
                                          <div className="bar-percent">4.6</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="progress-item">
                                        <h3 className="progressbar-title">
                                          Location
                                        </h3>
                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                          <div className="progressbar-box flex-shrink-0">
                                            <div
                                              className="progressbar-line"
                                              data-percent="55%"
                                            >
                                              <div className="progressbar-line-item bar-bg-2"></div>
                                            </div>
                                          </div>
                                          <div className="bar-percent">4.7</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="progress-item">
                                        <h3 className="progressbar-title">
                                          Value for Money
                                        </h3>
                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                          <div className="progressbar-box flex-shrink-0">
                                            <div
                                              className="progressbar-line"
                                              data-percent="40%"
                                            >
                                              <div className="progressbar-line-item bar-bg-3"></div>
                                            </div>
                                          </div>
                                          <div className="bar-percent">2.6</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="progress-item">
                                        <h3 className="progressbar-title">
                                          Cleanliness
                                        </h3>
                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                          <div className="progressbar-box flex-shrink-0">
                                            <div
                                              className="progressbar-line"
                                              data-percent="60%"
                                            >
                                              <div className="progressbar-line-item bar-bg-4"></div>
                                            </div>
                                          </div>
                                          <div className="bar-percent">3.6</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="progress-item">
                                        <h3 className="progressbar-title">
                                          Facilities
                                        </h3>
                                        <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                          <div className="progressbar-box flex-shrink-0">
                                            <div
                                              className="progressbar-line"
                                              data-percent="50%"
                                            >
                                              <div className="progressbar-line-item bar-bg-5"></div>
                                            </div>
                                          </div>
                                          <div className="bar-percent">2.6</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="section-block"></div>
                      </div>
                      <div class="review-box">
                        <div class="single-content-item padding-top-40px">
                          <h3 class="title font-size-20">
                            Showing 3 guest reviews
                          </h3>
                          <div class="comments-list padding-top-50px">
                            <div class="comment">
                              <div class="comment-avatar">
                                <img
                                  class="avatar__img"
                                  alt=""
                                  src="images/team8.jpg"
                                />
                              </div>
                              <div class="comment-body">
                                <div class="meta-data">
                                  <h3 class="comment__author">Jenny Doe</h3>
                                  <div class="meta-data-inner d-flex">
                                    <span class="ratings d-flex align-items-center mr-1">
                                      <i class="la la-star"></i>
                                      <i class="la la-star"></i>
                                      <i class="la la-star"></i>
                                      <i class="la la-star"></i>
                                      <i class="la la-star"></i>
                                    </span>
                                    <p class="comment__date">April 5, 2019</p>
                                  </div>
                                </div>
                                <p class="comment-content">
                                  Lorem ipsum dolor sit amet, dolores mandamus
                                  moderatius ea ius, sed civibus vivendum
                                  imperdiet ei, amet tritani sea id. Ut veri
                                  diceret fierent mei, qui facilisi suavitate
                                  euripidis
                                </p>
                              </div>
                            </div>
                            <div class="comment">
                              <div class="comment-avatar">
                                <img
                                  class="avatar__img"
                                  alt=""
                                  src="images/team10.jpg"
                                />
                              </div>
                              <div class="comment-body">
                                <div class="meta-data">
                                  <h3 class="comment__author">Jenny Doe</h3>
                                  <div class="meta-data-inner d-flex">
                                    <span class="ratings d-flex align-items-center mr-1">
                                      <i class="la la-star"></i>
                                      <i class="la la-star"></i>
                                      <i class="la la-star"></i>
                                      <i class="la la-star"></i>
                                      <i class="la la-star"></i>
                                    </span>
                                    <p class="comment__date">April 5, 2019</p>
                                  </div>
                                </div>
                                <p class="comment-content">
                                  Lorem ipsum dolor sit amet, dolores mandamus
                                  moderatius ea ius, sed civibus vivendum
                                  imperdiet ei, amet tritani sea id. Ut veri
                                  diceret fierent mei, qui facilisi suavitate
                                  euripidis
                                </p>
                              </div>
                            </div>
                            <div class="btn-box load-more text-center">
                              <button
                                class="theme-btn theme-btn-small theme-btn-transparent"
                                type="button"
                              >
                                Load More Review
                              </button>
                            </div>
                          </div>
                          <div class="comment-forum padding-top-40px">
                            <div class="form-box">
                              <div class="form-title-wrap">
                                <h3 class="">Write a Review</h3>
                              </div>
                              <div class="form-content">
                                <div class="rate-option p-2">
                                  <div class="row">
                                    <div class="col-lg-4 responsive-column">
                                      <div class="rate-option-item">
                                        <label>Service</label>
                                        <div class="rate-stars-option">
                                          <input
                                            type="checkbox"
                                            id="lst1"
                                            value="1"
                                          />
                                          <label for="lst1"></label>
                                          <input
                                            type="checkbox"
                                            id="lst2"
                                            value="2"
                                          />
                                          <label for="lst2"></label>
                                          <input
                                            type="checkbox"
                                            id="lst3"
                                            value="3"
                                          />
                                          <label for="lst3"></label>
                                          <input
                                            type="checkbox"
                                            id="lst4"
                                            value="4"
                                          />
                                          <label for="lst4"></label>
                                          <input
                                            type="checkbox"
                                            id="lst5"
                                            value="5"
                                          />
                                          <label for="lst5"></label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="contact-form-action">
                                  <form method="post">
                                    <div class="row">
                                      <div class="col-lg-6">
                                        <div class="input-box">
                                          <label class="label-text">Name</label>
                                          <div class="form-group">
                                            <span class="la la-user form-icon"></span>
                                            <input
                                              class="form-control"
                                              type="text"
                                              name="text"
                                              placeholder="Your name"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-lg-6">
                                        <div class="input-box">
                                          <label class="label-text">
                                            Email
                                          </label>
                                          <div class="form-group">
                                            <span class="la la-envelope-o form-icon"></span>
                                            <input
                                              class="form-control"
                                              type="email"
                                              name="email"
                                              placeholder="Email address"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-lg-12">
                                        <div class="input-box">
                                          <label class="label-text">
                                            Message
                                          </label>
                                          <div class="form-group">
                                            <span class="la la-pencil form-icon"></span>
                                            <textarea
                                              class="message-control form-control"
                                              name="message"
                                              placeholder="Write message"
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-lg-12">
                                        <div class="btn-box">
                                          <button
                                            type="button"
                                            class="theme-btn"
                                          >
                                            Leave a Review
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col-lg-4">
                <div className="sidebar single-content-sidebar mb-0">
                  {program.map((item) => {
                    return (
                      <>
                        <div className="sidebar-widget single-content-widget">
                          <div className="sidebar-widget-item">
                            <div className="sidebar-book-title-wrap mb-3">
                              <h3>{item.name}</h3>
                              <p>
                                <span className="text-form">Department </span>
                                <span className="text-value ml-2 mr-1">
                                  {Object.entries(item.departmentId).map(
                                    ([i, index]) => index.name
                                  )}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="sidebar-widget-item">
                            <div className="contact-form-action">
                              <div className="input-box">
                                <label className="label-text">
                                  Creataed At
                                </label>
                                <div className="form-group">
                                  <input
                                    className="date-range form-control"
                                    type="text"
                                    name="daterange"
                                    disabled
                                    value={new Date(
                                      item.createdAt
                                    ).toLocaleDateString("en-US")}
                                    readonly=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sidebar-widget-item">
                            <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                              <label className="font-size-16">
                                Session
                                <span>Session of {item.name}</span>
                              </label>
                              <div className="qtyBtn d-flex align-items-center">
                                <input
                                  type="text"
                                  name="qtyInput"
                                  value={Object.entries(item.sessionId).map(
                                    ([i, index]) => index.name
                                  )}
                                />
                              </div>
                            </div>
                            <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                              <label className="font-size-16">
                                Total Semesters
                                <span>Total semesters in {item.name}</span>
                              </label>
                              <div className="qtyBtn d-flex align-items-center">
                                <input
                                  type="text"
                                  name="qtyInput"
                                  value={item.semesterId.length}
                                />
                              </div>
                            </div>
                            <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                              <label className="font-size-16">
                                Total Students
                                <span>Available Students in {item.name}</span>
                              </label>
                              <div className="qtyBtn d-flex align-items-center">
                                <input
                                  type="text"
                                  name="qtyInput"
                                  value={item.studentId.length}
                                />
                              </div>
                            </div>
                            <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                              <label className="font-size-16">
                                Total Teachers{" "}
                                <span>Available Teachers in {item.name}</span>
                              </label>
                              <div className="qtyBtn d-flex align-items-center">
                                <input
                                  type="text"
                                  name="qtyInput"
                                  value={item.teacherId.length}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <ProgramComplain data={item} />
                        <div className="sidebar-widget single-content-widget">
                          <h3 className="title stroke-shape">
                            Get a Question?
                          </h3>
                          <p className="font-size-14 line-height-24">
                            Do not hesitate to give us a call. We are an expert
                            team and we are happy to talk to you.
                          </p>
                          <div className="sidebar-list pt-3">
                            <ul className="list-items">
                              <li>
                                <a href="#">+ 61 23 8093 3400</a>
                              </li>
                              <li>
                                <a href="mailto:info@trizen.com">
                                  hnabeel570@gmail.com
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;
