import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myData from "../../Components/Authentication/RegisterForm";
import { FaTimesCircle, FaPlusCircle } from "react-icons/fa";
function CreateCourse(props) {
  const [data, setdata] = useState([]);
  const [result, setResult] = useState([]);
  const [formValues, setFormValues] = useState([{ subject: "" }]);
  //   console.log(props);
  let addFormFields = () => {
    const obj = {};
    setResult(data, obj);
    console.log(result);
    setFormValues([...formValues, { subject: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };
  return (
    <div>
      <form className="" method="POST">
        {formValues.map((element, index) => (
          <>
            <div className="input-group">
              <div className="input-group-prepend ">
                <span className="input-group-text">Add Course :</span>
              </div>

              <input
                type="text"
                name="subject"
                className="form-control text-center"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                // value={element.subject || ""}
                onChange={(e) => setdata(e.target.value)}
              />
              {index ? (
                <a
                  type="button"
                  className="mt-2 ml-2"
                  onClick={() => removeFormFields(index)}
                >
                  <FaTimesCircle size={22} className="text-danger" />
                </a>
              ) : null}

              <a
                className="mt-2 ml-2 text-success"
                type="button"
                onClick={() => addFormFields()}
              >
                <FaPlusCircle size={22} />
              </a>
            </div>
          </>
        ))}
      </form>
    </div>
  );
}

export default CreateCourse;
