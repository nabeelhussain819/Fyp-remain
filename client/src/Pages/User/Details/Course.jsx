import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import myData from "../../../Components/Qec/question.json";
import { useParams } from "react-router-dom";
import CourseComplain from "../../../Components/ComplainBox/Course";
import CourseReview from "../../../Components/ReviewBox/CourseReview";

const Course = () => {
  let navigate = useNavigate();
  const params = useParams();
  const [courses, setCourses] = useState([]);
  const handleSent = (data) => {
    let path = "../semester-detials/" + data._id;
    navigate(path);
  };
  const handleChange = (data) => {
    let path = "../qec-course/" + data._id;
    navigate(path);
  };

  const getData = async () => {
    const response = await (
      await fetch("https://new819.herokuapp.com/courses")
    ).json();
    response.map((data) => {
      return data._id == params.id ? setCourses([data]) : null;
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="breadcrumb-area gradient-bg-gray before-none pb-4 pt-4">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                  <div className="section-heading text-left">
                    <h2 className="sec__title">Course Details</h2>
                    {courses.map((data) => {
                      return (
                        <p className="sec__desc font-weight-regular pb-2">
                          {data.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tour-detail-area padding-bottom-90px section-bg3">
        {courses.map((data) => {
          return (
            <>
              <div className="single-content-box">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="single-content-wrap padding-top-60px">
                        <div id="description" className="page-scroll">
                          <div className="single-content-item pb-4">
                            <h3 className="font-size-26">
                              Course Name: {data.name}
                            </h3>
                            <div className="d-flex flex-wrap align-items-center pt-2">
                              <p className="mr-2">Course Code</p>
                              <p>
                                <span className="badge badge-warning text-white font-size-16">
                                  {data.code}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="section-block"></div>
                          <div className="single-content-item py-4">
                            <div className="row">
                              <div className="col-lg-4 responsive-column">
                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                  <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                    <i className="la la-clock-o"></i>
                                  </div>
                                  <div className="single-feature-titles">
                                    <h3 className="font-size-15 font-weight-medium">
                                      Total Hours
                                    </h3>
                                    <span className="font-size-13">400</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 responsive-column">
                                <div className="single-tour-feature d-flex align-items-center mb-3">
                                  <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                    <i className="la la-users"></i>
                                  </div>
                                  <div className="single-feature-titles">
                                    <h3 className="font-size-15 font-weight-medium">
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
                                    <h3 className="font-size-15 font-weight-medium">
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
                                    <h3 className="font-size-15 font-weight-medium">
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
                                  {Object.entries(data.sectionId).map(
                                    ([i, index]) => {
                                      return (
                                        <>
                                          <button
                                            className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3"
                                            onClick={() => handleSent(data)}
                                          >
                                            <div>
                                              <i className="la la-calendar"></i>
                                            </div>
                                          </button>
                                          <div className="single-feature-titles">
                                            <h3 className="font-size-15 font-weight-medium">
                                              Semester
                                            </h3>
                                            <span className="font-size-13">
                                              semester-
                                              {index.name}
                                            </span>
                                          </div>
                                        </>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="section-block"></div>
                          <div className="single-content-item padding-top-40px padding-bottom-40px">
                            <h3 className="font-size-20">Description</h3>
                            <p className="py-3">
                              Per consequat adolescens ex, cu nibh commune
                              temporibus vim, ad sumo viris eloquentiam sed. Mea
                              appareat omittantur eloquentiam ad, nam ei quas
                              oportere democritum. Prima causae admodum id est,
                              ei timeam inimicus sed. Sit an meis aliquam,
                              cetero inermis vel ut. An sit illum euismod
                              facilisis, tamquam vulputate pertinacia eum at.
                            </p>
                            <p className="pb-4">
                              Cum et probo menandri. Officiis consulatu pro et,
                              ne sea sale invidunt, sed ut sint blandit
                              efficiendi. Atomorum explicari eu qui, est enim
                              quaerendum te. Quo harum viris id. Per ne quando
                              dolore evertitur, pro ad cibo commune.
                            </p>
                          </div>
                          <div className="section-block"></div>
                        </div>
                        <div id="itinerary" className="page-scroll">
                          <div className="single-content-item padding-top-40px padding-bottom-40px">
                            <h3 className="font-size-20">Teachers</h3>
                            <div
                              className="accordion accordion-item padding-top-30px"
                              id="accordionExample"
                            >
                              {Object.entries(data.teacherId).map(
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
                                            <span>{index.name}</span>
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
                                            Prima causae admodum id est, ei
                                            timeam inimicus sed. Sit an meis
                                            aliquam, cetero inermis vel ut. An
                                            sit illum euismod facilisis Nullam
                                            id dolor id nibh ultricies vehicula
                                            ut id elit.
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
                            <h3 className="font-size-20">FAQ</h3>
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
                                            Prima causae admodum id est, ei
                                            timeam inimicus sed. Sit an meis
                                            aliquam, cetero inermis vel ut. An
                                            sit illum euismod facilisis Nullam
                                            id dolor id nibh ultricies vehicula
                                            ut id elit.
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
                            <h3 className="font-size-20">Reviews</h3>
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
                                            <div className="bar-percent">
                                              4.6
                                            </div>
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
                                            <div className="bar-percent">
                                              4.7
                                            </div>
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
                                            <div className="bar-percent">
                                              2.6
                                            </div>
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
                                            <div className="bar-percent">
                                              3.6
                                            </div>
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
                                            <div className="bar-percent">
                                              2.6
                                            </div>
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
                        <CourseReview data={data} />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="sidebar single-content-sidebar mb-0">
                        {courses.map((item) => {
                          return (
                            <>
                              <div className="sidebar-widget single-content-widget">
                                <div className="sidebar-widget-item">
                                  <div className="sidebar-book-title-wrap mb-3">
                                    <h3>{item.name}</h3>
                                    <p>
                                      <span className="text-form">
                                        Course Code
                                      </span>
                                      <span className="text-value ml-2 mr-1">
                                        {item.code}
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
                                      Total Students
                                      <span>
                                        Available Students in {item.name}
                                      </span>
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
                                      <span>
                                        Available Teachers in {item.name}
                                      </span>
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
                              <CourseComplain data={item} />
                              <div className="sidebar-widget single-content-widget">
                                <h3 className="stroke-shape">
                                  Get a Question?
                                </h3>
                                <p className="font-size-14 line-height-24">
                                  Do not hesitate to give us a call. We are an
                                  expert team and we are happy to talk to you.
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
            </>
          );
        })}
      </section>
    </>
  );
};

export default Course;
