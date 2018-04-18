'use-strict';

const shift = module.exports = {};

shift.shiftArray = (arr, x) => {
  const newArr = [];
  for (let i = 0; i < (arr.length / 2); i++) {
    newArr.push(arr[i]);
  }
  newArr.push(x);
  for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};
