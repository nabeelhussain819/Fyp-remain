import React from "react";

function Section1() {
  return (
    <section className="cta-area cta-bg bg-fixed section-padding text-center ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2 className="sec__title text-white font-size-50 line-height-60">
                {localStorage.getItem("data")}, We welcome to your Account!
              </h2>
              <p className="sec__desc text-white pt-3">
                Weclome to the best portal to evaluate your guaider{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
