import React, { useState } from "react";
import ProgressBar from "../../../Components/Qec/ProgressBar";
import myData from "../../../Components/Qec/question.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEnvelope, FaStar } from "react-icons/fa";
const StudentQec = () => {
  const [question, setQuestion] = useState(0);
  const [show, setShow] = useState(true);
  const [score, setScore] = useState([]);
  const [teacherId, setTeacherId] = useState([]);
  const [newData, setNewData] = useState([]);
  const answerClick = () => {
    const nextQuestion = question + 1;
    if (nextQuestion < myData.length) {
      setShow(true);
      setQuestion(nextQuestion);
    } else {
      const res = fetch("https://new819.herokuapp.com/createDepart", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          score,
          teacherId,
        }),
      });
      const data = res.json();
      if (res.status === 400 || !data) {
        toast.warning("Invalid Credentials");
      } else if (res.status === 401) {
        toast.warning("Invalid entry!");
      } else {
        toast.success("QEC completed Successfully");
      }
    }
  };
  const result = (data) => {
    const arr = [data];
    setScore((score) => [...score].concat(arr));
    const red = score.reduce((i, o) => {
      return i + o;
    });
    console.log(red);
    setShow(true);
  };
  return (
    <div className="wrapper ">
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <div className="col-md-12 ">
              <div className="col-md-10 ml-auto mr-auto">
                <div className="card card-signup">
                  <h2 className="card-title text-center">
                    Question {question} Out of {myData.length}
                  </h2>
                  <p className="card-title text-center">
                    {myData[question].category}
                  </p>
                  <ProgressBar data={question} />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 mr-auto text-center">
                        <span>
                          <h3>{myData[question].question}</h3>
                        </span>
                        <hr />
                        <div className="social text-center">
                          {myData[question].score.map((data) => {
                            return (
                              <button
                                className="bg-transparent text-warning"
                                onClick={() => result(data)}
                                value={data}
                              >
                                <FaStar size={32} />
                                {data}
                              </button>
                            );
                          })}
                        </div>
                        {show && (
                          <div className="text-center">
                            <button
                              className="btn btn-primary btn-round mt-4"
                              onClick={answerClick}
                            >
                              next Question
                            </button>
                          </div>
                        )}
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
  );
};

export default StudentQec;
