'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  kthFromEnd(k) {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
      counter += 1;
    }
    currentNode = this.head;
    while (counter - k > 0) {
      currentNode = currentNode.next;
      counter -= 1;
    }
    return currentNode;
  }
};
