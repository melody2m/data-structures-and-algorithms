'use strict';

const BinaryTree = require('../binary-tree');
const Node = require('../node');
const findMax = require('../find-maximum-binary-tree');

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;

two.left = six;

three.left = four;
three.right = five;


six.left = seven;
six.right = eight;

seven.left = nine;


describe('find maximum', () => {
  test('#findMax.traversal', () => {
    expect(findMax.traversal(tree.root)).toEqual(9);
    findMax.max = null;
    console.log('TESTFILE', findMax.max);
    expect(findMax.traversal(six)).toEqual(9);
    console.log('TESTFILE', findMax.max);
    findMax.max = null;
    expect(findMax.traversal(three)).toEqual(5);
  });
});

