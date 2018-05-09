'use strict';

const breadthFirst = module.exports = {};

breadthFirst.touched = [];
breadthFirst.queue = [];

breadthFirst.traversal = (rootNode) => {
  breadthFirst.queue.push(rootNode);
  let current = null;
  while (breadthFirst.queue) {
    current = breadthFirst.queue.pop();
    console.log(current);
    console.log(breadthFirst.queue);
    breadthFirst.touched.push(current.value);
    breadthFirst.queue.unshift(current.left);
    breadthFirst.queue.unshift(current.right);
  }
  return breadthFirst.touched;
};
