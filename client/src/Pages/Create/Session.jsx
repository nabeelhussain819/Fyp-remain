import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SessionCreate() {
    const [name, setName] = useState([]);
    const [departmentId, setDepartmentId] = useState("");
    const [depart, setDepart] = useState([]);

    const registerSession = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/createSession", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name,
                departmentId
            }),
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
            toast.warning("Invalid Credentials");
        } else if (res.status === 401) {
            toast.warning("Invalid entry!");
        } else {
            toast.success("Department Created Successfully");
        }
    };

    useEffect(() => {
        const getData = async () => {
            const response = await (
                await fetch("http://localhost:5000/departments")
            ).json();
            setDepart(response);
        };
        getData();
    }, []);
    return (
        <>
            <div className="wrapper ">
                <div className="main-panel">
                    <div className="content">
                        <div className="">
                            <div className="col-md-12 ">
                                <h3>Create Department </h3>
                                <p>
                                    <small>
                                        <a href="">Home</a> / <small> Create Department</small>
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="card-title text-center">Add Department</h2>
                            <div className="card card-signup">
                                <div className="card-body">
                                    <div className="col-md-12">
                                        <form className="form" method="POST">
                                            <div className="form-group has-default bmd-form-group ">
                                                <div className="input-group">
                                                    <div className="input-group-prepend ">
                                                        <span className="input-group-text pr-6 ">
                                                            Session Name :
                                                        </span>
                                                    </div>
                                                    <select
                                                        className="form-select text-center mb-4"
                                                        value={departmentId}
                                                        onChange={(e) => setDepartmentId(e.target.value)}
                                                    >
                                                        <option >----select-one----</option>
                                                        {depart.map((data) => {
                                                            return (
                                                                <>
                                                                    <option className="option" value={data._id}>
                                                                        {data.name}
                                                                    </option>
                                                                </>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="input-group">
                                                    <div className="input-group-prepend ">
                                                        <span className="input-group-text pr-6 ">
                                                            Session Name :
                                                        </span>
                                                    </div>
                                                    <select
                                                        className="form-select text-center mb-4"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    >
                                                        <option >----select-one----</option>
                                                        <option className="option" value="Spring">
                                                            Spring
                                                        </option>
                                                        <option className="option" value="Fall">
                                                            Fall
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="text-center mb-4 ml-4 mr-4">
                                                    <a
                                                        type="submit"
                                                        className="btnLogin btn-primary btn-round mt-4"
                                                        onClick={registerSession}
                                                    >
                                                        Get Started
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
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