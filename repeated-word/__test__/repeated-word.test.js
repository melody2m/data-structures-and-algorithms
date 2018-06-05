'use strict';

import findRepeat from '../repeated-word';

describe('Testing find repeat function', () => {
  test('#findRepeat', () => {
    expect(findRepeat('a b c d e f b')).toEqual('b');
    expect(findRepeat('a b c a e f b')).toEqual('a');
    expect(findRepeat('a b c d e f g')).toEqual(null);
  });
});
