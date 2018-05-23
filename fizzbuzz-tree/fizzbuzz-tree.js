'use strict';

const fizzBuzz = module.exports = {};

fizzBuzz.touched = [];

fizzBuzz.inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return null;
  }
  fizzBuzz.inOrderTraversal(rootNode.left);

  if (rootNode.value % 15 === 0) {
    rootNode.value = 'fizzbuzz';
  }
  if (rootNode.value % 3 === 0) {
    rootNode.value = 'fizz';
  }
  if (rootNode.value % 5 === 0) {
    rootNode.value = 'buzz';
  }

  fizzBuzz.touched.push(rootNode.value);

  fizzBuzz.inOrderTraversal(rootNode.right);
  return rootNode;
};

