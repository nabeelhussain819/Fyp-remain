import React, { useState, useEffect } from "react";
import Chart from "../../Components/Charts/Chart";

function Dashboard() {
    const [teacher, setTeacher] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await (await fetch("http://localhost:5000/teacher")).json();
            setTeacher(response);
        };
        getData()
    }, [])

    return (
        <>
            <div className="wrapper ">
                <div className="main-panel">
                    <div className="content">
                        <div className="row">
                            {teacher.map((data) => {
                                return (
                                    Object.entries(data.courseId).map(([i, index]) => {
                                        { console.log(data.courseId) }
                                        return (<>

                                            <div className="col-md-4">
                                                <div className="card card-chart" data-count="0">
                                                    <div className="card-body">
                                                        <h4 className="card-title">{index.name}</h4>
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
                                        </>)
                                    })

                                )

                            })}
                        </div>
                        <div className="container-fluid">
                            <div className="col-md-12">
                                <div className="card ">
                                    <div className="card-header card-header-success card-header-icon">
                                        <h4 className="card-title">
                                            Your Progress
                                        </h4>
                                    </div>
                                    <div className="card-body ">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="table-responsive table-sales"><Chart /></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-success card-header-icon">
                                        <h4 className="card-title">
                                            Your Courses
                                        </h4>
                                    </div>
                                    <div className="card-body ">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="table-responsive table-sales">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td></td>
                                                                <td >Course Name:</td>
                                                                <td className="text-right">Total Students</td>
                                                                <td className="text-right"></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="flag"></div>
                                                                </td>
                                                                <td>USA</td>
                                                                <td className="text-right">2.920</td>
                                                                <td className="text-right">53.23%</td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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
}

export default Dashboard;