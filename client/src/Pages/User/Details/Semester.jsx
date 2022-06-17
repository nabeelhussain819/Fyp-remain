import React, { useEffect, useState } from "react";
import BreadCrumbArea from "../../../Components/UserUtilis/BreadCrumbArea";

import { useParams } from "react-router-dom";
import SemesterComplain from "../../../Components/ComplainBox/Semester";
import SemesterReview from "../../../Components/ReviewBox/SemesterReview";

const Semester = () => {
  const params = useParams();
  const [semes, setSemes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/semesters")
      ).json();
      response.map((data) => {
        return data._id == params.id ? setSemes([data]) : null;
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
              <div className="col-lg-8">
                {semes.map((data) => {
                  return (
                    <div className="single-content-wrap padding-top-60px">
                      <div id="description" className="page-scroll">
                        <div className="single-content-item pb-4">
                          <h3 className="title font-size-26">
                            Semester - {data.name}
                          </h3>
                          <div className="d-flex flex-wrap align-items-center pt-2">
                            <p className="mr-2">Huairou District, China</p>
                            <p>
                              <span className="badge badge-warning text-white font-size-16">
                                4.6
                              </span>
                              <span>(4,209 Reviews)</span>
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
                                  <h3 className="title font-size-15 font-weight-medium">
                                    Duration
                                  </h3>
                                  <span className="font-size-13">3 Days</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 responsive-column">
                              <div className="single-tour-feature d-flex align-items-center mb-3">
                                <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                  <i className="la la-users"></i>
                                </div>
                                <div className="single-feature-titles">
                                  <h3 className="title font-size-15 font-weight-medium">
                                    Group Size
                                  </h3>
                                  <span className="font-size-13">
                                    30 People
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
                                    Tour Type
                                  </h3>
                                  <span className="font-size-13">
                                    Adventures Tour
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
                                    Jan 19' - Dec 21'
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 responsive-column">
                              <div className="single-tour-feature d-flex align-items-center mb-3">
                                <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                  <i className="la la-user"></i>
                                </div>
                                <div className="single-feature-titles">
                                  <h3 className="title font-size-15 font-weight-medium">
                                    Min Age
                                  </h3>
                                  <span className="font-size-13">10+</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 responsive-column">
                              <div className="single-tour-feature d-flex align-items-center mb-3">
                                <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                  <i className="la la-plane"></i>
                                </div>
                                <div className="single-feature-titles">
                                  <h3 className="title font-size-15 font-weight-medium">
                                    Pickup From
                                  </h3>
                                  <span className="font-size-13">Airport</span>
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
                          <h3 className="title font-size-15 font-weight-medium pb-3">
                            Highlights
                          </h3>
                          <div className="row">
                            <div className="col-lg-6 responsive-column">
                              <ul className="list-items pb-3">
                                <li>
                                  <i className="la la-dot-circle text-color mr-2"></i>
                                  Dolorem mediocritatem
                                </li>
                                <li>
                                  <i className="la la-dot-circle text-color mr-2"></i>
                                  Mea appareat
                                </li>
                                <li>
                                  <i className="la la-dot-circle text-color mr-2"></i>
                                  Prima causae
                                </li>
                                <li>
                                  <i className="la la-dot-circle text-color mr-2"></i>
                                  Singulis indoctum
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 responsive-column">
                              <ul className="list-items pb-3">
                                <li>
                                  <i className="la la-dot-circle text-color mr-2"></i>
                                  Timeam inimicus
                                </li>
                                <li>
                                  <i className="la la-dot-circle text-color mr-2"></i>
                                  Oportere democritum
                                </li>
                                <li>
                                  <i className="la la-dot-circle text-color mr-2"></i>
                                  Cetero inermis
                                </li>
                                <li>
                                  <i className="la la-dot-circle text-color mr-2"></i>
                                  Pertinacia eum
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 responsive-column">
                              <h3 className="title font-size-15 font-weight-medium pb-3">
                                Included
                              </h3>
                              <ul className="list-items">
                                <li>
                                  <i className="la la-check text-success mr-2"></i>
                                  Airfare
                                </li>
                                <li>
                                  <i className="la la-check text-success mr-2"></i>
                                  Local Transportation
                                </li>
                                <li>
                                  <i className="la la-check text-success mr-2"></i>
                                  Accommodation
                                </li>
                                <li>
                                  <i className="la la-check text-success mr-2"></i>
                                  Tour Guide
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6 responsive-column">
                              <h3 className="title font-size-15 font-weight-medium pb-3">
                                Not Included
                              </h3>
                              <ul className="list-items">
                                <li>
                                  <i className="la la-times text-danger mr-2"></i>
                                  Entrance Fees
                                </li>
                                <li>
                                  <i className="la la-times text-danger mr-2"></i>
                                  Guide Gratuity
                                </li>
                                <li>
                                  <i className="la la-times text-danger mr-2"></i>
                                  Lunch
                                </li>
                                <li>
                                  <i className="la la-times text-danger mr-2"></i>
                                  Dinner
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="section-block"></div>
                      </div>
                      <div id="itinerary" className="page-scroll">
                        <div className="single-content-item padding-top-40px padding-bottom-40px">
                          <h3 className="title font-size-20">Itinerary</h3>
                          <div
                            className="accordion accordion-item padding-top-30px"
                            id="accordionExample"
                          >
                            <div className="card">
                              <div className="card-header" id="faqHeadingOne">
                                <h2 className="mb-0">
                                  <button
                                    className="btn btn-link d-flex align-items-center justify-content-between font-size-16"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#faqCollapseOne"
                                    aria-expanded="true"
                                    aria-controls="faqCollapseOne"
                                  >
                                    <span>
                                      Day 01 - Linfen – Historical place in
                                      Beijing
                                    </span>
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
                                    Mea appareat omittantur eloquentiam ad, nam
                                    ei quas oportere democritum. Prima causae
                                    admodum id est, ei timeam inimicus sed. Sit
                                    an meis aliquam, cetero inermis vel ut. An
                                    sit illum euismod facilisis Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="faqHeadingTwo">
                                <h2 className="mb-0">
                                  <button
                                    className="btn btn-link d-flex align-items-center justify-content-between font-size-16"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#faqCollapseTwo"
                                    aria-expanded="true"
                                    aria-controls="faqCollapseTwo"
                                  >
                                    <span>
                                      Day 02 - Beijing - Temple of Heaven
                                    </span>
                                  </button>
                                </h2>
                              </div>
                              <div
                                id="faqCollapseTwo"
                                className="collapse"
                                aria-labelledby="faqHeadingTwo"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body d-flex align-items-center">
                                  <div className="flex-shrink-0 mt-2 mr-4"></div>
                                  <p>
                                    Mea appareat omittantur eloquentiam ad, nam
                                    ei quas oportere democritum. Prima causae
                                    admodum id est, ei timeam inimicus sed. Sit
                                    an meis aliquam, cetero inermis vel ut. An
                                    sit illum euismod facilisis Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="faqHeadingThree">
                                <h2 className="mb-0">
                                  <button
                                    className="btn btn-link d-flex align-items-center justify-content-between font-size-16"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#faqCollapseThree"
                                    aria-expanded="true"
                                    aria-controls="faqCollapseThree"
                                  >
                                    <span>Day 03 - Jinan to New york</span>
                                  </button>
                                </h2>
                              </div>
                              <div
                                id="faqCollapseThree"
                                className="collapse"
                                aria-labelledby="faqHeadingThree"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body d-flex align-items-center">
                                  <div className="flex-shrink-0 mt-2 mr-4"></div>
                                  <p>
                                    Mea appareat omittantur eloquentiam ad, nam
                                    ei quas oportere democritum. Prima causae
                                    admodum id est, ei timeam inimicus sed. Sit
                                    an meis aliquam, cetero inermis vel ut. An
                                    sit illum euismod facilisis Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                  </p>
                                </div>
                              </div>
                            </div>
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
                            <div className="card">
                              <div className="card-header" id="faqHeadingFour">
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
                                      I'm a solo traveller, is there a single
                                      supplement?
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
                                    Mea appareat omittantur eloquentiam ad, nam
                                    ei quas oportere democritum. Prima causae
                                    admodum id est, ei timeam inimicus sed. Sit
                                    an meis aliquam, cetero inermis vel ut. An
                                    sit illum euismod facilisis Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="faqHeadingFive">
                                <h2 className="mb-0">
                                  <button
                                    className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#faqCollapseFive"
                                    aria-expanded="false"
                                    aria-controls="faqCollapseFive"
                                  >
                                    <span className="ml-3">
                                      Should I book pre/post tour accommodation?
                                    </span>
                                    <i className="la la-minus"></i>
                                    <i className="la la-plus"></i>
                                  </button>
                                </h2>
                              </div>
                              <div
                                id="faqCollapseFive"
                                className="collapse"
                                aria-labelledby="faqHeadingFive"
                                data-parent="#accordionExample2"
                              >
                                <div className="card-body d-flex">
                                  <p>
                                    Mea appareat omittantur eloquentiam ad, nam
                                    ei quas oportere democritum. Prima causae
                                    admodum id est, ei timeam inimicus sed. Sit
                                    an meis aliquam, cetero inermis vel ut. An
                                    sit illum euismod facilisis Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="faqHeadingSix">
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
                                      What is cancellation policy?
                                    </span>
                                    <i className="la la-minus"></i>
                                    <i className="la la-plus"></i>
                                  </button>
                                </h2>
                              </div>
                              <div
                                id="faqCollapseSix"
                                className="collapse"
                                aria-labelledby="faqHeadingSix"
                                data-parent="#accordionExample2"
                              >
                                <div className="card-body d-flex">
                                  <p>
                                    Mea appareat omittantur eloquentiam ad, nam
                                    ei quas oportere democritum. Prima causae
                                    admodum id est, ei timeam inimicus sed. Sit
                                    an meis aliquam, cetero inermis vel ut. An
                                    sit illum euismod facilisis Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="faqHeadingSeven">
                                <h2 className="mb-0">
                                  <button
                                    className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#faqCollapseSeven"
                                    aria-expanded="false"
                                    aria-controls="faqCollapseSeven"
                                  >
                                    <span className="ml-3">
                                      Which currency is most widely accepted on
                                      this tour?
                                    </span>
                                    <i className="la la-minus"></i>
                                    <i className="la la-plus"></i>
                                  </button>
                                </h2>
                              </div>
                              <div
                                id="faqCollapseSeven"
                                className="collapse"
                                aria-labelledby="faqHeadingSeven"
                                data-parent="#accordionExample2"
                              >
                                <div className="card-body d-flex">
                                  <p>
                                    Mea appareat omittantur eloquentiam ad, nam
                                    ei quas oportere democritum. Prima causae
                                    admodum id est, ei timeam inimicus sed. Sit
                                    an meis aliquam, cetero inermis vel ut. An
                                    sit illum euismod facilisis Nullam id dolor
                                    id nibh ultricies vehicula ut id elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
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
                      <SemesterReview data={data} />
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-4">
                <div className="sidebar single-content-sidebar mb-0">
                  {semes.map((item) => {
                    return (
                      <>
                        <div className="sidebar-widget single-content-widget">
                          <div className="sidebar-widget-item">
                            <div className="sidebar-book-title-wrap mb-3">
                              <h3>Semester - {item.name}</h3>
                              <p>
                                <span className="text-form">Program </span>
                                <span className="text-value ml-2 mr-1">
                                  {Object.entries(item.programId).map(
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
                                Total Students
                                <span>
                                  Available Students in Semester - {item.name}
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
                                  Available Teachers in Semester - {item.name}
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
                        <SemesterComplain data={item} />
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

export default Semester;
