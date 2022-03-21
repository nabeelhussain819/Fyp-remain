import React, { useState } from "react";
import Header from "../../headers/student/NavBar";
import ProgressBar from "./ProgressBar";
import myData from "./question.json";

function Index() {
  const [question, setQuestion] = useState(0);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(1);
  const [style, setStyle] = useState("cont");
  const [blur, setBlur] = useState(false);
  const answerClick = (isCorrect) => {
    const nextQuestion = question + 1;
    if (nextQuestion < myData.length) {
      const notHello = false;
      setShow(notHello);
      setStyle("cont");
      setBlur(false);
      setQuestion(nextQuestion);
    } else {
      setQuestion(20);
    }
  };
  const result = (isCorrect) => {
    if (!isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      setStyle("cont2");
      setBlur(true);
    }
    setBlur(true);
    setStyle("cont2");
    const hello = true;
    setShow(hello);
  };

  //   if (question === myData.length) {
  //     return <Result data={score - 1} change={question} />;
  //   }

  return (
    <div className="fixed-bg" style={{ height: "100%" }}>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <ProgressBar data={question} />
      <div style={{ marginTop: "120px" }} className="fixed-bg">
        <div style={{ float: "left", marginLeft: "120px" }}>
          <h1>
            Question {question} Out of {myData.length}
          </h1>
          <p style={{ float: "left" }}>{myData[question].category}</p>
        </div>
        <br />
        <br />
        <div style={{ marginTop: "120px" }}>
          <h3>{myData[question].question}</h3>
          {myData[question].answer.map((data) => {
            return (
              <>
                <button
                  className="answers"
                  onClick={result}
                  disabled={blur}
                  value={data}
                >
                  {data}
                </button>
              </>
            );
          })}

          <br />

          {show === true ? (
            <>
              <br />
              <br />
              <br />
              <button className="answers1" onClick={answerClick}>
                next Question
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Index;
