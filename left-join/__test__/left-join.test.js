'use strict';

import leftJoin from '../left-join';

const map1 = { a: 1, b: 2, c: 3 };
const map2 = { a: 4, b: 5, d: 7};

describe('Testing left join function', () => {
  test('#leftJoin', () => {
    const solution = leftJoin(map1, map2);
    expect(solution['a']).toEqual('1 4');
    expect(solution['b']).toEqual('2 5');
    expect(solution['c']).toEqual('3 null');
  });
});
