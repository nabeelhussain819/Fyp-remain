import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import myData from "../../Components/Authentication/RegisterForm";
import CreateCourse from './Course';
import { FaTimesCircle, FaPlusCircle } from "react-icons/fa";
function CreateSemester() {
    // const [nextField, setNextFeild] = useState(0);
    // const [apendState, setApendState] = useState([]);
    // const [newData, setNewData] = useState([]);
    const [formValues, setFormValues] = useState([{ subject: "" }])
    // function Data(e) {
    //     setApendState(e.target.value);
    //     console.log(newData)
    // }


    let addFormFields = () => {
        setFormValues([...formValues, { subject: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    return (
        <div>
            {formValues.map((element, index) => (
                <>
                    <div className="input-group">
                        <div className="input-group-prepend ">
                            <span className="input-group-text">
                                Add Semester :
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
                        <a className="mt-3 mr-3 text-success" type="button" onClick={() => addFormFields()}><FaPlusCircle size={22} /></a>
                        {
                            index ?
                                <a type="button" className='mt-3 text-danger' onClick={() => removeFormFields(index)}><FaTimesCircle size={22} /></a>
                                : null
                        }</div>
                    <div className="col-md-12"> <CreateCourse /></div>

                </>
            ))}
        </div >
    )
}

export default CreateSemester