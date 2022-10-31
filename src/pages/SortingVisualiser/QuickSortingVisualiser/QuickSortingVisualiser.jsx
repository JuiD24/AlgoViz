import React from "react";

import { useState, useEffect, useRef } from "react";
import "./QuickSortingVisualiser.css";
import { getQuickSortAnimations } from "./QuickSortingAlgorithm.js";

import { UilPlay, UilBackward, UilForward } from "@iconscout/react-unicons";
// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 50;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

let timer = null;

const QuickSortingVisualiser = () => {
  const [array, setArray] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const [allSteps, setAllsteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);

  // const [timer, setTimer] = useState(null);
  // This function will called only once
  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(randomIntFromInterval(5, 50));
    }
    setArray(array);
    setAllsteps([]);
    setCurrentStep(-1);
    const boxes = Array.from(document.getElementsByClassName("array-bar"));

    boxes.forEach((box) => {
      box.style.backgroundColor = PRIMARY_COLOR;
    });

    // console.log(array);
  };

  const stepForward = () => {
    console.log("stepForward");
    if (allSteps.length == 0) {
      return;
    }
    var curr = currentStep + 1;

    if (curr >= allSteps[0].length) {
      return;
    }
    setCurrentStep(curr);

    const [arraySteps, colorSteps] = allSteps;
    console.log(curr, arraySteps[curr]);
    const arrayBars = document.getElementsByClassName("array-bar");
    // const [barOneIdx, newHeight, newColor] = animation[currentStep];
    for (let j = 0; j < arraySteps[curr].length; j++) {
      setTimeout(() => {
        const barOneStyle = arrayBars[j].style;
        barOneStyle.height = `${arraySteps[curr][j]}px`;
        arrayBars[j].innerHTML = arraySteps[curr][j];
        barOneStyle.backgroundColor = colorSteps[curr][j];
      }, 5);
    }
  };

  const stepBackward = () => {
    if (allSteps.length == 0) {
      return;
    }
    console.log("stepBackward");
    var curr = currentStep - 1;

    if (curr < 0) {
      return;
    }
    setCurrentStep(curr);

    const [arraySteps, colorSteps] = allSteps;
    console.log(curr, arraySteps[curr]);
    const arrayBars = document.getElementsByClassName("array-bar");
    // const [barOneIdx, newHeight, newColor] = animation[currentStep];
    for (let j = 0; j < arraySteps[curr].length; j++) {
      setTimeout(() => {
        const barOneStyle = arrayBars[j].style;
        barOneStyle.height = `${arraySteps[curr][j]}px`;
        arrayBars[j].innerHTML = arraySteps[curr][j];
        barOneStyle.backgroundColor = colorSteps[curr][j];
      }, 5);
    }
  };

  const quickSort = () => {
    // console.log(allSteps);
    const allSteps = getQuickSortAnimations(array);
    setAllsteps(allSteps);

    setIsPressed(true);
    const arraySteps = allSteps[0];
    const colorSteps = allSteps[1];
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arraySteps.length; i++) {
      const arrays = arraySteps[i];
      const colors = colorSteps[i];
      for (let j = 0; j < arrays.length; j++) {
        timer = setTimeout(() => {
          const barOneStyle = arrayBars[j].style;
          barOneStyle.height = `${arrays[j]}px`;
          arrayBars[j].innerHTML = arrays[j];
          barOneStyle.backgroundColor = colors[j];

          if (i == arraySteps.length - 1) {
            setIsPressed(false);
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }

    // setIsPressed(false);

    // setAnimations(animation);
    // setIsPressed(true);
    // for (let i = 0; i < animation.length; i++) {
    //   const arrayBars = document.getElementsByClassName("array-bar");
    //   const [barOneIdx, newHeight, newColor] = animation[i];
    //   timer = setTimeout(() => {
    //     setCurrentStep(i);
    //     const barOneStyle = arrayBars[barOneIdx].style;
    //     barOneStyle.height = `${newHeight}px`;
    //     arrayBars[barOneIdx].innerHTML = newHeight;
    //     barOneStyle.backgroundColor = newColor;
    //     if (i == animation.length - 1) {
    //       setIsPressed(false);
    //     }
    //   }, i * ANIMATION_SPEED_MS);
    // }

    // setIsPressed(false);
  };

  const stop = () => {
    console.log("here", timer);
    clearTimeout(timer);
    timer = null;
  };

  return (
    <div className="array-container">
      <div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          >
            {value}
          </div>
        ))}
      </div>

      {/* <button onClick={() => quickSort()}> Quick Sort</button> */}

      <div>
        <button
          className="button1"
          onClick={() => resetArray()}
          disabled={isPressed ? true : false}
          style={{ margin: 5 + "px" }}
        >
          Generate new array
        </button>
        <button
          className="button1"
          onClick={() => quickSort()}
          style={{ margin: 5 + "px" }}
        >
          Play
        </button>
        {/* <button className="button1" onClick={() => stop()}>
          Stop
        </button> */}
        <button
          className="button1"
          disabled={isPressed ? true : false}
          onClick={() => stepForward()}
          style={{ margin: 5 + "px" }}
        >
          Forward
        </button>
        <button
          className="button1"
          disabled={isPressed ? true : false}
          onClick={() => stepBackward()}
          style={{ margin: 5 + "px" }}
        >
          Backward
        </button>
      </div>
    </div>
  );
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

export default QuickSortingVisualiser;
