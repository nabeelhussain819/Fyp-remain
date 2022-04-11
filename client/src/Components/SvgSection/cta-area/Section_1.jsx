import React from "react";

function Section1() {
  return (
    <section class="cta-area cta-bg bg-fixed section-padding text-center mt-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2 class="sec__title text-white font-size-50 line-height-60">
                {localStorage.getItem("data")}, We welcome to your Account!
              </h2>
              <p class="sec__desc text-white pt-3">
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
