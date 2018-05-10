'use strict';

const findMax = module.exports = {};

let max = 0;

findMax.traversal = (rootNode) => {
  if (!rootNode) {
    return null;
  }
  if (rootNode.value > max) {
    max = rootNode.value;
  }
  console.log(max);

  findMax.traversal(rootNode.left);
  findMax.traversal(rootNode.right);
  return max;
};
