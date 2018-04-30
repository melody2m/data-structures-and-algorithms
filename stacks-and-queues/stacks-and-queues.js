'use strict';

module.exports = class Queue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  enqueue(value) {
    this.stackA.push(value);
    return this.stackA;
  }

  dequeue() {
    const temp = this.stackA.length;
    for (let i = 0; i < temp; i++) {
      this.stackB.push(this.stackA.pop());
    }
    this.stackB.pop();
    for (let i = 0; i < temp - 1; i++) {
      this.stackA.push(this.stackB.pop());
    }
    return this.stackA;
  }
};
