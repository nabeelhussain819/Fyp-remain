import React, { useEffect, useState } from "react";
import myData from "../../../Components/Qec/question.json";
import ComplainBox from "../../../Components/ComplainBox/Program";
const OwnProgram = () => {
  const [program, setCourses] = useState([]);
  console.log(program);
  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("https://new819.herokuapp.com/students")
      ).json();
      response.map((data) =>
        localStorage.getItem("id") == data._id ? setCourses([data]) : null
      );
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
                    <h2 className="sec__title">Program Details</h2>
                    {program.map((data) => {
                      return (
                        <p className="sec__desc font-weight-regular pb-2">
                          {Object.entries(data.programId).map(([i, index]) => {
                            return index.name;
                          })}
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
            {program.map((data) => {
              return (
                <>
                  {Object.entries(data.deptId).map(([i, index]) => {
                    return (
                      <div className="col-lg-8">
                        <div className="container">
                          <div id="description" className="page-scroll">
                            <div className="single-content-item pb-4">
                              <h3 className="font-size-26">
                                About Program {data.name}
                              </h3>
                            </div>

                            <div className="single-content-item  padding-bottom-40px">
                              <h3 className="font-size-20">Description</h3>
                              <p className="py-3">
                                Per consequat adolescens ex, cu nibh commune
                                temporibus vim, ad sumo viris eloquentiam sed.
                                Mea appareat omittantur eloquentiam ad, nam ei
                                quas oportere democritum. Prima causae admodum
                                id est, ei timeam inimicus sed. Sit an meis
                                aliquam, cetero inermis vel ut. An sit illum
                                euismod facilisis, tamquam vulputate pertinacia
                                eum at.
                              </p>
                              <p className="pb-4">
                                Cum et probo menandri. Officiis consulatu pro
                                et, ne sea sale invidunt, sed ut sint blandit
                                efficiendi. Atomorum explicari eu qui, est enim
                                quaerendum te. Quo harum viris id. Per ne quando
                                dolore evertitur, pro ad cibo commune.
                              </p>
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
                                              Mea appareat omittantur
                                              eloquentiam ad, nam ei quas
                                              oportere democritum. Prima causae
                                              admodum id est, ei timeam inimicus
                                              sed. Sit an meis aliquam, cetero
                                              inermis vel ut. An sit illum
                                              euismod facilisis Nullam id dolor
                                              id nibh ultricies vehicula ut id
                                              elit.
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
                        </div>
                      </div>
                    );
                  })}
                </>
              );
            })}
            <div className="col-lg-4">
              <div className="sidebar single-content-sidebar mb-0">
                {program.map((data) => {
                  return (
                    <>
                      {Object.entries(data.deptId).map(([i, index]) => {
                        return (
                          <div className="sidebar-widget single-content-widget">
                            <div className="sidebar-widget-item">
                              <div className="sidebar-book-title-wrap mb-3">
                                <h3>{data.name}</h3>
                              </div>
                            </div>
                            <div className="sidebar-widget-item">
                              <div className="contact-form-action">
                                <div className="input-box">
                                  <label className="label-text">
                                    Created At
                                  </label>
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
                        );
                      })}
                      <ComplainBox data={data} />
                    </>
                  );
                })}

                <div className="sidebar-widget single-content-widget">
                  <h3 className="stroke-shape">Get a Question?</h3>
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

export default OwnProgram;
