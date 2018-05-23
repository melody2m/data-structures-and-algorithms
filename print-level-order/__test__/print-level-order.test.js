'use strict';

const KAryTree = require('../print-level-order');
const KAryNode = require('../kary-node');

const one = new KAryNode(1);
one.appendChild(2); // 0
one.appendChild(3); // 1
one.appendChild(4); // 2

one.children[1].appendChild(5); // 0
one.children[1].appendChild(6); // 1
one.children[1].appendChild(7); // 2

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);

describe('Testing print level order', () => {
  test('#printLevelOrderTraverse', () => {
    console.log(kAryTree.printLevelOrderTraverse());
    expect(kAryTree.printLevelOrderTraverse()).toEqual('');
  });
});
