import React from "react";
import { useState, useEffect } from "react";
import Node from "./Node.jsx";
import { dfs_bfs, getNodesInShortestPathOrder } from "./Algorithms/dfsbfs";
import { dijkstra, getNodesInShortestPath } from "./Algorithms/dijkstra";
import "./PathfindingVisualizer.css";

const START_NODE_ROW = 5;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 15;
const FINISH_NODE_COL = 20;

const PathfindingVisualizer = () => {
  const [nodes, setNodes] = useState([]);
  const [mouseIsPressed, setmouseIsPressed] = useState(false);

  useEffect(() => {
    getNodes();
  }, []);

  const getNodes = () => {
    const nodes = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 40; col++) {
        const currentNode = {
          col,
          row,
          isStart: row === START_NODE_ROW && col === START_NODE_COL,
          isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
          isVisited: false,
          id: `${row.toString()}-${col.toString()}`,
          previousNode: null,
          isWall: false,
          isPath: false,
          distance: Infinity,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    setNodes(nodes);
    // console.log(nodes);
  };

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(nodes, row, col);
    setNodes(newGrid);
    setmouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(nodes, row, col);
    setNodes(newGrid);
  };

  const handleMouseUp = () => {
    setmouseIsPressed(false);
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const newGrid = nodes.slice();
        const newNode = {
          ...node,
          isPath: true,
        };
        newGrid[node.row][node.col] = newNode;
        setNodes(newGrid);
      }, 50 * i);
    }
  };

  const animateNodes = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    // console.log("hh", visitedNodesInOrder);
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }

      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const newGrid = nodes.slice();
        const newNode = {
          ...node,
          isVisited: true,
        };
        newGrid[node.row][node.col] = newNode;
        setNodes(newGrid);
      }, 10 * i);
    }
  };

  const visualizeDijkstra = () => {
    const visitedNodesInOrder = dijkstra(
      nodes,
      nodes[START_NODE_ROW][START_NODE_COL],
      nodes[FINISH_NODE_ROW][FINISH_NODE_COL]
    );

    const nodesInShortestPathOrder = getNodesInShortestPath(
      nodes[FINISH_NODE_ROW][FINISH_NODE_COL]
    );

    animateNodes(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  const visualizeDFSBFS = (name) => {
    const visitedNodesInOrder = dfs_bfs(
      nodes,
      nodes[START_NODE_ROW][START_NODE_COL],
      nodes[FINISH_NODE_ROW][FINISH_NODE_COL],
      name
    );
    // console.log(visitedNodesInOrder);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(
      nodes[FINISH_NODE_ROW][FINISH_NODE_COL]
    );
    // console.log(nodesInShortestPathOrder);
    animateNodes(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  return (
    <div className="array-container-bfs-dfs">
      <div style={{ paddingBottom: "30px" }}>
        <button className="button2" onClick={() => visualizeDFSBFS("dfs")}>
          Visualize DFS's Algorithm
        </button>
        <button className="button2" onClick={() => visualizeDFSBFS("bfs")}>
          Visualize BFS's Algorithm
        </button>
        <button className="button2" onClick={() => visualizeDijkstra()}>
          Visualize Dijkstra Algorithm
        </button>
        <button className="button2" onClick={() => getNodes()}>
          Clear Grid
        </button>
      </div>
      <div className="grid">
        {nodes.map((row, rowId) => {
          return (
            <div key={rowId}>
              {row.map((node, nodeId) => {
                const {
                  row,
                  col,
                  isStart,
                  isFinish,
                  isVisited,
                  isPath,
                  isWall,
                } = node;
                // console.log(node);
                return (
                  <Node
                    key={nodeId}
                    isStart={isStart}
                    isFinish={isFinish}
                    isVisited={isVisited}
                    isPath={isPath}
                    isWall={isWall}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                    onMouseUp={() => handleMouseUp()}
                    row={row}
                    col={col}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
export default PathfindingVisualizer;
