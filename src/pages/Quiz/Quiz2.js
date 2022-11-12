import React from "react";
import "./Quiz.css";
import { questions } from "../../Data/Data";
import { useState, useEffect } from "react";

const Quiz2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("score2")) > 0) {
      setShowScore(true);
      setScore(JSON.parse(window.localStorage.getItem("score2")));
    }
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      window.localStorage.setItem("score2", JSON.stringify(score + 1));
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    console.log(JSON.parse(window.localStorage.getItem("score2")));
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text" style={{ whiteSpace: "pre-wrap" }}>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="button"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz2;
