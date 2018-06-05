'use strict';

import mergeSort from '../merge-sort';

const arr1 = [1, 3, 4, 2, 6];
const arr2 = [9, 100, 1];
const arr3 = [0, 7, 7, 4];

describe('Testing merge Sort', () => {
  test('#findRepeat', () => {
    expect(mergeSort(arr1)).toEqual([1, 2, 3, 4, 6]);
    expect(mergeSort(arr2)).toEqual([1, 9, 100]);
    expect(mergeSort(arr3)).toEqual([0, 4, 7, 7]);
  });
});
