'use-strict';

const shift = require('../shift-array');

describe('shift.test.js', () => {
  test('return array with insert', () => {
    expect(shift.insertShiftArray([1, 2, 3, 4], 7)).toEqual([1, 2, 7, 3, 4]);
  });
});

describe('shift2.test.js', () => {
  test('return array with insert', () => {
    expect(shift.insertShiftArray([1, 2, 3, 4, 5], 7)).toEqual([1, 2, 3, 7, 4, 5]);
  });
});

describe('shift3.test.js', () => {
  test('return array with insert', () => {
    expect(shift.insertShiftArray([1, 2], 7)).toEqual([1, 7, 2]);
  });
});

