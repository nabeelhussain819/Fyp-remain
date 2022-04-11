import React from "react";
import user from "../../../Assets/marc.jpg";
export const Profile = () => {
  const name = localStorage.getItem("data");
  const phone = localStorage.getItem("phone");
  const u_id = localStorage.getItem("u_id");
  const email = localStorage.getItem("email");
  const teacher = localStorage.getItem("isTeacher");
  return (
    <>
      <div className="dashboard-content-wrap">
        <div className="dashboard-bread dashboard-bread-2">
          <div className="container-fluid">
            <div class="arrow-separator"></div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title font-size-30 text-white">
                      Profile
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="index.html" className="text-white">
                        Dashboard
                      </a>
                    </li>
                    <li>Profile</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="form-box">
            <div className="container-fluid p-4">
              <div className="row">
                <div className="col-md-8">
                  <div className="contact-form-action">
                    <div className="title">
                      <h4 className="card-title">{name} Profile</h4>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="bmd-label-floating">
                                Username
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={name}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="bmd-label-floating">
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="bmd-label-floating">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={phone}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="bmd-label-floating">
                                Universit ID
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={u_id}
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="bmd-label-floating">
                                Department
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="bmd-label-floating">
                                Program
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label className="bmd-label-floating">
                                Semester
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>About Me</label>
                              <div className="form-group">
                                <label className="bmd-label-floating">
                                  {" "}
                                  Lamborghini Mercy, Your chick she so thirsty,
                                  I'm in that two seat Lambo.
                                </label>
                                <textarea
                                  className="form-control"
                                  rows="5"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-rose pull-right"
                        >
                          Update Profile
                        </button>
                        <div className="clearfix"></div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-form-action">
                    <div className="user-pro-img">
                      <img src={user} />
                    </div>
                    <div className="card-body">
                      {teacher ? (
                        <h6 className="card-category text-gray">Teacher</h6>
                      ) : (
                        <h6 className="card-category text-gray">Student</h6>
                      )}

                      <h4 className="card-title">{name}</h4>
                      <p className="card-description">
                        Don't be scared of the truth because we need to restart
                        the human foundation in truth And I love you like Kanye
                        loves Kanye I love Rick Owens’ bed design but the back
                        is...
                      </p>
                      <a href="#pablo" className="btn btn-rose btn-round">
                        Follow
                      </a>
                    </div>
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
