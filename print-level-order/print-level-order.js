'use strict';

const Queue = require('queue-fifo');
const Node = require('./kary-node');

module.exports = class KAryTree {
  constructor(root) {
    this.root = root;
  }

  printLevelOrderTraverse() {
    if (!this.root) {
      return null;
    }
    return this.printLevelOrder(this.root);
  }

  printLevelOrder(root) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;
    const specialNode = new Node('\n');
    let result = '';

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      if (currentNode === root) {
        result += `${currentNode.value} \n`;
        for (let i = 0; i < currentNode.children.length; i++) {
          queue.enqueue(currentNode.children[i]);
        }
        queue.enqueue(specialNode);
      }

      if (currentNode.children.length > 1 && currentNode !== root) {
        result += currentNode.value;
        for (let i = 0; i < currentNode.children.length; i++) {
          queue.enqueue(currentNode.children[i]);
        }
      }
      if (currentNode === specialNode) {
        queue.enqueue(specialNode);
        result += currentNode.value;
      }
    }
    return result;
  }
};

