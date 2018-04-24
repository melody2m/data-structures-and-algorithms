'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;  
  }

  insertBefore(value, newVal) {
    const newNode = new Node(newVal);
    let currentNode = this.head;
      
    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return null;
    }
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return null;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  insertAfter(value, newVal) {
    const newNode = new Node(newVal);
    let currentNode = this.head;

    if (this.head.value === value) {
      newNode.next = this.head.next; 
      this.head.next = newNode;
      return null;
    }
    while (currentNode.next) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return null;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  append(newVal) {
    const newNode = new Node(newVal);
    let currentNode = this.head;

    if (!this.head) {
      this.head = newNode;
      return null;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return null;
  }

};
