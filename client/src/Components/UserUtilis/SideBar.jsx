import React from "react";

const SideBar = () => {
  return (
    <div className="col-lg-4">
      <div class="sidebar single-content-sidebar mb-0">
        <div class="sidebar-widget single-content-widget">
          <div class="sidebar-widget-item">
            <div class="sidebar-book-title-wrap mb-3">
              <h3>Bestseller</h3>
              <p>
                <span class="text-form">From</span>
                <span class="text-value ml-2 mr-1">$399.00</span>{" "}
                <span class="before-price">$412.00</span>
              </p>
            </div>
          </div>
          <div class="sidebar-widget-item">
            <div class="contact-form-action">
              <form action="#">
                <div class="input-box">
                  <label class="label-text">Date</label>
                  <div class="form-group">
                    <span class="la la-calendar form-icon"></span>
                    <input
                      class="date-range form-control"
                      type="text"
                      name="daterange"
                      readonly=""
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="sidebar-widget-item">
            <div class="qty-box mb-2 d-flex align-items-center justify-content-between">
              <label class="font-size-16">
                Adults <span>Age 18+</span>
              </label>
              <div class="qtyBtn d-flex align-items-center">
                <div class="qtyDec">
                  <i class="la la-minus"></i>
                </div>
                <input type="text" name="qtyInput" value="0" />
                <div class="qtyInc">
                  <i class="la la-plus"></i>
                </div>
              </div>
            </div>
            <div class="qty-box mb-2 d-flex align-items-center justify-content-between">
              <label class="font-size-16">
                Children <span>2-12 years old</span>
              </label>
              <div class="qtyBtn d-flex align-items-center">
                <div class="qtyDec">
                  <i class="la la-minus"></i>
                </div>
                <input type="text" name="qtyInput" value="0" />
                <div class="qtyInc">
                  <i class="la la-plus"></i>
                </div>
              </div>
            </div>
            <div class="qty-box mb-2 d-flex align-items-center justify-content-between">
              <label class="font-size-16">
                Infants <span>0-2 years old</span>
              </label>
              <div class="qtyBtn d-flex align-items-center">
                <div class="qtyDec">
                  <i class="la la-minus"></i>
                </div>
                <input type="text" name="qtyInput" value="0" />
                <div class="qtyInc">
                  <i class="la la-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box pt-2">
            <a
              href="tour-booking.html"
              class="theme-btn text-center w-100 mb-2"
            >
              <i class="la la-shopping-cart mr-2 font-size-18"></i>
              Book Now
            </a>
            <a
              href="#"
              class="theme-btn text-center w-100 theme-btn-transparent"
            >
              <i class="la la-heart-o mr-2"></i>Add to Wishlist
            </a>
            <div class="d-flex align-items-center justify-content-between pt-2">
              <a
                href="#"
                class="btn theme-btn-hover-gray font-size-15"
                data-toggle="modal"
                data-target="#sharePopupForm"
              >
                <i class="la la-share mr-1"></i>Share
              </a>
              <p>
                <i class="la la-eye mr-1 font-size-15 color-text-2"></i>
                3456
              </p>
            </div>
          </div>
        </div>
        <div class="sidebar-widget single-content-widget">
          <h3 class="title stroke-shape">Enquiry Form</h3>
          <div class="enquiry-forum">
            <div class="form-box">
              <div class="form-content">
                <div class="contact-form-action">
                  <form method="post">
                    <div class="input-box">
                      <label class="label-text">Your Name</label>
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
                    <div class="input-box">
                      <label class="label-text">Your Email</label>
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
                    <div class="input-box">
                      <label class="label-text">Message</label>
                      <div class="form-group">
                        <span class="la la-pencil form-icon"></span>
                        <textarea
                          class="message-control form-control"
                          name="message"
                          placeholder="Write message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="input-box">
                      <div class="form-group">
                        <div class="custom-checkbox mb-0">
                          <input type="checkbox" id="agreeChb" />
                          <label for="agreeChb">
                            I agree with <a href="#">Terms of Service</a> and
                            <a href="#">Privacy Statement</a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="btn-box">
                      <button type="button" class="theme-btn">
                        Submit Enquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar-widget single-content-widget">
          <h3 class="title stroke-shape">Why Book With Us?</h3>
          <div class="sidebar-list">
            <ul class="list-items">
              <li>
                <i class="la la-dollar icon-element mr-2"></i>
                No-hassle best price guarantee
              </li>
              <li>
                <i class="la la-microphone icon-element mr-2"></i>
                Customer care available 24/7
              </li>
              <li>
                <i class="la la-thumbs-up icon-element mr-2"></i>
                Hand-picked Tours &amp; Activities
              </li>
              <li>
                <i class="la la-file-text icon-element mr-2"></i>Free Travel
                Insureance
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar-widget single-content-widget">
          <h3 class="title stroke-shape">Get a Question?</h3>
          <p class="font-size-14 line-height-24">
            Do not hesitate to give us a call. We are an expert team and we are
            happy to talk to you.
          </p>
          <div class="sidebar-list pt-3">
            <ul class="list-items">
              <li>
                <i class="la la-phone icon-element mr-2"></i>
                <a href="#">+ 61 23 8093 3400</a>
              </li>
              <li>
                <i class="la la-envelope icon-element mr-2"></i>
                <a href="mailto:info@trizen.com">info@trizen.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar-widget single-content-widget">
          <h3 class="title stroke-shape">Organized by</h3>
          <div class="author-content d-flex">
            <div class="author-img">
              <a href="#"></a>
            </div>
            <div class="author-bio">
              <h4 class="author__title">
                <a href="#">royaltravelagency</a>
              </h4>
              <span class="author__meta">Member Since 2017</span>
              <span class="ratings d-flex align-items-center">
                <i class="la la-star"></i>
                <i class="la la-star"></i>
                <i class="la la-star"></i>
                <i class="la la-star"></i>
                <i class="la la-star-o"></i>
                <span class="ml-2">305 Reviews</span>
              </span>
              <div class="btn-box pt-3">
                <a
                  href="#"
                  class="theme-btn theme-btn-small theme-btn-transparent"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
