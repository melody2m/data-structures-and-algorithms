'use strict';

const prod = module.exports = {};

prod.LargestProduct = (arr) => {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j + 1]) {
        const current = arr[i][j] * arr[i][j + 1];
        if (current > largest) {
          largest = current;
        }
      }
      if (arr[i + 1]) {
        const current = arr[i][j] * arr[i + 1][j];
        if (current > largest) {
          largest = current;
        }
      }
    }
  }
  return largest;
};
