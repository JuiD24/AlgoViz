import React from "react";
import { useState, useEffect } from "react";

const Analytics = () => {
  const [score1, setScore1] = useState([
    JSON.parse(window.localStorage.getItem("score1")),
  ]);
  const [score2, setScore2] = useState([
    JSON.parse(window.localStorage.getItem("score2")),
  ]);
  // useEffect(() => {
  //   setScore1(JSON.parse(window.localStorage.getItem("sc")));
  //   setScore2(JSON.parse(window.localStorage.getItem("score2")));
  // }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: "600px",
        top: "200px",
        // backgroundColor: "white",
        // width: "300px",
        // height: "min-content",
      }}
    >
      <h3>Your scores:</h3>
      <div>Quiz 1 score: {score1}</div>
      <div>Quiz 2 score : {score2}</div>
    </div>
  );
};

export default Analytics;
