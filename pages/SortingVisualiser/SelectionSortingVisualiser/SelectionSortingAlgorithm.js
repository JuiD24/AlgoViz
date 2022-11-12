export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  const arrayStep = [];
  const colorStep = [];
  const colorArray = new Array(array.length).fill("turquoise");
  selectionSortHelper(array, animations, arrayStep, colorStep, colorArray);
  console.log(animations);
  // return animations;
  return [arrayStep, colorStep];
}

function selectionSortHelper(
  mainArray,
  animations,
  arrayStep,
  colorStep,
  colorArray
) {
  for (var i = 0; i < mainArray.length - 1; i++) {
    animations.push([i, mainArray[i], "red"]); //color update change to red
    colorArray[i] = "red";
    arrayStep.push(mainArray.slice());
    colorStep.push(colorArray.slice());

    var index_min = i;

    for (var j = i + 1; j < mainArray.length; j++) {
      animations.push([j, mainArray[j], "yellow"]); //color update
      colorArray[j] = "yellow";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      if (mainArray[j] < mainArray[index_min]) {
        if (index_min != i) {
          animations.push([index_min, mainArray[index_min], "turquoise"]); //before updating min index make it color to blue (original color)
          colorArray[index_min] = "turquoise";
          arrayStep.push(mainArray.slice());
          colorStep.push(colorArray.slice());
        }
        index_min = j; //update min index

        animations.push([index_min, mainArray[index_min], "red"]); //color update new min index
        colorArray[index_min] = "red";
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());
      } else {
        animations.push([j, mainArray[j], "turquoise"]); //color update
        colorArray[j] = "turquoise";
        arrayStep.push(mainArray.slice());
        colorStep.push(colorArray.slice());
      }
    }

    if (index_min != i) {
      var temp = mainArray[index_min];
      mainArray[index_min] = mainArray[i];
      colorArray[index_min] = "red";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      mainArray[i] = temp;
      colorArray[i] = "red";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());

      animations.push([index_min, mainArray[index_min], "red"]); //height update
      animations.push([i, mainArray[i], "red"]); //height update

      animations.push([index_min, mainArray[index_min], "turquoise"]); //color update
      colorArray[index_min] = "turquoise";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());
    }

    animations.push([i, mainArray[i], "green"]); //color update change back to blue
    colorArray[i] = "green";
    arrayStep.push(mainArray.slice());
    colorStep.push(colorArray.slice());
  }
  animations.push([i, mainArray[i], "green"]); //color update
  colorArray[i] = "green";
  arrayStep.push(mainArray.slice());
  colorStep.push(colorArray.slice());
}
