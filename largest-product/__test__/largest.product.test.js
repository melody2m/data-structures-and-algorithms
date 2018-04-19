'use strict';

const prod = require('../largest-product');

describe('product.test.js', () => {
  test('returns largest product', () => {
    expect(prod.LargestProduct([[1, 2], [3, 4], [5, 6]])).toEqual(30);
  });
});

describe('product2.test.js', () => {
  test('returns largest product', () => {
    expect(prod.LargestProduct([[1], [2], [8]])).toEqual(16);
  });
});

describe('product3.test.js', () => {
  test('returns largest product', () => {
    expect(prod.LargestProduct([[0, 0, 0], [0, 0, 3], [0, 0, 5]])).toEqual(15);
  });
});
