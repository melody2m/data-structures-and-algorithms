'use strict';

const search = module.exports = {};

search.binSearch = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
    if (i === arr.length - 1) {
      return -1;
    }
  }
  return undefined;
};
