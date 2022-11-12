import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
const Card = (props) => {
  return (
    <div
      className="Card"
      style={{
        background: props.color.backGround,
        boxShadow: props.color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={props.barValue}
          text={`${props.barValue}%`}
        />
        <span>{props.title}</span>
      </div>
      <div className="detail">
        <props.png />
      </div>
    </div>
  );
};

export default Card;
