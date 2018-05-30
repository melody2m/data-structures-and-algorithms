'use strict';

const Queue = require('queue-fifo');

module.exports = class KAryTree {
  constructor(root) {
    this.root = root;
  }

  findMatchesTraverse(value) {
    if (!this.root) {
      return null;
    }
    return this.findMatches(this.root, value);
  }

  findMatches(root, value) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;
    const result = [];

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      if (currentNode.value === value) {
        result.push(currentNode);
      }
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return result;
  }
};

