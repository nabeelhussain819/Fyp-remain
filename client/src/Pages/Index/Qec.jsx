import React, { useState } from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../../Components/Qec/ProgressBar";
import myData from '../../Components/Qec/question.json'

const Qec = () => {
    const [question, setQuestion] = useState(0);
    const [show, setShow] = useState(false);
    const [score, setScore] = useState(1);
    console.log(show)
    const answerClick = () => {
        const nextQuestion = question + 1;
        if (nextQuestion < myData.length) {
            setShow(false);
            setQuestion(nextQuestion);
        } else {
            setQuestion(20);
        }
    };
    const result = (isCorrect) => {
        if (!isCorrect) {
            const newScore = score + 1;
            setScore(newScore);
        }
        const hello = true;
        setShow(hello);
    };
    return (
        <>
            <div className="off-canvas-sidebar">
                <div className="wrapper wrapper-full-page">
                    <div
                        className="page-header register-page header-filter"
                        filter-color="black"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="card card-signup">
                                        <h2 className="card-title text-center">Question {question} Out of {myData.length}</h2>
                                        <p className="card-title text-center">{myData[question].category}</p>
                                        <ProgressBar data={question} />
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12 mr-auto text-center">
                                                    <span>
                                                        <h3>{myData[question].question}</h3>
                                                    </span>
                                                    <hr />
                                                    <div className="social text-center">
                                                        {myData[question].answer.map((data) => {
                                                            return (
                                                                <button className="btn btn-round btn-twitter" onClick={result}
                                                                    value={data}
                                                                >
                                                                    {data}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                    {show &&
                                                        <><div className="text-center">

                                                            <button className="btn btn-primary btn-round mt-4" onClick={answerClick}>
                                                                next Question
                                                            </button>
                                                        </div>
                                                        </>
                                                    }
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
    )
}

export default Qec