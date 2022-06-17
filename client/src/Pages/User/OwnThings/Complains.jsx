import React, { useEffect, useState } from "react";
import myData from "../../../Components/Qec/question.json";
import ComplainBox from "../../../Components/ComplainBox/DepartmentComplain";

const OwnComplain = () => {
  const [dept, setDepart] = useState([]);
  console.log(dept);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/students")
      ).json();
      response.map((data) => setDepart(data.deptId));
    };
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
                    <h2 className="sec__title">Department Details</h2>
                    {dept.map((data) => {
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
      <div className="tour-detail-area padding-top-40px section-bg3">
        <div className="container">
          <div className="row">
            {dept.map((data) => {
              return (
                <>
                  <div className="col-lg-8">
                    <div className="container">
                      <div id="description" className="page-scroll">
                        <div className="single-content-item pb-4">
                          <h3 className="title font-size-26">
                            About Department {data.name}
                          </h3>
                        </div>

                        <div className="single-content-item  padding-bottom-40px">
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
                          <h3 className="title font-size-20">Teachers</h3>
                          <div
                            className="accordion accordion-item padding-top-30px"
                            id="accordionExample"
                          >
                            {Object.entries(data.teacherId)
                              .slice(0, 4)
                              .map(([i, index]) => {
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
                              })}
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
                    </div>
                  </div>
                </>
              );
            })}
            <div className="col-lg-4">
              <div className="sidebar single-content-sidebar mb-0">
                {dept.map((data) => {
                  return (
                    <>
                      <div className="sidebar-widget single-content-widget">
                        <div className="sidebar-widget-item">
                          <div className="sidebar-book-title-wrap mb-3">
                            <h3>{data.name}</h3>
                            <p>
                              <span className="text-form">Total Students</span>
                              <span className="text-value ml-2 mr-1">
                                {data.studentId.length}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="sidebar-widget-item">
                          <div className="contact-form-action">
                            <div className="input-box">
                              <label className="label-text">Created At</label>
                              <div className="form-group">
                                <input
                                  className="date-range form-control"
                                  type="text"
                                  name="daterange"
                                  disabled
                                  value={new Date(
                                    data.createdAt
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
                              Total Programs
                              <span>Available Programs in {data.name}</span>
                            </label>
                            <div className="qtyBtn d-flex align-items-center">
                              <input
                                type="text"
                                name="qtyInput"
                                value={data.programId.length}
                              />
                            </div>
                          </div>
                          <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                            <label className="font-size-16">
                              Total Sessions
                              <span>Available Sessions in {data.name}</span>
                            </label>
                            <div className="qtyBtn d-flex align-items-center">
                              <input
                                type="text"
                                name="qtyInput"
                                value={data.sessionId.length}
                              />
                            </div>
                          </div>
                          <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                            <label className="font-size-16">
                              Total Teachers{" "}
                              <span>Available Teachers in {data.name}</span>
                            </label>
                            <div className="qtyBtn d-flex align-items-center">
                              <input
                                type="text"
                                name="qtyInput"
                                // value={data.teacherId.length}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <ComplainBox data={data} />
                    </>
                  );
                })}

                <div className="sidebar-widget single-content-widget">
                  <h3 className="title stroke-shape">Get a Question?</h3>
                  <p className="font-size-14 line-height-24">
                    Do not hesitate to give us a call. We are an expert team and
                    we are happy to talk to you.
                  </p>
                  <div className="sidebar-list pt-3">
                    <ul className="list-items">
                      <li>
                        <p>+ 61 23 8093 3400</p>
                      </li>
                      <li>
                        <p>hnabeel570@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnComplain;
