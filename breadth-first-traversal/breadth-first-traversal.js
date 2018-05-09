'use strict';

const breadthFirst = module.exports = {};

breadthFirst.touched = [];
breadthFirst.queue = [];

breadthFirst.traversal = (rootNode) => {
  breadthFirst.queue.push(rootNode);
  let current = null;

  while (breadthFirst.queue.length > 0) {
    current = breadthFirst.queue.pop();
    
    breadthFirst.touched.push(current.value);

    if (current.left) {
      breadthFirst.queue.unshift(current.left);
    }
    if (current.right) {
      breadthFirst.queue.unshift(current.right);
    }
  }
  return breadthFirst.touched;
};
