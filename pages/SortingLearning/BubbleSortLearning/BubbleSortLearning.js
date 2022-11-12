import React from "react";
import "../Learning.css";
// var page = require("./bubbleSort.html");
var im = require("./Bubble-sort-example.gif");

const BubbleSortLearning = () => {
  return (
    <div className="array-container-learn">
      <h2>Bubble Sorting</h2>
      <p>
        The most straightforward sorting method is Bubble Sort, which repeatedly
        switches adjacent elements if they are in the wrong order.
      </p>
      <div>
        <h3>How does Bubble Sort Work?</h3>
        <img src={im} />

        <h4>First Iteration: (i=0)</h4>
        <li>
          It begins by comparing the first two elements to see which one is
          greater.Here, algorithm compares the first two elements, and swaps
          since 6 &gt; 5.
        </li>
        <li>Swaps 6 and 3, since 6 &gt; 3</li>
        <li>Swaps 6 and 1, since 6 &gt; 1</li>
        <li>
          Now, since these elements are already in order (8 &gt; 6), algorithm
          does not swap them.
        </li>
        <li>Swaps 8 and 7, since 8 &gt; 7</li>
        <li>Swaps 8 and 2, since 8 &gt; 2</li>
        <li>Swaps 8 and 4, since 8 &gt; 4</li>

        <h4>Second Iteration: (i=1)</h4>
        <li>
          It will keep comparing adjacent items and switch them if they are in
          the wrong sequence. But this time, it will scan all the elements
          except the last one.
        </li>

        <h4>Next Iterations: (i=2,3...)</h4>
        <li>
          In every Iteration, It will check upto length(array) - i elements.
        </li>

        <h4>
          Time complexity O(N<sup>2</sup>)
        </h4>
      </div>
    </div>
  );
};

export default BubbleSortLearning;
