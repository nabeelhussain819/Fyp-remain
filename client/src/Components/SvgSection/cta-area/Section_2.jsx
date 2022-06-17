import React from "react";

function Section2() {
  return (
    <section className="cta-area cta-bg bg-fixed section-padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2 className="sec__title text-white font-size-50 line-height-60">
                Relax with us. We love Our Clients.
              </h2>
              <p className="sec__desc text-white pt-3">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              </p>
            </div>
            <div className="btn-box padding-top-35px">
              <a href="become-local-expert.html" className="theme-btn border-0">
                Become Local Expert
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg className="cta-svg" viewBox="0 0 500 150" preserveAspectRatio="none">
        <path d="M-31.31,170.22 C164.50,33.05 334.36,-32.06 547.11,196.88 L500.00,150.00 L0.00,150.00 Z"></path>
      </svg>
    </section>
  );
}

export default Section2;
