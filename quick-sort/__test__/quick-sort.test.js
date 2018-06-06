'use strict';

import quickSort from '../quick-sort';

const arr1 = [1, 3, 4, 2, 6];
const arr2 = [9, 100, 1];
const arr3 = [0, 7, 7, 4];

describe('Testing merge Sort', () => {
  test('testone', () => {
    expect(quickSort(arr1, 0, 4)).toEqual([1, 2, 3, 4, 6]);
  });
  test('testtwo', () => {
    expect(quickSort(arr2, 0, 2)).toEqual([1, 9, 100]);
  });
  test('testthree', () => {
    expect(quickSort(arr3, 0, 3)).toEqual([0, 4, 7, 7]);
  });
});
