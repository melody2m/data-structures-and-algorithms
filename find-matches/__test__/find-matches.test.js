'use strict';

const KAryTree = require('../find-matches');
const KAryNode = require('../kary-node');

const one = new KAryNode(1);
one.appendChild(2); // 0
one.appendChild(3); // 1
one.appendChild(4); // 2

one.children[1].appendChild(5); // 0
one.children[1].appendChild(5); // 1
one.children[1].appendChild(5); // 2

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);

describe('Testing find matches', () => {
  test('#findMatches', () => {
    console.log(kAryTree.findMatchesTraverse(5));
    const test = kAryTree.findMatchesTraverse(5);
    expect(test.length).toEqual(3);
  });
});
