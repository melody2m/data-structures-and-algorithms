'use strict';

import BinaryTree from '../binary-tree';
import Node from '../node';
import fizzBuzz from '../fizzbuzz-tree';

const one = new Node(10);
const two = new Node(30);
const three = new Node(3);
const four = new Node(15);
const five = new Node(5);
const six = new Node(10);
const seven = new Node(12);
const eight = new Node(9);
const nine = new Node(9);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.left = seven;
six.right = eight;

seven.left = nine;


describe('traversal and fizzbuzz', () => {
  test('#fizzBuzz.traversal', () => {
    expect(fizzBuzz.inOrderTraversal(tree.root)).toEqual(['fizz', 'fizz', 'buzz', 'fizz', 'fizzbuzz', 'buzz', 'fizzbuzz', 'fizz', 'buzz']);
    fizzBuzz.touched = [];
    expect(fizzBuzz.inOrderTraversal(six)).toEqual(['fizz', 'fizz', 'buzz', 'fizz']);
    fizzBuzz.touched = [];
    expect(fizzBuzz.inOrderTraversal(three)).toEqual(['fizzbuzz', 'fizz', 'buzz']);
  });
});

