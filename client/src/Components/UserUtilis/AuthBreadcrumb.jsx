import React, { useState } from "react";

const AuthBread = () => {
  const [name, setName] = useState("");
  function searchData(e) {
    let data = e.target.value;
    setName(data);
  }
  return (
    <section className="breadcrumb-area gradient-bg-gray before-none pb-4 pt-4">
      <div className="breadcrumb-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content text-center">
                <div className="section-heading">
                  <h2 className="sec__title text-dark">
                    How Can We Help You Today?
                  </h2>
                </div>
                <div className="row">
                  <div className="col-lg-6 mx-auto">
                    <div className="contact-form-action pt-4">
                      <form>
                        <input
                          className="form-control"
                          type="text"
                          value={name}
                          placeholder="Search..."
                          onChange={searchData}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthBread;
