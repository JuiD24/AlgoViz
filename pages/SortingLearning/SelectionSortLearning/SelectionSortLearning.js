import React from "react";
import "../Learning.css";
import { useState, useEffect } from "react";
// var page = require("./bubbleSort.html");
var im = require("./Selection-Sort-Gif.webp");

const SelectionSortLearning = () => {
  return (
    <div className="array-container-learn">
      <h2>Selection Sorting</h2>
      <p>
        In order to sort an array, the selection sort algorithm repeatedly
        selects the smallest member from the unsorted portion and places it at
        the front.
      </p>
      <div>
        <h3>How does Selection Sort Work?</h3>
        <p>In a given array, the method maintains two subarrays.</p>
        <li>sorted subarray</li>
        <li>Unsorted subarray</li>
        <p>
          The least element from the unsorted subarray is chosen and moved to
          the sorted subarray in each iteration of the selection sort.
        </p>
        <img src={im} />

        <h4>First Iteration:</h4>
        <li>
          The entire array is iterated over from index 0 to 4 sequentially for
          the first position in the sorted array. After going through the entire
          array, it is evident that 1 is the lowest value.
        </li>
        <li>
          So, swap out 5 for 1. One iteration later, 1—which also happens to be
          the least value in the array—tends to show up at the top of the sorted
          list.
        </li>

        <h4>Second Iteration:</h4>
        <li>
          Repeat the sequential traversal of the rest of the array for the
          second slot, where 3 is present. Since 2 is the second-lowest value in
          the array and should be in the second position, these values should be
          switched.
        </li>

        <h4>Third Iteration:</h4>
        <li>
          Repeat the sequential traversal of the rest of the array for the third
          slot, where 4 is present. Since 3 is the third-lowest value in the
          array and should be in the third position, these values should be
          switched.
        </li>

        <h4>Fourth Iteration:</h4>
        <li>
          Repeat the sequential traversal of the rest of the array for the
          fourth slot, where 5 is present. Since 4 is the fourth-lowest value in
          the array and should be in the fourth position, these values should be
          switched.
        </li>

        <h4>
          Time complexity: O(N<sup>2</sup>)
        </h4>
      </div>
    </div>
  );
};

export default SelectionSortLearning;
