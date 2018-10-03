function arrayReverse(arr) {
  let newArr = [];
  let counter = 0;
  const maxIndex = arr.length - 1;
  let i = maxIndex;
  for (i; i >= 0; i--) {
    newArr[counter] = arr[i];
    counter ++;
  }
  return newArr;
}

function arrayReverseStretchGoal(arr) {
  let newArr = [];
  arr.forEach(function(item) {
      newArr.unshift(item);
  });
  return newArr;
}