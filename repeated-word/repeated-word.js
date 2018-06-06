'use strict';

function findRepeat(str) {
  const arr = str.split(' ');
  const Map = {};
  for (let i = 0; i < arr.length; i++) {
    if (Map[arr[i]]) {
      return arr[i];
    } Map[arr[i]] = true; 
  }
  return null;
}

export default findRepeat;
