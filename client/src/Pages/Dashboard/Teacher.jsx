import React from "react";

function Dashboard() {
    return (
        <>
            <div className="wrapper ">
                <div className="main-panel">
                    <div className="content">

                        <div className="container-fluid">
                            <div className="col-md-12">

                                <div className="card ">
                                    <div className="card-header card-header-success card-header-icon">
                                        <div className="card-icon">
                                            <i className="material-icons"></i>
                                        </div>
                                        <h4 className="card-title">
                                            Global Sales by Top Locations
                                        </h4>
                                    </div>
                                    <div className="card-body ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="table-responsive table-sales"></div>
                                            </div>
                                            <div className="col-md-6 ml-auto mr-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <div className="col-md-4">
                                    <div className="card card-chart" data-count="0">
                                        <div
                                            className="card-header card-header-success"
                                            data-header-animation="true"
                                        ></div>
                                        <div className="card-body">
                                            <h4 className="card-title">Daily Sales</h4>
                                            <p className="card-category">
                                                <span className="text-success">
                                                    <i className="fa fa-long-arrow-up"></i> 55%{" "}
                                                </span>{" "}
                                                increase in today sales.
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4
                                                minutes ago
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;