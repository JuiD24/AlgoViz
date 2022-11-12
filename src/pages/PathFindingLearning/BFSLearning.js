import React from "react";
import "./Learning.css";
// var page = require("./bubbleSort.html");
var im = require("./bfs1.PNG");
var im2 = require("./bfs3.png");
const BFSLearning = () => {
  return (
    <div className="array-container-learn">
      <h2>Breadth First Search</h2>
      <p>
        BFS is a traversal algorithm that requires you to explore neighbor nodes
        (nodes which are directly connected to source node) by traversing the
        graph layer-by-layer starting from a chosen node (source or starting
        node). Then, you must go in the direction of the neighbor nodes on the
        following level.
      </p>
      <div>
        <h3>How does BFS Work?</h3>
        <p>
          You must move through the graph breadthwise in the manner described
          below
        </p>
        <li>
          First move horizontally and visit all the nodes of the current layer
        </li>
        <li>Move to the next layer</li>
        <p>
          <img src={im} width="500" height="300" />
        </p>

        <p>
          Cycles in a graph could lead you back to the same node while you're
          traversing it. Use a boolean array to mark the node as "visited" so
          that it doesn't need to be processed again.
        </p>
        <p>
          In the earlier diagram, Start with node 0 and visit its children 1, 2,
          and 3. Keep them in the order that you visit them. You can then visit
          the child nodes of 1 first(i.e., 4 and 5), then of 2 (i.e., 6 and 7),
          and then of 3 (i.e., 7), etc.
        </p>
        <p>BFS uses a queue data structure for traversal.</p>

        <h4>Traversing process</h4>
        <img src={im2} width="1200" height="300" />
        <p>
          The traversing will start from the source node and push s in queue. s
          will be marked as 'visited'.
        </p>
        <h5>First iteration</h5>
        <ul>
          <li>s will be popped from the queue</li>
          <li>Neighbors of s i.e. 1 and 2 will be traversed </li>
          <li>
            1 and 2, which have not been traversed earlier, are traversed. They
            will be
            <ul>
              <li>Pushed in the queue</li>
              <li>1 and 2 will be marked as visited</li>
            </ul>
          </li>
        </ul>

        <h5>Second iteration</h5>
        <ul>
          <li>1 is popped from the queue</li>
          <li>Neighbors of 1 i.e. s and 3 are traversed</li>
          <li>s is ignored because it is marked as 'visited'</li>
          <li>
            3, which has not been traversed earlier, is traversed. It is:
            <ul>
              <li>Pushed in the queue</li>
              <li>Marked as visited</li>
            </ul>
          </li>
        </ul>

        <h5>Third iteration</h5>
        <ul>
          <li>2 is popped from the queue</li>
          <li>Neighbors of 2 i.e. s, 3, and 4 are traversed</li>
          <li>3 and s are ignored because they are marked as 'visited'</li>
          <li>
            4, which has not been traversed earlier, is traversed. It is:
            <ul>
              <li>Pushed in the queue</li>
              <li>Marked as visited</li>
            </ul>
          </li>
        </ul>

        <h5>Fourth iteration</h5>
        <ul>
          <li>3 is popped from the queue</li>
          <li>Neighbors of 3 i.e. 1, 2, and 5 are traversed</li>
          <li>1 and 2 are ignored because they are marked as 'visited'</li>
          <li>
            5, which has not been traversed earlier, is traversed. It is:
            <ul>
              <li>Pushed in the queue</li>
              <li>Marked as visited</li>
            </ul>
          </li>
        </ul>

        <h5>Fifth iteration</h5>
        <ul>
          <li>4 will be popped from the queue</li>
          <li>Neighbors of 4 i.e. 2 is traversed</li>
          <li>2 is ignored because it is already marked as 'visited'</li>
        </ul>

        <h5>Sixth iteration</h5>
        <ul>
          <li>5 will be popped from the queue</li>
          <li>Neighbors of 5 i.e. 3 is traversed</li>
          <li>3 is ignored because it is already marked as 'visited'</li>
        </ul>

        <p>
          The queue is empty and it comes out of the loop. All the nodes have
          been traversed by using BFS.
        </p>

        <h4>
          The time complexity of BFS is O(V + E), where V is the number of nodes
          and E is the number of edges.
        </h4>
      </div>
    </div>
  );
};

export default BFSLearning;
