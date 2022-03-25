import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

function Program() {
    //   const [depart, setDepart] = useState([]);
    //   const getData = async () => {
    //     const response = await fetch("http://localhost:5000/departments");
    //     setDepart(await response.json());
    //   };
    //   useEffect(() => {
    //     getData();
    //   }, []);
    return (
        <>
            <div className="wrapper ">
                <div className="main-panel">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="col-md-12 ">
                                <h3> Programs   <a href="create" style={{ float: "right" }}>Add Program</a></h3>
                                <p><small ><a href="">Home</a>  / <small> Programs</small></small></p>
                            </div>
                        </div>
                        <div className="row">
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <div className="col-md-4">
                                    <div className="card card-chart" data-count="0">
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
                        <div className="row">
                            <div className="table-responsive table-sales">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="flag">
                                                </div>
                                            </td>
                                            <td>USA</td>
                                            <td className="text-right">
                                                2.920
                                            </td>
                                            <td className="text-right">
                                                53.23%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="flag">
                                                </div>
                                            </td>
                                            <td>Germany</td>
                                            <td className="text-right">
                                                1.300
                                            </td>
                                            <td className="text-right">
                                                20.43%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="flag">
                                                </div>
                                            </td>
                                            <td>Australia</td>
                                            <td className="text-right">
                                                760
                                            </td>
                                            <td className="text-right">
                                                10.35%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="flag">
                                                </div>
                                            </td>
                                            <td>United Kingdom</td>
                                            <td className="text-right">
                                                690
                                            </td>
                                            <td className="text-right">
                                                7.87%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="flag">
                                                </div>
                                            </td>
                                            <td>Romania</td>
                                            <td className="text-right">
                                                600
                                            </td>
                                            <td className="text-right">
                                                5.94%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="flag">
                                                </div>
                                            </td>
                                            <td>Brasil</td>
                                            <td className="text-right">
                                                550
                                            </td>
                                            <td className="text-right">
                                                4.34%
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Program;