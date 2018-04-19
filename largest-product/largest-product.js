'use strict';

const prod = module.exports = {};

prod.LargestProduct = (arrObj) => {
  let largest = 0;
  for (let i = 0; i < arrObj.length; i++) {
    for (let j = 0; j < arrObj[i].length; j++) {
      if (arrObj[i][j + 1]) {
        const current = arrObj[i][j] * arrObj[i][j + 1];
        if (current > largest) {
          largest = current;
        }
      }
      if (arrObj[i + 1]) {
        const current = arrObj[i][j] * arrObj[i + 1][j];
        if (current > largest) {
          largest = current;
        }
      }
    }
  }
  return largest;
};
