import React from "react";
import "../Learning.css";
// var page = require("./bubbleSort.html");
var im = require("./Insertion-sort-example.gif");

const InsertionSortLearning = () => {
  return (
    <div className="array-container-learn">
      <h2>Insertion Sorting</h2>
      <p>
        In Insertion sort ,Values from the unsorted section are selected and
        placed in the appropriate location in the sorted part.
      </p>
      <div>
        <h3>How does Insertion Sort Work?</h3>
        <img src={im} />

        <h4>First Iteration:</h4>
        <li>
          Select the first element, 6. But it is already in order being the only
          element.
        </li>
        <h4>Second Iteration:</h4>
        <li>
          Take 2nd element, 5. Now compare 5 with 6. Here 6 is greater than 5.
          hence swap 6 and 5.
        </li>
        <h4>Third Iteration:</h4>
        <li>
          Take 3rd element, 3. Both 3 and 6 are not present at their correct
          place so swap them.After swapping, elements 3 and 5 are not sorted,
          thus swap again
        </li>
        <h4>Fourth Iteration:</h4>

        <li>
          Take 4th element, 1. Both 1 and 6 are not present at their correct
          place so swap them.After swapping, elements 1 and 5 are not sorted,
          thus swap again. Finally, 1 and 3 are not sorted either. Thus swap
          again.
        </li>

        <h4>Next Iterations:</h4>
        <li>
          In every Iteration, selected elements gets placed in the appropriate
          location in the sorted part.
        </li>

        <h4>
          Time complexity: O(N<sup>2</sup>)
        </h4>
      </div>
    </div>
  );
};

export default InsertionSortLearning;
