import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import myData from "../../Components/Authentication/RegisterForm";
import CreateCourse from './Course';
import CreateSemester from './Semester';
import CreateProgram from './Program';
function CreateDepartment() {
    // const [nextField, setNextFeild] = useState(0);
    // const [apendState, setApendState] = useState([]);
    // const [newData, setNewData] = useState([]);

    // function Data(e) {
    //     setApendState(e.target.value);
    //     console.log(newData)
    // }

    return (
        <div>
            <div className=""><h2 className="card-title text-center">Add Department</h2>
                <div className="card card-signup">

                    <div className="card-body">
                        <div className="col-md-12">
                            <form className="form" method="POST" >
                                <div className="form-group has-default bmd-form-group ">

                                    <div className="input-group" >
                                        <div className="input-group-prepend ">
                                            <span className="input-group-text pr-6 ">
                                                Department Name :
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control text-center mr-4 "
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            required
                                        // value={element.subject || ""}
                                        // onChange={e => handleChange(index, e)}
                                        />
                                    </div>
                                    <div className="col-md-12" > <CreateProgram /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CreateDepartment