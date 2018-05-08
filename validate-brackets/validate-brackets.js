'use strict';

const validTest = module.exports = {};

test.validTest = (string) => {
  const arr = string.split('');
  let LP = 0;
  let RP = 0;
  let LS = 0;
  let RS = 0;
  let LC = 0;
  let RC = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      LP += 1;
    }
    if (arr[i] === ')') {
      RP += 1;
    }
    if (arr[i] === '[') {
      LS += 1;
    }
    if (arr[i] === ']') {
      RS += 1;
    }
    if (arr[i] === '{') {
      LC += 1;
    }
    if (arr[i] === '}') {
      RC += 1;
    }
    if (RP > LP || RS > LS || RC > LC) {
      return false;
    }
  }

  if (LP === RP && LS === RS && LC === RC) {
    return true;
  }
  return false;
};
