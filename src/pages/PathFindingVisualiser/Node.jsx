import React from "react";
import "./Node.css";

const Node = ({
  isStart,
  isFinish,
  isVisited,
  isPath,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  row,
  col,
}) => {
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isVisited
    ? "node-visited"
    : isPath
    ? "node-shortest-path"
    : isWall
    ? "node-wall"
    : "";
  return (
    <div
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></div>
  );
};

export default Node;

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
