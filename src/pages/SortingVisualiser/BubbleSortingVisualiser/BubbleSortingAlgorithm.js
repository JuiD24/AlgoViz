export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  const arrayStep = [];
  const colorStep = [];
  const colorArray = new Array(array.length).fill("turquoise");

  bubbleSortHelper(array, animations, arrayStep, colorStep, colorArray);
  console.log(animations);
  // return animations;
  return [arrayStep, colorStep];
}

function bubbleSortHelper(
  mainArray,
  animations,
  arrayStep,
  colorStep,
  colorArray
) {
  for (var i = 0; i < mainArray.length - 1; i++) {
    for (var j = 0; j < mainArray.length - i - 1; j++) {
      colorArray[j] = "yellow";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      animations.push([j, j + 1]); //color update

      if (mainArray[j] > mainArray[j + 1]) {
        colorArray[j] = "red";
        colorArray[j + 1] = "red";
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());
        animations.push([j, j + 1]); //color update

        var temp = mainArray[j];
        mainArray[j] = mainArray[j + 1];
        colorArray[j] = "turquoise";
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());

        mainArray[j + 1] = temp;
        colorArray[j + 1] = "turquoise";
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());

        animations.push([j, mainArray[j]]); //height update
        animations.push([j + 1, mainArray[j + 1]]); //height update
      } else {
        colorArray[j] = "turquoise";
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());

        animations.push([j, j + 1]); //color update
        animations.push([j, mainArray[j]]); //height update
        animations.push([j + 1, mainArray[j + 1]]); //height update
      }
    }
  }
}
