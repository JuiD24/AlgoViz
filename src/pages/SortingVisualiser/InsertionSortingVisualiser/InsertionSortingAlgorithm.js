export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  const arrayStep = [];
  const colorStep = [];
  const colorArray = new Array(array.length).fill("turquoise");
  insertionSortHelper(array, animations, arrayStep, colorStep, colorArray);
  console.log(animations);
  // return animations;
  return [arrayStep, colorStep];
}

function insertionSortHelper(
  mainArray,
  animations,
  arrayStep,
  colorStep,
  colorArray
) {
  for (var j = 0; j < mainArray.length; j++) {
    animations.push([j, mainArray[j], "yellow"]); //color update
    colorArray[j] = "yellow";
    arrayStep.push(mainArray.slice());
    colorStep.push(colorArray.slice());

    var key = mainArray[j];
    var i = j - 1;
    while (i >= 0 && mainArray[i] > key) {
      animations.push([i, mainArray[i], "red"]);
      animations.push([i + 1, mainArray[i + 1], "red"]);
      colorArray[i] = "red";
      colorArray[i + 1] = "red";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      var temp = mainArray[i + 1];
      mainArray[i + 1] = mainArray[i];
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      mainArray[i] = temp;
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      animations.push([i, mainArray[i], "red"]);
      animations.push([i + 1, mainArray[i + 1], "red"]);

      //   if (i == j - 1) {
      //     animations.push([i + 1, mainArray[i + 1], "yellow"]);
      //   } else {
      //     animations.push([i + 1, mainArray[i + 1], "turquoise"]);
      //   }

      i -= 1;
    }

    //mainArray[i + 1] = key;

    for (var t = i + 1; t < j + 1; t++) {
      colorArray[t] = "green";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());
      animations.push([t, mainArray[t], "green"]);
    }
  }

  //   animations.push([j - 1, mainArray[j - 1], "green"]);
}
