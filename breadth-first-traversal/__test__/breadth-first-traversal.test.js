'use strict';

const BinaryTree = require('../binary-tree');
const Node = require('../node');
const breadthFirst = require('../breadth-first-traversal');

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


describe('breadth first traversal', () => {
  test('#breadthFirst.traversal', () => {
    expect(breadthFirst.traversal(tree.root)).toEqual([1, 2, 3, 6, 4, 5, 7, 8, 9]);
    breadthFirst.touched = [];
    expect(breadthFirst.traversal(six)).toEqual([6, 7, 8, 9]);
    breadthFirst.touched = [];
    expect(breadthFirst.traversal(three)).toEqual([3, 4, 5]);
  });
});

