import React, { useState, useEffect } from 'react'
import { FaRegEnvelope, FaUnlockAlt } from "react-icons/fa";
import NavBarLogin from "../../Components/Header/LoginNavbar";

function ExtendedRegisterForm() {
    //   const [deptId, setDeptId] = useState("");
    //   const [depart, setDepart] = useState("");
    //   const [programId, setProgramId] = useState("");
    //   const [program, setProgram] = useState([]);
    //   const [semesterId, setSmesterId] = useState([]);
    //   const [semester, setSmester] = useState([]);

    // const getData = async () => {
    //   const response = await fetch("http://localhost:5000/departments");
    //   setDepart(await response.json());
    // };
    // const getProgram = async () => {
    //   const response = await fetch("http://localhost:5000/readProgram");
    //   setProgram(await response.json());
    // };
    // const getsemester = async () => {
    //   const response = await fetch("http://localhost:5000/semesters");
    //   setSmester(await response.json());
    // };
    // useEffect(() => {
    //   getProgram();
    //   getData();
    //   getsemester();
    // }, []);
    return (
        <>
            <div className="off-canvas-sidebar">
                <NavBarLogin />
                <div className="wrapper wrapper-full-page">
                    <div
                        className="page-header register-page header-filter"
                        filter-color="black"
                    >
                        <div className="container">
                            <div className="col-md-12 ml-auto mr-auto">
                                <div className="card card-signup border-0">
                                    <h2 className="card-title text-center">SIGN UP</h2>
                                    <div className="card-body">
                                        <div className="col-md-12">
                                            <div className=" text-center ml-4">
                                                <h4 className="mt-3">Add Department To Your Profile...</h4>
                                            </div>
                                            <form className="form " method="POST" action="">

                                                <div>
                                                    <a
                                                        type="submit"
                                                        className="btnLogin btn-primary ml-4 btn-round mt-4"
                                                    // onClick={loginUser}
                                                    >
                                                        Get Started
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default ExtendedRegisterForm