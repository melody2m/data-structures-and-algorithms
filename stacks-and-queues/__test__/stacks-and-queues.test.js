'use strict';

const Queue = require('../stacks-and-queues');

describe('queues test', () => {
  test('#enqueue', () => {
    const testQueue = new Queue();
    expect(testQueue.enqueue(1)).toEqual([1]);
    expect(testQueue.enqueue(2)).toEqual([1, 2]);
    expect(testQueue.enqueue(3)).toEqual([1, 2, 3]);
  });
  test('#dequeue', () => {
    const testQueue = new Queue();
    testQueue.stackA = [1, 2, 3];
    expect(testQueue.dequeue()).toEqual([2, 3]);
    expect(testQueue.dequeue()).toEqual([3]);
    expect(testQueue.dequeue()).toEqual([]);
  });
});
