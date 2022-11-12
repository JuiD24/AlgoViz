// export const mergeSort = (array) => {
//   if (array.length == 1) return array;
//   const middleIndex = Math.floor(array.length / 2);
//   const firstHalf = mergeSort(array.slice(0, middleIndex));
//   const secondHalf = mergeSort(array.slice(middleIndex));
//   const sortedArray = [];
//   let i = 0,
//     j = 0;

//   while (i < firstHalf.length && j < secondHalf.length) {
//     if (firstHalf[i] < secondHalf[j]) {
//       sortedArray.push(firstHalf[i++]);
//     } else {
//       sortedArray.push(secondHalf[j++]);
//     }
//   }
//   while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
//   while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
//   return sortedArray;
// };

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  // const auxiliaryArray = array.slice();
  const arrayStep = [];
  const colorStep = [];
  const colorArray = new Array(array.length).fill("turquoise");

  mergeSortHelper(
    array,
    0,
    array.length - 1,

    arrayStep,
    colorStep,
    colorArray
  );
  // console.log(array, animations);
  return [arrayStep, colorStep];
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,

  arrayStep,
  colorStep,
  colorArray
) {
  if (startIdx < endIdx) {
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    colorArray[middleIdx] = "yellow";
    arrayStep.push(mainArray.slice());
    colorStep.push(colorArray.slice());
    mergeSortHelper(
      mainArray,
      startIdx,
      middleIdx,

      arrayStep,
      colorStep,
      colorArray
    );
    mergeSortHelper(
      mainArray,
      middleIdx + 1,
      endIdx,

      arrayStep,
      colorStep,
      colorArray
    );
    doMerge(
      mainArray,
      startIdx,
      middleIdx,
      endIdx,

      arrayStep,
      colorStep,
      colorArray
    );
  }
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,

  arrayStep,
  colorStep,
  colorArray
) {
  var p = startIdx,
    q = middleIdx + 1;
  var Arr = [],
    k = 0;

  for (var i = startIdx; i <= endIdx; i++) {
    if (p > middleIdx) {
      Arr[k++] = mainArray[q++];
      colorArray[q - 1] = "red";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());
    } else if (q > endIdx) {
      Arr[k++] = mainArray[p++];
      colorArray[p - 1] = "red";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());
    } else if (mainArray[p] < mainArray[q]) {
      Arr[k++] = mainArray[p++];
      colorArray[p - 1] = "red";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());
    } else {
      Arr[k++] = mainArray[q++];
      colorArray[q - 1] = "red";
      arrayStep.push(mainArray.slice());
      colorStep.push(colorArray.slice());
    }
  }

  for (var t = 0; t < k; t++) {
    mainArray[startIdx++] = Arr[t];
    colorArray[startIdx - 1] = "green";
    arrayStep.push(mainArray.slice());
    colorStep.push(colorArray.slice());
  }
}
