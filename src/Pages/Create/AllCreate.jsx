import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateCourse from "./Course";
import myData from "../../Components/Authentication/RegisterForm";
import CreateSemester from "./Semester";
import CreateProgram from "./Program";
import CreateDepartment from "./Department";

const AllCreate = () => {
    const [submitButton, setSubmitButton] = useState(false);
    const [nextButton, setNextButton] = useState(true);
    const [nextField, setNextFeild] = useState(0);

    const [apendState, setApendState] = useState([]);
    const [newData, setNewData] = useState([]);
    function Handle() {
        const Change = nextField + 1;
        var obj = { [myData[nextField].name]: apendState };
        setNewData((newData) => [...newData, obj]);
        setNextFeild(Change);
        setApendState("");
        if (nextField === myData.length - 1) {
            setSubmitButton(true);
            setNextButton(false);
            setNextFeild(0);
        }
    }

    return (
        <>
            <div className="wrapper ">
                <div className="main-panel">
                    <div className="content">
                        <div className="">
                            <div className="col-md-12 ">
                                <h3>Create Department </h3>
                                <p><small ><a href="">Home</a>  / <small> Create Department</small></small></p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <CreateDepartment />
                            <div className="text-center mb-4 ml-4 mr-4">
                                {submitButton && (
                                    <a
                                        type="submit"
                                        className="btnLogin btn-primary btn-round mt-4"
                                    //   onClick={registerUser}
                                    >
                                        Get Started
                                    </a>
                                )}
                                {nextButton && (
                                    <>
                                        <a
                                            type="submit"
                                            className="btnLogin btn-primary btn-round mt-4"
                                            onClick={Handle}
                                        >
                                            Next
                                        </a>
                                    </>
                                )}
                            </div></div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCreate;