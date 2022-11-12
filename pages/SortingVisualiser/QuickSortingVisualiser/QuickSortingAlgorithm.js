import { animations } from "framer-motion";

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  const arrayStep = [];
  const colorStep = [];
  const colorArray = new Array(array.length).fill("turquoise");
  // colorStep.fill("turquoise", 0, );

  quickSort(
    array.slice(),
    colorArray,
    0,
    array.length - 1,
    animations,
    arrayStep,
    colorStep
  );
  // console.log(animations);
  return [arrayStep, colorStep];
}

function quickSort(
  mainArray,
  colorArray,
  startIdx,
  endIdx,
  animations,
  arrayStep,
  colorStep
) {
  if (startIdx < endIdx) {
    var piv_pos = quickSortHelper(
      mainArray,
      colorArray,
      startIdx,
      endIdx,
      animations,
      arrayStep,
      colorStep
    );
    quickSort(
      mainArray,
      colorArray,
      startIdx,
      piv_pos - 1,
      animations,
      arrayStep,
      colorStep
    );
    quickSort(
      mainArray,
      colorArray,
      piv_pos + 1,
      endIdx,
      animations,
      arrayStep,
      colorStep
    );
  }
}

function quickSortHelper(
  mainArray,
  colorArray,
  startIdx,
  endIdx,
  animations,
  arrayStep,
  colorStep
) {
  var i = startIdx + 1;
  var piv = mainArray[startIdx];

  arrayStep.push(mainArray.slice());
  colorStep.push(colorArray.slice());

  animations.push([startIdx, mainArray[startIdx], "yellow"]); //color update
  colorArray[startIdx] = "yellow";
  arrayStep.push(mainArray.slice());
  colorStep.push(colorArray.slice());

  for (var j = startIdx + 1; j <= endIdx; j++) {
    if (mainArray[j] < piv) {
      animations.push([j, mainArray[j], "yellow"]); //color update
      colorArray[j] = "yellow";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      animations.push([i, mainArray[i], "red"]);
      colorArray[i] = "red";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      if (i != j) {
        animations.push([j, mainArray[j], "red"]);
        colorArray[j] = "red";
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());

        var temp = mainArray[i];
        mainArray[i] = mainArray[j];
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());

        mainArray[j] = temp;
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());

        animations.push([i, mainArray[i], "red"]);
        animations.push([j, mainArray[j], "red"]);

        animations.push([j, mainArray[j], "turquoise"]);
        colorArray[j] = "turquoise";
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());
      }

      animations.push([i, mainArray[i], "turquoise"]);
      colorArray[i] = "turquoise";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      i += 1;
    }
  }

  animations.push([startIdx, mainArray[startIdx], "red"]); //color update
  colorArray[startIdx] = "red";
  arrayStep.push(mainArray.slice());
  colorStep.push(colorArray.slice());

  animations.push([i - 1, mainArray[i - 1], "red"]); //color update
  colorArray[i - 1] = "red";
  arrayStep.push(mainArray.slice());
  colorStep.push(colorArray.slice());

  var temp = mainArray[startIdx];
  mainArray[startIdx] = mainArray[i - 1];
  arrayStep.push(mainArray.slice());
  colorStep.push(colorArray.slice());

  mainArray[i - 1] = temp;
  arrayStep.push(mainArray.slice());
  colorStep.push(colorArray.slice());

  animations.push([startIdx, mainArray[startIdx], "red"]); //color update

  animations.push([i - 1, mainArray[i - 1], "red"]); //color update

  for (var t = startIdx; t < i; t++) {
    animations.push([t, mainArray[t], "green"]);
    colorArray[t] = "green";
    arrayStep.push(mainArray.slice());
    colorStep.push(colorArray.slice());
  }

  return i - 1;

  //   animations.push([j - 1, mainArray[j - 1], "green"]);
}
