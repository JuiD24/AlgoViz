import React from "react";
import "../Learning.css";
import { useState, useEffect } from "react";
// var page = require("./bubbleSort.html");
var im = require("./Quicksort-example.gif");

const QuickSortLearning = () => {
  return (
    <div className="array-container-learn">
      <h2>Quick Sorting</h2>
      <p>
        QuickSort is a Divide and Conquer algorithm, just like Merge Sort. It
        chooses an element to act as a pivot and divides the given array around
        it. There are numerous variations of quickSort that select pivot in
        various ways.
        <li>Choose the first element as the pivot.</li>
        <li>Choose the last element as the pivot</li>
        <li>Choose the middle element as the pivot</li>
      </p>
      <div>
        <h3>How does Quick Sort Work?</h3>
        <p>
          Partitioning is the primary process in quickSort. The goal of
          partitions is to sort an array such that, given an array and element x
          as the pivot, any elements smaller than and greater than x are placed
          before and after x, respectively.
        </p>

        <img src={im} />

        <h4>Illustration:</h4>
        <li>
          In this case, 3 is the pivot value. If the element is smaller than 3,
          switch it with the element to the left. Repeat this process for all
          items to the right.
        </li>
        <li>
          Consider pointer i poiting to 0th position. Swap 2 with 0th element
          since 2 is smaller than 3. Now increment the pointer i to next
          position. Keep looking for elements smaller than 3 and swap that
          element with ith position.
        </li>
        <li>
          Now all the elements smaller than 3 are on the left side and all
          elements greater than 3 are on the right side. Now recursively call
          quick sort on each partition.
        </li>
        <li>
          Now, Keep partitioning these two arrays into two until you can no
          longer divide them any more.
        </li>

        <h4>Time complexity: O(N log(N))</h4>
      </div>
    </div>
  );
};

export default QuickSortLearning;
