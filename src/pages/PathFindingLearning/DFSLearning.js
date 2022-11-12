import React from "react";
import "./Learning.css";

var im = require("./dfs.png");

const DFSLearning = () => {
  return (
    <div className="array-container-learn">
      <h2>Depth First Search</h2>
      <p>
        A recursive algorithm that makes use of backtracking is the DFS
        algorithm. It entails thorough searches of every node by moving forward
        if possible or backtracking if necessary.
      </p>
      <div>
        <h3>How does DFS Work?</h3>
        <p>
          When there are no more nodes along the current path and you are
          traveling ahead, the term "backtrack" refers to moving backwards along
          the same path in order to discover nodes to traverse. Until all of the
          unvisited nodes have been traveled, all of the nodes on the current
          path will be visited. At that point, the new path will be chosen.
        </p>

        <p>
          This recursive nature of DFS can be implemented using stacks. The
          basic idea is as follows:
        </p>
        <li>
          Pick a starting node and push all its adjacent nodes into a stack.
        </li>
        <li>
          To choose the next node to visit, pop a node from the stack, and push
          all of its neighboring nodes into a stack.
        </li>
        <li>
          Up till the stack is empty, repeat this step. Make sure the nodes that
          are visited are noted, though. This will prevent you from visiting the
          same node more than once. If the nodes that are visited are not
          marked, you may end up in an infinite loop.
        </li>

        <h4>Traversing process</h4>
        <img src={im} width="1200" height="300" />
        <p>
          The traversing will start from the source node 1 and push 1 in stack.
          1 will be marked as 'visited'.
        </p>

        <h5>First iteration - stack: [1]</h5>
        <ul>
          <li>1 will be popped from the stack</li>
          <li>Neighbors of 1 i.e. 3 and 2 will be Pushed in stack </li>
          <li>
            3 and 2, which have not been visited earlier, are Pushed in stack
            and will be marked as 'visited'.
          </li>
        </ul>

        <h5>Second iteration - stack: [3, 2]</h5>
        <ul>
          <li>2 is popped from the stack.</li>
          <li>
            Neighbors of 2 i.e. 5 and 4 are pushed in the stack and will be
            marked as 'visited'.
          </li>
          <li>1 is ignored because it is marked as 'visited'</li>
        </ul>

        <h5>Third iteration - stack: [3, 5, 4]</h5>
        <ul>
          <li>4 is popped from the stack </li>
          <li>Neighbors of 4 i.e. 2 is traversed</li>
          <li>2 is ignored because it is marked as 'visited'</li>
        </ul>

        <h5>Fourth iteration - stack: [3,5]</h5>
        <ul>
          <li>5 is popped from the stack </li>
          <li>Neighbors of 5 i.e. 2 is traversed</li>
          <li>2 is ignored because it is marked as 'visited'</li>
        </ul>

        <h5>Fifth iteration - stack: [3]</h5>
        <ul>
          <li>3 is popped from the stack </li>
          <li>Neighbors of 3 i.e. 1 is traversed</li>
          <li>1 is ignored because it is marked as 'visited'</li>
        </ul>

        <h4>
          The time complexity of DFS is O(V + E), where V is the number of nodes
          and E is the number of edges.
        </h4>
      </div>
    </div>
  );
};

export default DFSLearning;
