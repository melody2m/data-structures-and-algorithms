'use strict';

const BinaryTree = require('../binary-tree');
const Node = require('../node');
const fizzBuzz = require('../fizzbuzz-tree');

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
  test('#inOrderTraversal', () => {
    fizzBuzz.inOrderTraversal(tree.root);
    expect(fizzBuzz.touched).toEqual(['fizz', 'fizz', 'buzz', 'fizz', 'fizzbuzz', 'buzz', 'fizzbuzz', 'fizz', 'buzz']);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.left = seven;
    six.right = eight;
    seven.left = nine;
    fizzBuzz.touched = [];

    fizzBuzz.inOrderTraversal(six);
    expect(fizzBuzz.touched).toEqual(['fizz', 'fizz', 'buzz', 'fizz']);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.left = seven;
    six.right = eight;
    seven.left = nine;
    fizzBuzz.touched = [];
    
    fizzBuzz.inOrderTraversal(three);
    expect(fizzBuzz.touched).toEqual(['fizzbuzz', 'fizz', 'buzz']);
  });
});

