'use strict';

const validTest = require('../validate-brackets');

describe('validate-brackets.js', () => {
  test('#isValid', () => {
    const string1 = '(){}{}NOTVALID{';
    const string2 = '{VALID}[]';
    const string3 = 'ALSO[NOT]VALID}{][';
    expect(test.validTest(string1)).toEqual(false);
    expect(test.validTest(string2)).toEqual(true);
    expect(test.validTest(string3)).toEqual(false);
  });
});
