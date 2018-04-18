'use strict';

function reverseArray(arr) {
  const newArr = [];

  for (let i = arr.length - 1; i--; i <= 0) {
    newArr.push(arr[i]);
  }

  return newArr;
}
