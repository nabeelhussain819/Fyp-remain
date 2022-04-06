import React, { useState } from "react";
import { FaRegEnvelope, FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../../Components/Qec/ProgressBar";
import myData from "../../Components/Qec/question.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Qec = () => {
  const [question, setQuestion] = useState(0);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState([]);
  const [teacherId, setTeacherId] = useState([]);
  const [newData, setNewData] = useState([]);
  const answerClick = () => {
    const nextQuestion = question + 1;
    if (nextQuestion < myData.length) {
      setShow(true);
      setQuestion(nextQuestion);
    } else {
      const res = fetch("http://localhost:5000/createDepart", {
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
    <>
      <section class=" cta-area section-bg-2 subscriber-area ">
        <div className="hero-box ">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <div class="container">
                      <h2 className="sec__title font-size-30 text-white">
                        QEC FORM
                      </h2>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <svg
            class="hero-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
          </svg>{" "}
        </div>
      </section>
      <div class="container-fluid ">
        <div class="col-lg-12 ">
          <div class="form-box">
            <div class="form-content">
              <div class="comments-list">
                <div class="comment">
                  <div class="comment-avatar"></div>
                  <div class="comment-body ">
                    <div class="meta-data">
                      <h3 class="comment__author">
                        Question {question} Out of {myData.length}
                      </h3>
                      <div class="meta-data-inner d-flex">
                        <p class="comment__meta mr-1 ">
                          {myData[question].category}
                        </p>
                      </div>
                    </div>
                    <p class="comment-content font-size-19">
                      {myData[question].question}
                    </p>
                    <div class="comment-reply ">
                      {myData[question].score.map((data) => {
                        return (
                          <button
                            className="bg-transparent  border-0 text-warning"
                            onClick={() => result(data)}
                            value={data}
                          >
                            <FaStar size={32} />
                          </button>
                        );
                      })}
                    </div>
                    {show && (
                      <button
                        className="btn btn-primary btn-round mt-4"
                        onClick={answerClick}
                      >
                        next Question
                      </button>
                    )}
                  </div>
                </div>
                <ProgressBar data={question} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qec;
