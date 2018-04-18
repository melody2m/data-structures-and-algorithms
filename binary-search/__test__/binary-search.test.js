'use strict';

const search = require('../binary-search');

describe('search.test.js', () => {
  test('returns index of provided number', () => {
    expect(search.binSearch([1, 2, 3, 4], 2)).toEqual(1);
  });
});

describe('search2.test.js', () => {
  test('returns index of provided number', () => {
    expect(search.binSearch([0, 50], 0)).toEqual(0);
  });
});

describe('search3.test.js', () => {
  test('returns -1', () => {
    expect(search.binSearch([1, 2, 3, 4], 7)).toEqual(-1);
  });
});
