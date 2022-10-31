import React from "react";
import "../Learning.css";
import { useState, useEffect } from "react";
// var page = require("./bubbleSort.html");
var im = require("./Merge-sort-example.gif");

const MergeSortLearning = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src =
  //     "https://www.jdoodle.com/assets/jdoodle-pym.min.js” type=”text/javascript";

  //   document.body.appendChild(script);

  //   // return () => {
  //   //   // clean up the script when the component in unmounted
  //   //   document.body.removeChild(script);
  //   // };
  // }, []);

  return (
    <div className="array-container-learn">
      <h2>Merge Sorting</h2>
      <p>
        The Merge Sort algorithm is based on the Divide and Conquer paradigm.
        This algorithm divides the array into two equal parts, which are then
        combined in a sorted way.
      </p>
      <div>
        <h3>How does Merge Sort Work?</h3>
        <p>
          The array is divided in half repeatedly until there is no more room
          for division. This indicates that the splitting will stop if the array
          becomes empty or has just one element left, which is the base case for
          stopping the recursion.
        </p>
        <img src={im} />

        <h4>Illustration:</h4>
        <li>
          If an array's left index is lower than its right index, its midpoint
          is calculated.
        </li>
        <li>
          Here, we see that an array of 8 items is divided into two arrays of
          size 4 and 4 respectively. Check if the left index for both arrays is
          lower than the right index, and if so, calculate the midpoints for
          both arrays once more.
        </li>
        <li>
          Now, keep dividing these two arrays into half until you can no longer
          divide them any more.
        </li>
        <li>
          Start merging the elements again based on comparison of elements
        </li>
        <li>
          Compare elements from both lists and arrange them in ascending order
          one at a time to integrate elements from two lists into one.
        </li>
        {/* <div data-pym-src="https://www.jdoodle.com/embed/v0/5ol8"></div> */}
        <h4>Time complexity: O(N log(N))</h4>
      </div>
    </div>
  );
};

export default MergeSortLearning;
